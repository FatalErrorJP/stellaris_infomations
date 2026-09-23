let chartInstance = null;
let rawData = {
    dates: [],   
    empires: {},
    empireOrder: [] 
};
let empireColors = {}; 
let loadedFiles = [];

const fileInput = document.getElementById('fileInput');
const clearDataBtn = document.getElementById('clearDataBtn');
const fileNameDisplay = document.getElementById('fileNameDisplay');
const empireListContainer = document.getElementById('empireList');
const timeUnitRadios = document.querySelectorAll('input[name="timeUnit"]');
const metricCheckboxes = document.querySelectorAll('input[name="metric"]');
const btnSelectAll = document.getElementById('selectAllEmpires');
const btnDeselectAll = document.getElementById('deselectAllEmpires');
const startYearInput = document.getElementById('startYear');
const endYearInput = document.getElementById('endYear');

fileInput.addEventListener('change', handleFileUpload);
timeUnitRadios.forEach(radio => radio.addEventListener('change', updateChart));
metricCheckboxes.forEach(checkbox => checkbox.addEventListener('change', updateChart));
startYearInput.addEventListener('change', updateChart);
endYearInput.addEventListener('change', updateChart);

btnSelectAll.addEventListener('click', () => {
    document.querySelectorAll('.empire-checkbox').forEach(cb => cb.checked = true);
    updateChart();
});
btnDeselectAll.addEventListener('click', () => {
    document.querySelectorAll('.empire-checkbox').forEach(cb => cb.checked = false);
    updateChart();
});

clearDataBtn.addEventListener('click', () => {
    rawData = { dates: [], empires: {}, empireOrder: [] };
    empireColors = {};
    loadedFiles = [];
    fileNameDisplay.textContent = "ファイルが選択されていません";
    fileNameDisplay.title = "";
    fileInput.value = ""; // ファイル入力のリセット
    startYearInput.value = 2200;
    endYearInput.value = 2500;
    empireListContainer.innerHTML = '';

    if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
    }
});

// カラー生成関連
function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

function hexToRgba(hex, alpha) {
    if (!/^#([0-9A-Fa-f]{6})$/.test(hex)) return hex;
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    loadedFiles.push(file.name);
    fileNameDisplay.textContent = `${loadedFiles.length}個のファイルを読み込み済`;
    fileNameDisplay.title = loadedFiles.join('\n');

    const reader = new FileReader();
    reader.onload = (event) => {
        const tsv = event.target.result;
        parseTSV(tsv);
        assignColors();
        generateEmpireList();
        updateChart();
    };
    reader.readAsText(file);

    // 同じファイルを再度選べるようにリセットしておく
    e.target.value = '';
}

function parseTSV(tsv) {
    const lines = tsv.trim().split(/\r?\n/);
    if (lines.length < 2) return;

    const headers = lines[0].split('\t').map(h => h.trim());
    const dateIdx = headers.indexOf('Game Date');
    const empireIdx = headers.indexOf('Empire');
    const econIdx = headers.indexOf('Economy');
    const milIdx = headers.indexOf('Military');
    const techIdx = headers.indexOf('Tech');
    const dateSet = new Set(rawData.dates);

    for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].split('\t');
        if (cols.length < headers.length) continue;

        const dateStr = cols[dateIdx].trim();
        const empire = cols[empireIdx].trim();

        const econStr = cols[econIdx] ? cols[econIdx].trim() : '';
        const milStr = cols[milIdx] ? cols[milIdx].trim() : '';
        const techStr = cols[techIdx] ? cols[techIdx].trim() : '';

        const econ = econStr === '' ? null : (parseFloat(econStr) || 0);
        const mil = milStr === '' ? null : (parseFloat(milStr) || 0);
        const tech = techStr === '' ? null : (parseFloat(techStr) || 0);

        let total = null;
        if (econ !== null || mil !== null || tech !== null) {
            total = (econ || 0) + (mil || 0) + (tech || 0);
        }

        dateSet.add(dateStr);

        // 新しい帝国が見つかった場合のみ追加
        if (!rawData.empires[empire]) {
            rawData.empires[empire] = {};
            rawData.empireOrder.push(empire); 
        }

        // ★Primary Key (empire + dateStr) にそのまま上書き代入
        // 過去のデータがあっても、後から読み込んだTSVのデータに置換される
        rawData.empires[empire][dateStr] = { Economy: econ, Military: mil, Tech: tech, Total: total };
    }
    // 日付を再ソートして保存
    rawData.dates = Array.from(dateSet).sort();

    // 入力欄の自動調整
    if (rawData.dates.length > 0) {
        const firstYear = parseInt(rawData.dates[0].substring(0, 4), 10);
        const lastYear = parseInt(rawData.dates[rawData.dates.length - 1].substring(0, 4), 10);

        // 1ファイル目の時だけ完全上書きし、2ファイル目以降は範囲を拡張する
        if (loadedFiles.length === 1) {
            startYearInput.min = firstYear;
            startYearInput.max = lastYear;
            startYearInput.value = firstYear;
            endYearInput.min = firstYear;
            endYearInput.max = lastYear;
            endYearInput.value = lastYear;
        } else {
            const currentStart = parseInt(startYearInput.value, 10);
            const currentEnd = parseInt(endYearInput.value, 10);

            // 下限・上限の更新
            startYearInput.min = Math.min(parseInt(startYearInput.min, 10) || firstYear, firstYear);
            startYearInput.max = Math.max(parseInt(startYearInput.max, 10) || lastYear, lastYear);
            endYearInput.min = startYearInput.min;
            endYearInput.max = startYearInput.max;

            // 自動的に表示領域を広げる
            if (currentEnd < lastYear) endYearInput.value = lastYear;
            if (currentStart > firstYear) startYearInput.value = firstYear;
        }
    }
}

