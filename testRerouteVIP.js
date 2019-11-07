// For Testing SYS ID 251d3881dbe80c1004845434ce961938 on table sysapproval_approver

var appRecord = new GlideRecord('sysapproval_approver');
appRecord.get('sys_id','251d3881dbe80c1004845434ce961938');

gs.print(appRecord.getValue('approver'));