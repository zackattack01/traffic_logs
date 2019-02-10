Template.dnsTable.helpers({
	dnsLogs: function() {
		return DnsLogs.find();
	}
});

Template.dnsLog.helpers({
	determineResponder: function() {
		//console.log(this);
		if (this.responder) {
      return "local " + this.responder;
		}
    if (this.forwarded) {
       return this.forwarded;
    }
    if (this.cached) {
       this.reply = this.cached;
       return "local cache";
    }
	},
  styles: function() {
    var classes = "";
		if (this.reply === "0.0.0.0") {
      classes += "blackholed ";
		}
    if (this.cached) {
       classes += "cached ";
    }
    return classes;
  }
});

