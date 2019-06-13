(function executeRule(current, previous /*null when async*/) {
	// General Ledger Selection
	var genLed = current.variables.oracle_gen_ledger;

	if(genLed == 'true'){
		// General Ledger Roles
		
		var finAna = current.variables.financial_analyst;
		var genAcc = current.variables.general_accountant;
		var genMgr = current.variables.gen_account_manager;
		var appDev = current.variables.application_developer;
		var repAna = current.variables.reports_and_analytics;
		var cusRol = current.variables.custom_bi_role;
		var biAuth = current.variables.bi_author;
		var coAcc = current.variables.Cost_Accountant;
		var hcmAA = current.variables.HCM_app_adm;
		var hcmIS = current.variables.HCM_intg_spec;
		var hcmRM = current.variables.HR_mgr;
		var itAud = current.variables.IT_aud;
		var itSM = current.variables.IT_sec_mgr;
		var aAdmin = current.variables.App_admin;
		var appAdm = current.variables.App_impl_admn;
		var appCons = current.variables.App_impl_consult;
		var appMgr = current.variables.App_impl_mgr;
		
		if(finAna == 'false' && genAcc == 'false' && genMgr == 'false' && appDev == 'false' && repAna == 'false' && cusRol == 'false' && biAuth == 'false' && coAcc == 'false' && hcmAA == 'false' && hcmIS == 'false' && hcmRM == 'false' && itAud == 'false' && itSM == 'false' && aAdmin == 'false' && appAdm == 'false' && appCons == 'false' && appMgr == 'false'){
			gs.addErrorMessage('Please select at least one role for this software request.');
			var url = gs.generateURL(current.getTableName(), current.sys_id);
			previous.setAbortAction(true);
			current.setAbortAction(true);
			gs.setRedirect(url);
			}	
		}
})(current, previous);