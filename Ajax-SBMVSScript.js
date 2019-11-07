var PopulateSBMVSSysInfo = Class.create();
PopulateSBMSysInfo.prototype = Object.extendsObject(AbstractAjaxProcessor, {

	populateSBMSysInfo : function(){
		var systemname = this.getParameter('sysparm_sys_name');
		var gr = new GlideRecord('u_sbm_sys_admn');
		gr.addQuery('u_system_id', systemname);
		gr.query();
		
		if(gr.next()){
			this._addSysInfo('technical_application_owner', gr.u_primary_resource);
			this._addSysInfo('software_application_name', gr.u_system_description);
		}
	},
	
	_addSysInfo : function(name, value){
		var sysInfo = this.newItem("sbmsysinfo");
		sysInfo.setAttribute("name", name);
		sysInfo.setAttribute("value", value);
	},
	
    type: 'PopulateSBMSysInfo'
});