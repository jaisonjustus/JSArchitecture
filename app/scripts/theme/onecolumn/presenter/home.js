var HomePresenter = {

	init : function()	{
		Observer.on('newsLoaded', this.test);
	},

	templates : {
		container : $('#container').html().replace('&gt;','>'),
		block : $('#news_block_tpl').html().replace('&gt;','>')
	},

	test : function(data)	{
		console.log(data, " MOFO");
		// alert('got');
	},

	dataMap : function()	{
		var news = HomeLogic.getNews();

		return { 
			state : 'half',
			newsDataList : news
		} 
	},

	renderNews : function()	{
		// console.log(this.dataMap);
		$('.layout__content-wrapper').html(
			Mustache.to_html(
				this.templates.container,
				this.dataMap(),
				{
					'newslist' : this.templates.block
				}
			)
		);
	},

	loadEventBindings : function()	{}

};