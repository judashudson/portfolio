var gr = new GlideRecord('kb_knowledge');
gr.addQuery('workflow_state','published');
gr.addQuery('flagged',false);
gr.addQuery('active',true);
gr.query();

var todaysDate = new GlideDateTime(gs.now());




while(gr.next()){
	var validDate = gr.valid_to;
	var validDT = gr.valid_to;
	
	var validTo = new GlideDateTime(validDate);
	var validFrom = new GlideDateTime(gr.valid_to);
	validFrom.addDays(-30);

	if(todaysDate >= validFrom && todaysDate <= validTo){
		gr.flagged = true;
		gr.update();
		
		var retireKB = new Workflow();
		var vars = {};
		var kbContext = retireKB.startFlow('3d18ef12c30031000096dfdc64d3aeb6',gr,gr.operation(),vars);
	}
}