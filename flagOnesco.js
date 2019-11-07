function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
       return;
    }
 
    //Type appropriate comment here, and begin script below
    flagOnesco();
 
     function flagOnesco(){
         var userGroup = g_form.getReference('caller_id');
         if((userGroup.department).includes('Onesco')){
             g_form.addDecoration('caller_id','icon_star','Onesco User','color-blue');
         } else {
             g_form.removeDecoration('caller_id','icon_star','Onesco User');
         }
     }
 }