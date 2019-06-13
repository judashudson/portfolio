var PopulateAWDInfo = Class.create();
PopulateAWDInfo.prototype = Object.extendsObject(AbstractAjaxProcessor, {

	populateAWDInfo : function(){
		var role = this.getParameter('sysparm_role');
		var gr = new GlideRecord('u_awd_roles');
		gr.addQuery('u_awd_role', role);
		gr.query();
		
		if(gr.next()){
			this._addUserInformation('business_area', gr.u_business_area);
			this._addUserInformation('security_group', gr.u_security_group);
			this._addUserInformation('security_level', gr.u_security_level);
			this._addUserInformation('work_group', gr.u_work_group);
		}
	},
	
	_addUserInformation : function(name, value){
		var awd = this.newItem("awdInfo");
		awd.setAttribute("name", name);
		awd.setAttribute("value", value);
	},
	
    type: 'PopulateAWDInfo'
});