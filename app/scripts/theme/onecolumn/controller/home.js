var HomeLogic = {

	models : {
		news : new News()
	},

	init : function()	{
		this.models.news.fetch(function()	{
			Observer.fire('newsLoaded', this.get('*'));
		})
		//return this.models.news.get('*');
	}

}