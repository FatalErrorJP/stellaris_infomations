(function() {
    // バージョン表記
    document.querySelector('header>h2').innerText = `Stellaris ${getVersion()} TechTree`;

    /*******************************************************
     *  Cytoscape.jsの設定
     ******************************************************/
    const style = [
        {
            selector: 'node',
            style: {
                'shape': 'round-rectangle',
                'width': '250px',
                'height': '110px',
                'background-opacity': '0.3',
                'font-family': 'BIZ UDPGothic',
                'font-size': '12pt',
                'line-height': '2',
                'text-halign': 'right',
                'text-valign': 'bottom',
                'text-margin-x': '-245px',
                'text-margin-y': '-125px',
                'text-wrap': 'wrap',
//                'label': 'data(name)',
                'label': function(node) {
                    return `${node.data("name")}
${node.data("area")}(${node.data("category")})(${node.data("tier")})
id: ${node.data("id")}
cost: ${node.data("cost")}
weight: ${node.data("weight")}`
                },
            }
        },
        {
            selector: 'edge',
            style: {
                'width': 3,
                'curve-style': 'bezier',
//                'source-endpoint': '90deg',
//                'target-endpoint': '270deg',
                'line-color': '#ccc',
                'target-arrow-color': '#ccc',
                'target-arrow-shape': 'triangle',
            }
        },
        {
            selector: '.physics',
            style: {
                'background-color': '#add8e6'
            }
        },
        {
            selector: '.society',
            style: {
                'background-color': '#90ee90'
            }
        },
        {
            selector: '.engineering',
            style: {
                'background-color': '#cd853f'
            }
        },
        {
            selector: '.rare',
            style: {
                'background-color': '#9370db'
            }
        },
        {
            selector: '.dangerous',
            style: {
                'background-color': '#ff0000'
            }
        }
    ];

    const layout = {
        name: 'tidytree',
        fit: false,
        nodeDimensionsIncludeLabels: true,
        transform: function (node, position) {
            return { x: position.y, y:position.x };
        },
        horizontalSpacing: 20,
        verticalSpacing: 400,
//        edgeComparator: function(edgeA, edgeB) {
//            return edgeA.connectedNodes()[0].connectedEdges().length - edgeB.connectedNodes()[0].connectedEdges().length;
//        }

    };

    const cy = cytoscape({
        container: document.getElementById('tech-tree'),
        elements: getElements(),
        style: style,
        layout: layout,

        zoom: 1,
        pan: { x: 0, y: 0 },
        minZoom: 0.1,
        maxZoom: 2,
        userZoomingEnabled: false,
    });

    // ノード選択時に詳細を表示する
    cy.on('grab', 'node', function(event) {
        const node = event.target;
        const infoDiv = document.getElementById('tech-info');
        console.log(node.incomers().nodes().map(item => item.data('name')).join('<br>'));
        console.log(node.outgoers().nodes().map(item => item.data('name')).join('<br>'));
        infoDiv.innerHTML = '<tr><th>id:</th><td>'              + node.data('id')              + '</td></tr>'
                          + '<tr><th>name:</th><td>'            + node.data('name')            + '</td></tr>'
                          + '<tr><th>tier:</th><td>'            + node.data('tier')            + '</td></tr>'
                          + '<tr><th>cost:</th><td>'            + node.data('cost')            + '</td></tr>'
                          + '<tr><th>area:</th><td>'            + node.data('area')            + '</td></tr>'
                          + '<tr><th>category:</th><td>'        + node.data('category')        + '</td></tr>'
                          + '<tr><th>prerequisites:</th><td>'   + JSON.stringify(node.data('prerequisites'), null, 2) + '</td></tr>'
                          + '<tr><th>successor:</th><td>'       + node.outgoers().nodes().map(item => item.data('name')).join('<br>') + '</td></tr>'
                          + '<tr><th>weight:</th><td>'          + node.data('weight')          + '</td></tr>'
                          + '<tr><th>weight_modifier:</th><td>' + JSON.stringify(node.data('weight_modifier'), null, 2) + '</td></tr>'
                          + '<tr><th>potential:</th><td>'       + JSON.stringify(node.data('potential'), null, 2) + '</td></tr>';
    });

    // スライダーの変更に合わせてZoomする
    const zoomElement = document.querySelector("#zoom");
    zoomElement.value = 1;
    zoomElement.addEventListener("change", () => {
        document.querySelector("#zoom-string").innerHTML = `×${zoomElement.value}`;
        let pan = cy.pan();
        cy.zoom({
            level: Number(zoomElement.value),
            position: {
                x: pan.x + window.scrollX + (window.innerWidth / 2),
                y: pan.y + window.scrollY + (window.innerHeight / 2)
            }
        });

    });

    /*******************************************************
     *  AutoComplete.jsの設定
     ******************************************************/
    const autoCompleteJS = new autoComplete({
        selector: "#search-box",
        placeHolder: '検索したい研究名を入力してください',
        data: {
            src: cy.nodes().map(item => item.data('name')),
            cache: true
        },
        trigger: (query) => { return true; },
        events: {
            input: {
                focus: (event) => {
                    autoCompleteJS.start(autoCompleteJS.input.value);
                },
                selection: (event) => {
                    const selection = event.detail.selection.value;
                    autoCompleteJS.input.value = selection;
                }
            }
        }
    });

    // 検索結果に一致する技術があれば、その技術のノードの描画位置を画面の中心とする
    document.querySelector("#search-button").addEventListener("click", () => {
        const node = cy.nodes('[name="' + autoCompleteJS.input.value + '"]');
        if (node.length) {
            cy.pan({
                x: window.scrollX + (window.innerWidth / 2) - node.position().x * cy.zoom(),
                y: window.scrollY + (window.innerHeight / 2) - node.position().y * cy.zoom()
            });
        }
    });

})();

