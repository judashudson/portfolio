(function(){
    // Reroute approvals that would normally go to the executive office to Mike Sebastian
    
    var approverDepartment = current.approver.department.getDisplayValue();
    var newApprover = ((function(){
        var groupName = 'ServiceNow Admin';
	    var adminGroup = new GlideRecord('sys_user_group');
	    adminGroup.get('name',groupName);
	    return adminGroup.manager;
		
    })()).getDisplayValue();
    
    if(approverDepartment == 'Executive Office'){
        current.setValue('approver',newApprover);
    }
    
})();