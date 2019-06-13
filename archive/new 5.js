var isMobile = GlideMobileExtensions.getDeviceType() == 'm';
var link = isMobile ? '#/!list/incident/q:active=true%5Ecaller_id=javascript:gs.user_id()%5EEQ' : 'home.do';

var linkLbl = isMobile ? "List" : "Homepage";
var br = '<br/>';
var linkURL = '<a href="' + link + '">' + gs.getMessage(linkLbl) + '</a>';
var msgArgs = [br, linkURL];

var info = "This incident was opened on your behalf{0}The IT department will contact you if they need any further information{0}You can track status from this {1} {0}";

gs.addInfoMessage(gs.getMessage(info,msgArgs));

current.contact_type = 'self-service';
current.caller_id = gs.getUserID();
if (producer.comments.length > 80)
	current.short_description = producer.comments.substring(0, 79);
else
	current.short_description = producer.comments;