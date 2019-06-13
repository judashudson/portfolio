var shopCart = new GlideRecord('sc_cart');
// Get Current DateTime Value
var oldCart = new GlideDateTime();

shopCart.query();

while(shopCart.next()){
var shopCartTime = shopCart.sys_updated_on.getValue();
var cartDiff = gs.dateDiff(shopCartTime,oldCart,true);
var hoursInBetween = Math.round(cartDiff/3600);

if(hoursInBetween >= 36){
gs.print(shopCart.user.getDisplayValue());
shopCart.deleteRecord();
}
}
