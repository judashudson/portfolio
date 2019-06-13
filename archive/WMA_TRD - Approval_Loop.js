/*
Requirement: Use an array in a loop to pass a list of users/choices through validation into approval

Revisions
09/27/2018 JJH - Added requirement of active being true in order to prevent "skipped approvals"
09/27/2018 JJH - Added default approver to being ServiceNow Admin Manager if no active approver can be found.
*/

// Empty Arrays for passing data into from functions
var answer = [];
var userInfo = [];

/*
Arrays for querying the user group selected on form and passing an approver depending upon it.  
Last Updated: 09/27/2018
*/

var choices = ['Inquiry Only User', 'Payment Services User', 'nBA Life User', 'Browsing User', 'Claims User', 'Business Manager User', 'Agent Comp User', 'Test Administrator', 'Administrator', 'Update User', 'Underwriting/New Business User', 'Underwriting/New Business User', 'Underwriting/New Business User', 'Underwriting/New Business User', 'Underwriting/New Business User', 'Ins Serv UL/VUL Admin', 'Ins Serv Traditional Life User', 'Ins Serv Titles User', 'Super User'];
var users = ['Danielle Ivory', 'Michelle Pittman', 'Kimberly McGregor', 'Karen Losher', 'Rosie Gatto', 'Danielle Ivory', 'Danielle Ivory', 'Jeff Oehler', 'Jeff Oehler', 'Karen Losher', 'Cindy Collins', 'Karen Thomas', 'Stephanie Murkey-Adams', 'Matt Zeis', 'Dana LaCoste', 'Janice Henshaw', 'Karen Losher', 'Alex Stultz', 'Danielle Ivory'];

var i;

for(i=0;i<choices.length;i++){
	if(choices[i] == current.variables.onfs_usergroup){
		if((getActiveUser(users[i])) == true){
			userInfo.push(getUserID(users[i]));
			answer.push(userInfo);
		}
	}
}
// If there is no active approver pass the servicenow admin manager as the default approver.

if(answer.length == 0){
	answer.push(getSNAdmin());
}

// Grab the Sys ID of the user
function getUserID(userName){
	var user = new GlideRecord('sys_user');
	user.get('name', userName);
	return user.getValue('sys_id').toString();
}

// Grab the active value of the user
function getActiveUser(userName){
	var user = new GlideRecord('sys_user');
	user.get('name', userName);
	return user.active;
}

// Query the ServiceNow Admin group for the manager's sys_id as a default approver
function getSNAdmin(){
	var groupName = 'ServiceNow Admin';
	var adminGroup = new GlideRecord ('sys_user_group');
	adminGroup.get('name',groupName);
	return adminGroup.manager.getValue('sys_id').toString();
}