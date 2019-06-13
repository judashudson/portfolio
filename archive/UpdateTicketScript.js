// Update these lines with the values needed for your specific use case, be sure to include an encoded query otherwise you will update all tickets in the selected table.
var tableName = 'incident';
var resolveCode = 6;
var closeNotes = 'Closing due to IP Monitor false alerts.';
var closeCode = 'Solved (Work Around)';
var incImpact = 3;
var incUrgency = 3;
var encQuery = 'active=true^descriptionLIKEjava.io.IOException: An unexpected network error occurred.^u_caller=2d4fbd9adbc07a00f7735595ce961995^category=Monitoring';

// Do not change past this line.
var gr = new GlideRecord(tableName);
gr.addEncodedQuery(encQuery);
gr.query();

while(gr.next()){
	// This section sets the value but requires gr.update() to run in order for it to update the ticket with this information.
	gr.state.setValue(resolveCode);
	gr.close_notes.setValue(closeNotes);
	gr.close_code.setValue(closeCode);
	gr.impact.setValue(incImpact);
	gr.urgency.setValue(incUrgency);
	
	gr.update();
}