function assignColors() {
    const empires = rawData.empireOrder;
    const numEmpires = empires.length || 1;

    empires.forEach((empire, index) => {
        // ★修正：まだ色が割り当てられていない新規帝国のみ色を計算する（ユーザー変更色を維持）
        if (!empireColors[empire]) {
            const hue = Math.floor((index / numEmpires) * 360);
            empireColors[empire] = hslToHex(hue, 75, 55);
        }
    });
}

function generateEmpireList() {
    // ★修正：再描画前に現在のチェックボックスの状態（非表示にしたか）を記録しておく
    const currentStates = {};
    document.querySelectorAll('.empire-checkbox').forEach(cb => {
        currentStates[cb.value] = cb.checked;
    });

    empireListContainer.innerHTML = '';
    const empires = rawData.empireOrder;

    empires.forEach(empire => {
        const row = document.createElement('div');
        row.className = 'empire-row';

        const label = document.createElement('label');
        label.title = empire;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = empire;
        checkbox.className = 'empire-checkbox';
        // 過去にチェックを外していたら外し、新規またはチェック済ならつける
        checkbox.checked = currentStates.hasOwnProperty(empire) ? currentStates[empire] : true;
        checkbox.addEventListener('change', updateChart);

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(' ' + empire));

        const colorInput = document.createElement('input');
        colorInput.type = 'color';
        colorInput.className = 'empire-color-input';
        colorInput.value = empireColors[empire];
        colorInput.title = `${empire} の色を設定`;

        colorInput.addEventListener('input', (e) => {
            empireColors[empire] = e.target.value;
            updateChart();
        });

        row.appendChild(label);
        row.appendChild(colorInput);
        empireListContainer.appendChild(row);
    });
}

function getFilteredDates() {
    const timeUnit = document.querySelector('input[name="timeUnit"]:checked').value;
    const startYearFilter = parseInt(startYearInput.value, 10) || 2200;
    const endYearFilter = parseInt(endYearInput.value, 10) || 3000;

    const periodFilteredDates = rawData.dates.filter(date => {
        const year = parseInt(date.substring(0, 4), 10);
        return year >= startYearFilter && year <= endYearFilter;
    });

    if (periodFilteredDates.length === 0) return [];
    if (timeUnit === '1m') return periodFilteredDates;

    const firstDateOfYear = {};
    periodFilteredDates.forEach(date => {
        const year = parseInt(date.substring(0, 4), 10);
        if (!firstDateOfYear[year]) firstDateOfYear[year] = date;
    });

    const years = Object.keys(firstDateOfYear).map(Number).sort((a, b) => a - b);
    const globalStartYear = parseInt(rawData.dates[0].substring(0, 4), 10);

    if (timeUnit === '1y') return years.map(y => firstDateOfYear[y]);
    if (timeUnit === '5y') return years.filter(y => (y - globalStartYear) % 5 === 0).map(y => firstDateOfYear[y]);
    if (timeUnit === '10y') return years.filter(y => (y - globalStartYear) % 10 === 0).map(y => firstDateOfYear[y]);

    return periodFilteredDates;
}

