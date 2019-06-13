(function executeRule(current, previous /*null when async*/) {
	// Accounts Payable Selection
	var accPay = current.variables.oracle_accounts_payable;

	if(accPay == 'true'){
		// Accounts Payable Roles
		var acSpec = current.variables.acc_payable_spec;
		var accSup	= current.variables.acc_payable_sup;
		var accMan = current.variables.acc_payable_man;

		if(acSpec == 'false' && accSup == 'false' && accMan == 'false'){
			gs.addErrorMessage('Please select at least one role for this software request.');
			var url = gs.generateURL(current.getTableName(), current.sys_id);
			previous.setAbortAction(true);
			current.setAbortAction(true);
			gs.setRedirect(url);
			}
	}
})(current, previous);