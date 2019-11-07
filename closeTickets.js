function closeTickets(start,count,encQuery,resNotes){
    /*
    This function was designed to take advantage of pagination.
    Provide the following information to the function in order to continue.
    A starting point, for the purposes this function was defined for, 0 would be the most common.
    A total number of tickets you want to update, the count of the tickets.
    An encoded query, this allows ServiceNow to filter out the tickets from the rest with an easy to create filter.
    Your resolution notes, whatever you want the ticket to say as it's closing notes.
    Example : closeTickets(0,10,'active=true^opened_atONThis month@javascript:gs.beginningOfThisMonth()@javascript:gs.endOfThisMonth()','This is just a quick test.');
    */

    var workTable = 'incident';
    resNotes += '\n This ticket has been resolved by a script, if this has been resolved in error please contact the Service Desk for additional information.';

    var workQuery = new GlideRecord(workTable);
    workQuery.addEncodedQuery(encQuery);
    workQuery.chooseWindow(start,start+count,true);
    workQuery.query();

    while(workQuery.next()){

        workQuery.setValue('close_code','Solved (Permanently)');
        workQuery.setValue('close_notes',resNotes);
        workQuery.setValue('state','6');
        gs.log(workQuery.number.getDisplayValue() + ' : ' + workQuery.short_description.getDisplayValue() + " - Has been updated and resolved.");
        workQuery.update();

    }
}