function updateChart() {
    if (rawData.dates.length === 0) return;

    const filteredDates = getFilteredDates();
    const selectedMetrics = Array.from(document.querySelectorAll('input[name="metric"]:checked')).map(cb => cb.value);
    const selectedEmpires = Array.from(document.querySelectorAll('.empire-checkbox:checked')).map(cb => cb.value);

    const datasets = [];
    const metricStyles = {
        'Economy': { borderDash: [], borderWidth: 2 },
        'Military': { borderDash: [5, 5], borderWidth: 2 },
        'Tech': { borderDash: [2, 2], borderWidth: 2 },
        'Total': { borderDash: [], borderWidth: 4 }
    };

    selectedEmpires.forEach(empire => {
        const color = empireColors[empire];
        const empireData = rawData.empires[empire];

        selectedMetrics.forEach(metric => {
            const dataPoints = filteredDates.map(date => {
                return (empireData[date] && empireData[date][metric] !== undefined) 
                    ? empireData[date][metric] : null;
            });

            const style = metricStyles[metric] || {};

            datasets.push({
                label: `${empire} [${metric}]`,
                empireName: empire,
                originalColor: color,
                originalBorderWidth: style.borderWidth,
                data: dataPoints,
                borderColor: color,
                backgroundColor: color,
                fill: false,
                tension: 0.1,
                pointRadius: filteredDates.length > 60 ? 0 : 3,
                borderDash: style.borderDash,
                borderWidth: style.borderWidth,
                spanGaps: true
            });
        });
    });

    const canvasEl = document.getElementById('chartCanvas');
    const ctx = canvasEl.getContext('2d');
    if (chartInstance) chartInstance.destroy();

    Chart.defaults.color = '#a0a0b0';
    Chart.defaults.borderColor = '#2d2d38';

    let currentHoverEmpire = null;

    chartInstance = new Chart(ctx, {
        type: 'line',
        data: { labels: filteredDates, datasets: datasets },
        options: {
            animation: false,
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'nearest', axis: 'xy', intersect: false },

            onHover: (event, elements, chart) => {
                if (elements && elements.length > 0) {
                    const hoveredIndex = elements[0].datasetIndex;
                    const hoveredEmpire = chart.data.datasets[hoveredIndex].empireName;

                    if (currentHoverEmpire !== hoveredEmpire) {
                        currentHoverEmpire = hoveredEmpire;
                        chart.data.datasets.forEach(ds => {
                            if (ds.empireName === hoveredEmpire) {
                                ds.borderColor = ds.originalColor; 
                                ds.borderWidth = ds.originalBorderWidth + 3;
                            } else {
                                ds.borderColor = hexToRgba(ds.originalColor, 0.15); 
                                ds.borderWidth = 2;
                            }
                        });
                        chart.update(); 
                    }
                } else if (currentHoverEmpire !== null) {
                    currentHoverEmpire = null;
                    chart.data.datasets.forEach(ds => {
                        ds.borderColor = ds.originalColor;
                        ds.borderWidth = ds.originalBorderWidth;
                    });
                    chart.update();
                }
            },

            plugins: {
                tooltip: {
                    position: 'nearest',
                    backgroundColor: '#282833',
                    titleColor: '#ffffff',
                    bodyColor: '#e0e0e3',
                    borderColor: '#33333f',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            const dataIndex = context.dataIndex;
                            const currentVal = context.raw;
                            if (currentVal === null || currentVal === undefined) return '';

                            const match = context.dataset.label.match(/\[(.*?)\]$/);
                            const currentMetric = match ? match[1] : '';

                            const chart = context.chart;
                            const datasets = chart.data.datasets;

                            let valuesAtDate = [];
                            for (let i = 0; i < datasets.length; i++) {
                                if (chart.isDatasetVisible(i)) {
                                    const dsLabel = datasets[i].label || '';
                                    if (dsLabel.endsWith(`[${currentMetric}]`)) {
                                        const val = datasets[i].data[dataIndex];
                                        if (val !== null && val !== undefined) {
                                            valuesAtDate.push(val);
                                        }
                                    }
                                }
                            }

                            valuesAtDate.sort((a, b) => b - a);
                            const rank = valuesAtDate.indexOf(currentVal) + 1;
                            const formattedVal = currentVal.toLocaleString();

                            return `[${rank}位] ${context.dataset.label}: ${formattedVal}`;
                        }
                    }
                },
                legend: {
                    position: 'right',
                    labels: { boxWidth: 20, color: '#cfcfd6' },
                    onHover: function(event, legendItem, legend) {
                        const hoveredIndex = legendItem.datasetIndex;
                        const chart = legend.chart;
                        const hoveredEmpire = chart.data.datasets[hoveredIndex].empireName;

                        if (currentHoverEmpire !== hoveredEmpire) {
                            currentHoverEmpire = hoveredEmpire;
                            chart.data.datasets.forEach(ds => {
                                if (ds.empireName === hoveredEmpire) {
                                    ds.borderColor = ds.originalColor;
                                    ds.borderWidth = ds.originalBorderWidth + 3;
                                } else {
                                    ds.borderColor = hexToRgba(ds.originalColor, 0.15);
                                    ds.borderWidth = 2;
                                }
                            });
                            chart.update();
                        }
                    },
                    onLeave: function(event, legendItem, legend) {
                        const chart = legend.chart;
                        currentHoverEmpire = null;
                        chart.data.datasets.forEach(ds => {
                            ds.borderColor = ds.originalColor;
                            ds.borderWidth = ds.originalBorderWidth;
                        });
                        chart.update();
                    }
                }
            },
            scales: {
                x: { title: { display: true, text: 'Game Date' }, grid: { color: '#24242e' } },
                y: { title: { display: true, text: 'Value' }, beginAtZero: true, grid: { color: '#24242e' } }
            }
        }
    });

    canvasEl.onmouseleave = () => {
        if (currentHoverEmpire !== null && chartInstance) {
            currentHoverEmpire = null;
            chartInstance.data.datasets.forEach(ds => {
                ds.borderColor = ds.originalColor;
                ds.borderWidth = ds.originalBorderWidth;
            });
            chartInstance.update();
        }
    };
}