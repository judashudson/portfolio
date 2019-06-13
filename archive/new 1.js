function onSubmit() {
   //Type appropriate comment here, and begin script below
	
	// This variable controls which application the user selects
	var oracleProc = g_form.getValue('oracle_procurement');
	
	// These variables contain the roles used on the form, listed here for easier changes in the future
	
	var procReq = g_form.getValue('proc_requestor');
	var recAgent = g_form.getValue('receiving_agent');
	var procPrep = g_form.getValue('proc_preparer');
	var  ONFSadvReq = g_form.getValue('onfs_adv_proc_req');
	var  procAdm = g_form.getValue('proc_cat_admn');
	var  procMgr = g_form.getValue('proc_mgr');
	var  ssReq = g_form.getValue('SS_rec_all_req_job');
	var  sAdmn = g_form.getValue('suppl_admn');
	var  sMgr = g_form.getValue('suppl_mgr');
	var  advReq = g_form.getValue('adv_proc_reg');
	var  buyer = g_form.getValue('proc_buyer');


		
   if(oracleProc == 'true'){
	   if(procReq == 'false' && recAgent == 'false' && procPrep == 'false' && ONFSadvReq == 'false' &&  procAdm == 'false' &&  procMgr == 'false' &&  ssReq == 'false' &&  sAdmn == 'false' &&  sMgr == 'false' &&  advReq == 'false' &&  buyer == 'false'){
		   g_form.addErrorMessage('Please select at least one role for this software request.');
		   return false;
	   }
   }
}