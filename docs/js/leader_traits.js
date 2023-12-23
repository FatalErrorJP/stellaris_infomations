(function() {
    const parser = new DOMParser();
    let option = Handsontable.helper.htmlToGridSettings(document.querySelector('.tableblock'));
    option.data = option.data.map(cols => cols.map(item => parser.parseFromString(item, "text/html").firstChild.innerText));

    option2 = {
        allowInsertColumn: false,
        allowInsertRow: false,
        allowRemoveColumn: false,
        allowRemoveRow: false,
        columnSorting: true,
        copyPaste: false,
        contextMenu: {
            items: {
                'freeze_column': {
                    name: 'この列を固定する'
                },
                'unfreeze_column': {
                    name: 'この列の固定を解除する'
                }
            }
        },
        dropdownMenu: ['filter_by_condition', 'filter_by_condition2', 'filter_operators', 'filter_by_value', 'filter_action_bar'],
        editor: false,
        filters: true,
        fragmentSelection: true,
        licenseKey: 'non-commercial-and-evaluation',
        manualColumnFreeze: true,
        manualColumnMove: true,
        manualRowMove: true,
        //renderAllRows: true,
        rowHeaders: true

    }
    Object.assign(option, option2);

    new Handsontable(document.getElementById('trait_list_table'), option);
})();
