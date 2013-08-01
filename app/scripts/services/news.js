var Service = Service || {};

var News = Service.News = EHQ.Service.extend({

  initialize : function() {
    this.schema = {
      id: "string",
			created_at: "string",
			title: "string",
			created_by: "string",
			content: "string",
			url: "string",
			count: "string",
			image_thumbnail_url: "string",
			image_url: "string",
			allow_unverified_participation: "string",
			allow_comments: "string",
			categories: "string",
			permalink: "string",
			archived : "boolean"
    };

    this.collection = true;
  },



  authenticate : function() {
    console.log("authenticating.....", this.get('username'), this.get('password'));
  }

});