// Update these lines with the values needed for your specific use case, be sure to include an encoded query otherwise you will update all tickets in the selected table.
var tableName = 'incident';
var resolveCode = 6;
var incImpact = 3;
var incUrgency = 3;
var incState = 9;
var holdReason = 3;
var probID = '0197fcaedb75f7403b72fd7aae9619e5'; // Sys ID of the problem we wish to attach this ticket to.

var encQuery = 'active=true^descriptionLIKEjava.io.IOException: An unexpected network error occurred.^u_caller=2d4fbd9adbc07a00f7735595ce961995^category=Monitoring';

// Do not change past this line.
var gr = new GlideRecord(tableName);
gr.addEncodedQuery(encQuery);
gr.query();

while(gr.next()){
	var workComment = 'Attaching this ticket to problem' + gr.problem.getDisplayValue();
	
	// This section sets the value but requires gr.update() to run in order for it to update the ticket with this information.
	gr.impact.setValue(incImpact);
	gr.urgency.setValue(incUrgency);
	gr.state.setValue(incState);
	gr.hold_reason.setValue(holdReason);
	gr.problem_id.setValue(probID);
	gr.work_notes.setValue(workComment);	
	gr.update();
}