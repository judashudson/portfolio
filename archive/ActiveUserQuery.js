// Create array storing string version of name.
var arrayUsers = ['Danny Leach','Nick Busse','Mary Krieger','Karu Lal','Prabhakar Kumar','David Burt','Jean-Michel Kourie Frias','Kaavya Pasupuleti'];



for(var i = 0; i < arrayUsers.length; i++){
//gs.print(arrayUsers[i]); // This line was for testing the array to make sure it prints off exactly what is in the array and no more.

// Create a query on the sys_user table to pass each user through.
var userQuery = new GlideRecord('sys_user');
userQuery.addQuery('name',arrayUsers[i]);
userQuery.query();
// This was done through a looping query, can also use the get method instead.
while(userQuery.next()){
gs.print('\n Name' + userQuery.name.getDisplayValue() + '\n Active:' +userQuery.active.getDisplayValue());
}
}