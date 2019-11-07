(function(){
    // Anonymous function to search for KB Articles and move them back to the "Review State" due to an error in the notification system not alerting the KB Admins of expiring articles.
    
    var tableName = "kb_knowledge";
    var encQuery = 'workflow_state=draft^ORworkflow_state=review^sys_created_onONThis year@javascript:gs.beginningOfThisYear()@javascript:gs.endOfThisYear()';
    var expireDT = new GlideDateTime(gs.nowDateTime());
    expireDT.addYearsLocalTime(1);
    var desiredState = 'review';
    
    var glideQuery = new GlideRecord(tableName);
    glideQuery.addEncodedQuery(encQuery);
    glideQuery.query();
    
    while(glideQuery.next()){
        
        glideQuery.workflow_state = desiredState;
        glideQuery.valid_to = expireDT;
        glideQuery.update();

        gs.log(glideQuery.number + ' has been moved to the ' + glideQuery.workflow_state + ' with a new valid to date of ' + glideQuery.valid_to + '.');
    }
    
    })();