(function executeRule(current, previous /*null when async*/) {

   var groupName = current.assignment_group; 

   // Get a list of members for this group 
   var members = []; 
   var gm = new GlideRecord('sys_user_grmember'); 
   gm.addQuery('user.active', true); 
   gm.addQuery('group', groupName); 
   gm.query(); 
   
   while (gm.next()) { 
           members.push(String(gm.user)); 
   } 

   // Get a list of their open ticket counts 
   var counts = [], agg, count; 

   for (var i = 0; i < members.length; i++) { 
           count = 0; 

           agg = new GlideAggregate('incident'); 
           agg.addActiveQuery(); 
           agg.addQuery('assignment_group', groupName); 
           agg.addQuery('assigned_to', members[i]); 
           agg.addAggregate('COUNT'); 
           agg.query(); 
		   
           if (agg.next()) 
                   count = agg.getAggregate('COUNT'); 
				   counts.push(count); 


   } 

   // find the minimum count and store its index 
   // we cannot use .sort().shift() or we won't know where to look in the members array 
   var min = counts[0]; 
   var index = 0; 
   
   for (var j = 1; j < counts.length; j++) { 
           if (counts[j] < min) { 
                   min = parseInt(counts[j]); 
                   index = parseInt(j); 
           } 
   } 
   // get the member with the lowest count 
   var userID = members[index]; 
   var h;
   // Log their name to verify 
   var user = new GlideRecord('sys_user'); 
   if (user.get(userID)) { 
     gs.log('Name: ' + user.sys_id); 
   h = user.sys_id;   
   }   
current.assigned_to = h;
current.update();
})(current, previous);