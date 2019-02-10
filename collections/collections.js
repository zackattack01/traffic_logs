DnsLogs = new Mongo.Collection('dnslogs');

if (Meteor.isClient) {
	Meteor.subscribe('dnslogsTopic');
}

if (Meteor.isServer) {
	Meteor.publish('dnslogsTopic', function() {
		return [DnsLogs.find({}, {sort:{timestamp: -1}, limit: 20})];
	});
}

