var Service = Service || {};

var News = Service.News = EHQ.Service.extend({

  initialize : function() {
    this.schema = {
      id : "int",
      username : "string",
      password : "string"
    };

    this.collection = true;
  },



  authenticate : function() {
    console.log("authenticating.....", this.get('username'), this.get('password'));
  }

});