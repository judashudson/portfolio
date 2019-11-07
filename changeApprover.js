(function(){
var gr = new GlideRecord('sc_req_item');
gr.get('sys_id','ac97dba11ba48c101e6a10ad2d4bcb72');

gs.print(gr.number.getDisplayValue());

var busOwner = gr.variables.business_owner.getDisplayValue();
var reqFor = gr.variables.u_requested_for.getDisplayValue();

if(busOwner == reqFor){
gs.print("The business owner cannot be the same as the requested for.");
var newAppr = gr.variables.business_owner.manager.getDisplayValue();
gs.print("The new approver is " + newAppr);

} else {
gs.print("The approver is " + busOwner);
}

})();