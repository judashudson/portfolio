// https://docs.servicenow.com/bundle/kingston-application-development/page/script/ajax/topic/p_AJAX.html

function onChange(control, oldValue, newValue, isLoading) {
	if (isLoading || newValue == '') {
		return;
	}
	
	var ajax = new GlideAjax('PopulateAWDInfo');
	ajax.addParam('sysparm_name','populateAWDInfo');
	ajax.addParam('sysparm_role', g_form.getValue('role'));
	ajax.getXML(ajaxResponse);
	
	function ajaxResponse(response){
		var awdInfo = response.responseXML.getElementsByTagName("awdInfo");
		for(var i = 0; i < awdInfo.length; i++){
			var name = awdInfo[i].getAttribute("name");
			var value = awdInfo[i].getAttribute("value");
			g_form.setValue(name, value);
		}
	}
	
}