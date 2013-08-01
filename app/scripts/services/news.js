var Service = Service || {};

var News = Service.News = EHQ.Service.extend({

  initialize : function() {
    this.schema = {
      id : 'int',
      name : 'string',
      email : 'string',
      avatar : 'string'
    };

    this.collection = true;

    this.url = 'https://api.mongolab.com/api/1/databases/stockvibe/collections/user?apiKey=4f6acab2e4b019347c6711c7';
  }
  
});