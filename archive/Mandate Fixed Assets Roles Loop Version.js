function  onSubmit(){
    // Set mandatory variable options along with minimum needed to evaluate true
    var  mandatoryVars  =  'asset_account_manager,asset_accountant,cash_manager';
    var  mandatoryCount  =  1;
    var fixedAssets = g_form.getValue('oracle_fixed_assets');
    if(fixedAssets == 'true'){
       var  passed  =  forceMandatoryCheckboxes(mandatoryVars,  mandatoryCount);
		
			if(!passed){
				 //Alert user that they need to select an option
				g_form.addErrorMessage('You must select at least '  +  mandatoryCount  +  ' option(s).');
				return  false;
			}
	}
}

function  forceMandatoryCheckboxes(mandatory,  count){
       //Split the mandatory variable names into an array
      mandatory  =  mandatory.split(',');
       var  answer  =  false;
       var  varFound  =  false;
       var  numTrue  =  0;
       //Check each variable in the array
       for(x=0;x<mandatory.length;x++){
             //Check to see if variable exists
             if(g_form.getControl(mandatory[x])){
                  varFound  =  true;
                   //Check to see if variable is set to 'true'
                   if(g_form.getValue(mandatory[x])  ==  'true'){
                        numTrue  ++;
                         //Exit the loop if we have reached required number of 'true'
                         if(numTrue  >=  count){
                              answer  =  true;
                               break;
                         }
                   }
             }
       }
       //If we didn't find any of the variables allow the submit
       if(varFound  ==  false){
            answer  =  true;
       }
       //Return true or false
       return  answer;
}