var EHQ = EHQ || {};


var Observer = EHQ.Observer = {

	subscribers : {},

	fire : function(eventName)	{
		if(this.subscribers.hasOwnProperty(eventName))	{
			var e = this.subscribers[eventName],
					args = null;

			// console.log(arguments);
			if(arguments.length > 1)	{
				// var temp = arguments;
				args = Array.prototype.slice.call(arguments, 1);
			}

			for(var i = 0; i < e.length; i++)	{
				e[i].apply(this,args);
			}
		}
	},

	on : function(eventName, callback) {
		if(!this.subscribers.hasOwnProperty(eventName))	{
			this.subscribers[eventName] = [];
		}

		this.subscribers[eventName].push(callback);
	}

};