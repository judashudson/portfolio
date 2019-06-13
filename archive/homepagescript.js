data.typeAheadSearch = $sp.getWidget('typeahead-search', options.typeahead_search);

(function() {
	
	data.greeting = gs.getMessage(options.greeting) || gs.getMessage("Hi");
	data.title = gs.getMessage(options.title) || gs.getMessage("how can we help?");
	data.short_description = gs.getMessage(options.short_description) || false;
	
	if (options.show_name != "true")
		options.show_name = false;
	else
		options.show_name = true;
		
})();