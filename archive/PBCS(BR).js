(function executeRule(current, previous /*null when async*/) {
	// PBCS Selection
	var oraclePBCS = current.variables.oracle_pbcs;

	if(oraclePBCS == 'true'){
		// PBCS Roles
		var plan = current.variables.planner;
		var tesPlan = current.variables.test_planner;
		var view = current.variables.viewer;
		var powUser = current.variables.power_user;
		var planAdmin = current.variables.planning_admin;
		
		if(plan == 'false' && tesPlan == 'false' && view == 'false' && powUser == 'false' && planAdmin == 'false'){
			gs.addErrorMessage('Please select at least one role for this software request.');
			var url = gs.generateURL(current.getTableName(), current.sys_id);
			previous.setAbortAction(true);
			current.setAbortAction(true);
			gs.setRedirect(url);
			}
	}
})(current, previous);


10.107.10.36