function getIncidents(start,count){
    var incSort = 'number';
    var incGr = new GlideRecord('incident');

    incGr.orderBy(incSort);
    incGr.chooseWindow(start,start+count,true);
    incGr.query();

    gs.print('Displaying ' + count + ' out of ' + incGr.getRowCount() + ' records found.');

    while(incGr.next()){
        gs.print(incGr.getValue('number'));
    }
}

getIncidents(0,15);