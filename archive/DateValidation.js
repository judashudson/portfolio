function onChange(control, oldValue, newValue, isLoading) {
   if (isLoading || newValue == '') {
      return;
   }
// Change these to match the target request.
	var tarDate = g_form.getValue('reqdate_vs'); // Target field this should match the variable name that is being monitored by the onChange client script.
	var minDays = 3;  // Minimum number of days before a request can be submitted. Set to 0 to not process the error.
	var errorPDVmsg = 'Please select a future date, past dates are ineligible.';
	var errorBDCmsg = 'Please select a day of the week, weekends are not eligible for pickup.';
	var errorWCmsg = 'Please provide a minimum of 3 business days for the device to be prepared for pickup.';
	
	
	
	// You should not need to change anything below this line.
	
// AJAX Parameter passing for Past Date Validation
   var ajaxQueryPDV = new GlideAjax('pastDateValidation');
	ajaxQueryPDV.addParam('sysparm_name','chkDate');
	ajaxQueryPDV.addParam('sysparm_date', tarDate);
	
// AJAX Parameter passing for Weekend Checks	
	var ajaxQueryWC = new GlideAjax('weekendCheck');
	ajaxQueryWC.addParam('sysparm_name','chkDate');
	ajaxQueryWC.addParam('sysparm_date',tarDate);
	
// AJAX Parameter passing for minimum business days check
	var ajaxQueryBDC = new GlideAjax('businessDayCheck');
	ajaxQueryBDC.addParam('sysparm_name','busDayCheck');
	ajaxQueryBDC.addParam('sysparm_date',tarDate);
	ajaxQueryBDC.addParam('sysparm_value',minDays);
	
// Call AJAX functions for response.
	ajaxQueryPDV.getXML(PastDateValidation);
	ajaxQueryBDC.getXML(BusinessCalculation);
	ajaxQueryWC.getXML(WeekendCheck);
		
	
	function PastDateValidation(response){
		var answer = response.responseXML.documentElement.getAttribute("answer");
		if(answer == true || answer == 'true'){
			g_form.clearMessages();
			g_form.addErrorMessage(errorPDVmsg);
			setTimeout(function(){ g_form.clearMessages();},5000);
			g_form.setValue('reqdate_vs','');
		} else {
			
		}
	}

	function BusinessCalculation(response){
		if(minDays==0){
			return;
		} else {
			
			var answer = response.responseXML.documentElement.getAttribute("answer");
			if(answer == true || answer == 'true'){
				g_form.clearMessages();
				g_form.addErrorMessage();
				setTimeout(function(){ g_form.clearMessages(errorWCmsg);},5000);
				g_form.setValue('reqdate_vs','');
			} else {
				return;
			}
		}
	}
	
		function WeekendCheck(response){
		var answer = response.responseXML.documentElement.getAttribute("answer");
		if(answer == true || answer == 'true'){
			g_form.clearMessages();
			g_form.addErrorMessage(errorBDCmsg);
			setTimeout(function(){ g_form.clearMessages();},5000);
			g_form.setValue('reqdate_vs','');
		} else {
			return;
		}
	}
}