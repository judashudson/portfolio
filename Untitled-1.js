highlightOnesco();

function highlightOnesco(){
	var userGroup =
	if(userGroup.includes('Onesco')){
		g_form.addDecoration('caller_id','icon_star','Onesco User','color-blue');
	} else {
		g_form.removeDecoration('caller_id','icon_star','Onesco User');
	}
}