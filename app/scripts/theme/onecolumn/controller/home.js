var HomeLogic = {

	models : {
		news : new News()
	},

	getNews : function()	{
		this.models.news
			.set('title','welcome to ooty')
			.set('content','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod \
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo \
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non \
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
			.add();
		this.models.news.set('title','nice to meet you').add();
		return this.models.news.get('*');
	}

}