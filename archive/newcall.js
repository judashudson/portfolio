var gr = new GlideRecord('sys_user');
gr.addQuery('active','false');
gr.addQuery('locked_out','true');
gr.addEncodedQuery('sys_updated_onONToday@javascript:gs.daysAgoStart(1)@javascript:gs.daysAgoEnd(0)');
gr.query();
var deactUserArray = [];
while(gr.next()){
deactUserArray.push(gr.name.getDisplayValue());
}

if(deactUserArray != '' || deactUserArray != NULL){
var deactCall = new GlideRecord('new_call');
deactCall.caller = 'add02163db876600f7735595ce96195c';
deactCall.contact_type = 'self-service';
deactCall.short_description = 'The following users have been terminated in the past day.';

deactCall.description = deactUserArray.toString().split(',').join('\n');

deactCall.insert();


gs.log(deactCall.number.getDisplayValue() + " was created to track terminated employees on " + gs.now + ".");
}