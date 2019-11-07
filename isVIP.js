(function(){
    var gr = new GlideRecord('sys_user');

    gr.addQuery('name','Kush Kotecha');
    gr.query();

    while(gr.next()){
        gs.print(gr.name.getDisplayValue());
        gs.print(gr.manager.getDisplayValue());
        if(gr.manager.vip == true){
            gs.print(gr.manager.getDisplayValue() + " is a VIP");
        } else {
            gs.print(gr.manager.getDisplayValue() + " is not a VIP");
        }
    }
})();