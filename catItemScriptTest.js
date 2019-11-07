// This script is merely a test of the capabilities of the programmer.  The goal is to create a script that can produce multiple links as needed.

// TODO :: Convert catName, catCatalog, catCategory, catURL to an array and create a loop to pass them through containing the rest of the function.
// TODO :: Add catDescription to allow a short description to be defined using an array feature as well.  
// TODO :: May be easier to turn these into JSON objects and pass them that way.
// Reminder :: This script is for fun, not for actual production uses.


(function(){
var catItem = new GlideRecord('sc_cat_item_content');

var catName = 'Google' // catItem.name;
var catCatalog = 'Service Catalog'// catItem.sc_catalogs;
var catCategory = 'Human Resources' //catItem.category;
var catType = 'external' // catItem.content_type; // value is external
var catURL = 'https://www.google.com' // catItem.url;
var catTarget = '_blank' // catItem.target; // value is _blank

var scCatalog = new GlideRecord('sc_catalog');
scCatalog.addQuery('title',catCatalog);
scCatalog.query();

while(scCatalog.next()){
    // Pass the sys_id value of the catalog requested to a variable for use in inserting a new record.
    var catCatalogValue = scCatalog.sys_id;
    
    // Use this catalog to select the requested category, default to "All Requests" if null.
    var scCategory = new GlideRecord('sc_category');
    scCategory.addQuery('catalog',catCatalogValue);
    scCategory.addQuery('title',catCategory);
    scCategory.query();
    while(scCategory.next()){
        var catCategoryValue = scCategory.sys_id;
    }

}

// Initiate and set values for various properties of the cat_item_content record being inserted.

catItem.initialize();
catItem.setValue('name',catName);
catItem.setValue('sc_catalogs',catCatalogValue);
catItem.setValue('category',catCategoryValue);
catItem.setValue('content_type',catType);
catItem.setValue('url',catURL);
catItem.setValue('target',catTarget);
catItem.insert();

})();