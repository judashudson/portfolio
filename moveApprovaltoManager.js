(function(){
    var currApprover = current.approver;
    var currManager = current.approver.manager;
	var currManagerDisplay = current.approver.manager.getDisplayValue();
    // Check for Doc Huffman / Barbara Turner to pass this to Michael Sebastian
    if(currManagerDisplay == 'Doc Huffman' || currManagerDisplay == 'Barbara Turner'){
        var snManager = (function(){
            var gr = new GlideRecord('sys_user_group');
            gr.addQuery('name','ServiceNow Admin');
            gr.query();
    
            while(gr.next()){
                return {
                    email: gr.manager.email,
                    name: gr.manager.getDisplayValue(),
                    sys_id: gr.manager.sys_id,
                };
            }
        })();
		currManager = snManager.sys_id;
    } else if(currManager != '' || currManager != null){
		currManager = current.approver.manager;
	}
    current.setValue('approver',currManager);
    current.update();
    gs.log('Current Approver: ' + currApprover + ' is being adjusted to ' + currManager + " for record " + current.number.getDisplayValue());
})();