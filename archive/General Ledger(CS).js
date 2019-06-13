function onSubmit() {
	
   // This variable controls which application the user selects
	var genLed = g_form.getValue('oracle_gen_ledger');	
	// These variables contain the roles used on the form, listed here for easier changes in the future
	var finAna = g_form.getValue('financial_analyst');
	var genAcc = g_form.getValue('general_accountant');
	var appDev = g_form.getValue('application_developer');
	var repAna = g_form.getValue('reports_and_analytics');
	var cusRol = g_form.getValue('custom_bi_role');
	var biAuth = g_form.getValue('bi_author');
	var coAcc = g_form.getValue('Cost_Accountant');
	var hcmAA = g_form.getValue('HCM_app_adm');
	var hcmIS = g_form.getValue('HCM_intg_spec');
	var hcmRM = g_form.getValue('HR_mgr');
	var itAud = g_form.getValue('IT_aud');
	var itSM = g_form.getValue('IT_sec_mgr');
	var aAdmin = g_form.getValue('App_admin');
	var appAdm = g_form.getValue('App_imp_admn');
	var appCons = g_form.getValue('App_imp_consult');
	var appMgr = g_form.getValue('App_impl_mgr');
	
	
   if(genLed == 'true'){
	   if(finAna == 'false' && genAcc == 'false' && appDev == 'false' && repAna == 'false' && cusRol == 'false' && biAuth == 'false' && coAcc == 'false' && hcmAA == 'false' && hcmIS == 'false' && hcmRM == 'false' && itAud == 'false' && itSM == 'false' && aAdmin == 'false' && appAdm == 'false' && appCons == 'false' && appMgr == 'false'){
		   g_form.addErrorMessage('Please select at least one role for this software request.');
		   return false;
	   } 
   }
}