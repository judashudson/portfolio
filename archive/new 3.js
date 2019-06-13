function onLoad() {
	// Return True if user has admin access this prevents anyone other than an admin from setting a state to closed / inactive
   if (g_user.hasRole('admin')){
      return;
}
	/*
		// Uncomment this block to allow problem management to have access
		if (g_user.hasRole('problem_management') || g_user.hasRole('admin')){
			return;
			}
	*/
	//Declare state values
	var prbState = g_form.getValue('state');

	if(prbState == 7){
		g_form.removeOption('state',5);
		g_form.removeOption('state',89);
	} else if(prbState == 5){
		g_form.removeOption('state',7);
		g_form.removeOption('state',89);
	} else if(prbState == 89){
		g_form.removeOption('state',5);
		g_form.removeOption('state',7);
	}
}