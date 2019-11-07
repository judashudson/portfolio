function onChange(control, oldValue, newValue, isLoading) {
	if (isLoading || newValue == '') {
		return;
	}
	
	var ajax = new GlideAjax('PopulateSBMSysInfo');
	var systemName = g_form.getValue('system_name');
	ajax.addParam('sysparm_name','populateSBMSysInfo');
	ajax.addParam('sysparm_sys_name', systemName);
	ajax.getXML(ajaxResponse);
	
	function ajaxResponse(response){
		var sbmsysinfo = response.responseXML.getElementsByTagName("sbmsysinfo");
		for(var i = 0; i < sbmsysinfo.length; i++){
			var name = sbmsysinfo[i].getAttribute("name");
			var value = sbmsysinfo[i].getAttribute("value");
			g_form.setValue(name, value);
		}
	}
}