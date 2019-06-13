var gr = new GlideRecord('sys_user');
gr.query();

while (gr.next()) {

   // Account Expiration Variable
   var resetDate = new GlideDateTime();
   resetDate.setDisplayValue(gr.u_account_expires.getDisplayValue());
   var resetNum = resetDate.getNumericValue();
   var accountAge = resetNum;
   var expireTime = 14 *  86400000;
   var secexpireTime = 13 * 86400000;
   //  86400000 is 1 day in milliseconds.

   // Current Date Variable
   var todaysDate = new GlideDateTime();
   todaysDate.setDisplayValue(gs.now());
   var todaysNum = todaysDate.getNumericValue();

   // Compare dates
   var expired = todaysNum + expireTime;
   var expired2 = todaysNum + secexpireTime;

if(!accountAge.nil() && accountAge != "229072536907000" && accountAge != "0"){
	if(accountAge <= expired && accountAge >= expired2){
		gr.u_soon_to_expire = true;
		gr.update();
	}
}
}