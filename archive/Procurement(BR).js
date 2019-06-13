(function executeRule(current, previous /*null when async*/) {
	// Procurement Selection
	var oracleProc = current.variables.oracle_procurement;

	if(oracleProc == 'true'){
		// Procurement Roles
		var procReq = current.variables.proc_requestor;
		var recAgent = current.variables.receiving_agent;
		var procPrep = current.variables.proc_preparer;
		var ONFSadvReq = current.variables.onfs_adv_proc_req;
		var procAdm = current.variables.proc_cat_admn;
		var procMgr = current.variables.proc_mgr;
		var ssReq = current.variables.SS_rec_all_req_job;
		var sAdmn = current.variables.suppl_admn;
		var supplmgr = current.variables.suppl_mgr;
		var advReq = current.variables.adv_proc_req;
		var buyer = current.variables.proc_buyer;

		
		if(procReq == 'false' && recAgent == 'false' && procPrep == 'false' && ONFSadvReq == 'false' &&  procAdm == 'false' &&  procMgr == 'false' &&  ssReq == 'false' &&  sAdmn == 'false' &&  sMgr == 'false' &&  advReq == 'false' &&  buyer == 'false'){
			
			gs.addErrorMessage('Please select at least one role for this software request.');
			var url = gs.generateURL(current.getTableName(), current.sys_id);
			previous.setAbortAction(true);
			current.setAbortAction(true);
			gs.setRedirect(url);
			}
	}
})(current, previous);