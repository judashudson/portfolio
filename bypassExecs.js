(function() {
    // Store the ServiceNow Administration team manager in an object to return the email / name and pass through to 
    var snAdminManager = (function(){
        var gr = new GlideRecord('sys_user_group');
        gr.addQuery('name','ServiceNow Admin');
        gr.query();

        while(gr.next()){
            return {
                email: gr.manager.email,
                name: gr.manager.getDisplayValue(),
            };
        }
    })();
    // Check if Doc or Barbara are being used as an approver or the manager of the approver to push the notification to the ServiceNow Admin Manager instead.
    if(current.approver.getDisplayValue() == "Doc Huffman" || current.approver.getDisplayValue() == "Barbara Turner" || current.approver.getDisplayValue() == ''){
        return snAdminManager.email;
    } else if(current.approver.manager.getDisplayValue() == "Doc Huffman" || current.approver.manager.getDisplayValue() == "Barbara Turner" || current.approver.manager.getDisplayValue() == ''){
        return snAdminManager.email;
    } else {
        return current.approver.email;
    }
}());