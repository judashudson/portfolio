var linkENV = 'test';

var testLink = 'https://onfs.hitachi-id.net/iam/requests/requests%3Ball';
var splitLink = 8;

var newLink = testLink.slice(0,splitLink) + linkENV + "." + testLink.slice(splitLink);

newLink