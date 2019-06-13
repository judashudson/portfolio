(function executeRule(current, previous /*null when async*/) {

    
   
    
    current.assigned_to = getAssignee();
    current.update();
    
    function getAssignee(){
        
        var users=[];
        var gr = new GlideRecord("sys_user_grmember");
        gr.addQuery("group", current.assignment_group);
        gr.query();
        
        
        var tech = "";
        var lastAssigned = "";
        var isAssignable = false;
        
        while(gr.next()){
            
            lastAssigned = gr.user.u_last_assigned + "";    
            isAssignable = gr.user.u_round_robin_active;
            tech = gr.user.sys_id;
            
        if (isAssignable == true)  {

               users.push({ sys_id: tech, u_last_assigned: lastAssigned });

                }
    }
        
    users.sort(function(a, b){

                 return (a.u_last_assigned < b.u_last_assigned ? -1:(a.u_last_assigned > b.u_last_assigned ? 1:0));

           });

               updateDateTime(users[0].sys_id); 

               return (users[0].sys_id); 

       }

    
    function updateDateTime(assignedTo_sysID)

       {

               var nowdt = gs.nowDateTime();

               var updateDate = new GlideRecord('sys_user');

               updateDate.addQuery('sys_id', assignedTo_sysID);

               updateDate.query();

               

               while(updateDate.next())

               {

                       updateDate.u_last_assigned = nowdt;

                       updateDate.update();

               }

       }           

       


        
    

})(current, previous);