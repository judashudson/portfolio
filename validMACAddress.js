function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
       return;
    }
    //Type appropriate comment here, and begin script below
    (function(){
         // Anonymous function to contain variables to the local scope only.
         var regex = /^([0-9A-Fa-f]{2}[:]){5}([0-9A-Fa-f]){2}|([0-9A-Fa-f]{2}[-]){5}([0-9A-Fa-f]){2}$/gi; // Used to validate format is actually a MAC address format.
         var macAddress = g_form.getValue('u_mac_address');

         if((regex.test(macAddress)) == false){
             g_form.clearValue('u_mac_address');
             g_form.showFieldMsg('u_mac_address','Please enter the mac address in a valid format as shown in the example text.','info',true);
         }
     })();
 }