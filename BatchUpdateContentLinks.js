(function(){
    var contentTable = new GlideRecord('sc_cat_item_content');
    var contentQuery = 'name=Google';

    contentTable.addEncodedQuery(contentQuery);
    contentTable.query();

    while(contentTable.next()){
        contentTable.setValue('target','_blank');
        contentTable.update();
    }
})();