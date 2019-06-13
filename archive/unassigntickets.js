var gr = new GlideRecord("task");
gr.addQuery('active','true');
gr.addQuery('assigned_to','25d02163db876600f7735595ce96194d');
gr.query();
while(gr.next()){
gs.print(gr.number.getDisplayValue() + " " + gr.assigned_to.getDisplayValue());
gr.assigned_to.setValue('');
gr.update();
}