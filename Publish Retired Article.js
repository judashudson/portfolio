/*  Condition Change to validate workflow_state is actually retired, or the option will not show up.
*/
(function(){
    var currentDate = new GlideDateTime(gs.nowDateTime());
    var expireDate = currentDate.addYearsLocalTime(1);
    
    if(current.workflow_state == 'retired'){
        current.setValue('valid_to',expireDate);
        current.setValue('workflow_state','published');
        current.update(); 
        gs.addInfoMessage(new KBKnowledge().getStateMessage(current.getValue("workflow_state")));
    } else {
        current.setAbortAction(true);
    }
    
    //action.setRedirectURL(current);
})();