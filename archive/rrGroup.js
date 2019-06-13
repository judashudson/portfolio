function onBefore(current, previous)
{       
       gs.sleep(3000); // Sleep statement added to prevent ticket flood being assigned to a single technician.       
       current.assigned_to = resolveTech();//"1e8232ca6ff191007906db3bbb3ee4bd"; // sys_id of a tech in "Service Desk" group;
       function resolveTech()
       {
               var tech_arr = [];
               var group = new GlideRecord('sys_user_grmember');
               group.addQuery('group', '8a4cd5b36fd3d1000fd9122cbb3ee48f'); // "Service Desk" group sys_id.
               group.query();
               var tech = "";
               var lastAssigned = "";
               var isAssignable = false;
               while(group.next())
               {
                       isAssignable = group.user.u_round_robin_active;
                       tech = group.user.sys_id; // "1e8232ca6ff191007906db3bbb3ee4bd";
                       lastAssigned = group.user.u_last_ticket_assigned + "";
                       // Only pushing assignable users to array.
                       if (isAssignable == true)
                       {
                               tech_arr.push({ sys_id: tech, last_assigned: lastAssigned });
                       }
               }
               // Sort on last assigned, return user with.
               tech_arr.sort(function(a, b)
                                           {
                                               return (a.last_assigned < b.last_assigned ? -1:(a.last_assigned > b.last_assigned ? 1:0));
                                           });
               updateDateTime(tech_arr[0].sys_id); // Updating ticket last assigned date
               gs.sleep(2000);
               return (tech_arr[0].sys_id); // Assigned_to technician (sys_id).
       }
       function updateDateTime(assignedTo_sysID)
       {
               var nowdt = gs.nowDateTime();
               var updateDate = new GlideRecord('sys_user');
               updateDate.addQuery('sys_id', assignedTo_sysID);
               updateDate.query();
               while(updateDate.next())
               {
                       updateDate.u_last_ticket_assigned = nowdt;
                       updateDate.update();
               }
       }
}



