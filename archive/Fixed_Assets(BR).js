(function executeRule(current, previous /*null when async*/) {
	// Fixed Asset Selection
	var fixAsset = current.variables.oracle_fixed_assets;

	if(fixAsset == 'true'){
	
		// Fixed Asset Roles
		var asacMan = current.variables.asset_account_manager;
		var asAc = current.variables.asset_accountant;
		var cashMan = current.variables.cash_manager;

			
		if(asacMan == 'false' && asAc == 'false' && cashMan == 'false'){
			gs.addErrorMessage('Please select at least one role for this software request.');
			var url = gs.generateURL(current.getTableName(), current.sys_id);
			previous.setAbortAction(true);
			current.setAbortAction(true);
			gs.setRedirect(url);
			}
	}
})(current, previous);