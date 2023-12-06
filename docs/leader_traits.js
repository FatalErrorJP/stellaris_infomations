/*const grid = new gridjs.Grid({
    from: document.querySelector('.tableblock '),
    search: true,
    fixedHeader: true,
    height: '700px'
});
grid.render(document.getElementById("grid"));*/
const parser = new DOMParser();

let option = Handsontable.helper.htmlToGridSettings(document.querySelector('.tableblock '));
option.data = option.data.map(cols => cols.map(item => parser.parseFromString(item, "text/html").firstChild.innerText));
option.licenseKey = 'non-commercial-and-evaluation';
option.manualColumnMove = true;
option.filters=true;
option.dropdownMenu=['filter_by_condition', 'filter_by_condition2', 'filter_operators', 'filter_by_value', 'filter_action_bar'];
option.manualRowMove=true;
option.rowHeaders=true;
option.renderAllRows=true;
option.fragmentSelection=true;
option.copyPaste=false;
option.editor=false;
const trait_list_table = new Handsontable(document.getElementById('trait_list_table'), option);
