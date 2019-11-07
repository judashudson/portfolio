(function(){
    var contentTable = new GlideRecord('sc_cat_item_content');
    var contentQuery = 'active=true^sys_created_by=PSudnik@OhioNational.com';
    var split = 8;
    var currentENV = 'test';

    contentTable.addEncodedQuery(contentQuery);
    contentTable.query();

    while(contentTable.next()){
        currentURL = contentTable.url.toString();
        currentURL.toString();
        newURL = currentURL.substring(0,split) + currentENV + '.' + currentURL.substring(split,(currentURL.length))
        contentTable.setValue('url',newURL);
        var prodURL = currentURL.replace('test.','');
        gs.print("Test / Dev URL: " + newURL);
        gs.print("Production URL: " + prodURL);
        gs.print('');
        //contentTable.update();
    }
})();