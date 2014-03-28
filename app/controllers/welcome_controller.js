load('application');

action('index', function () {
	render({
		title: "welcome#index"
	});
});

action('test', function(){
	User.findOne({ where:{ 'email': 'meg@na.lufor' } }, function(err, user){
		if(err || !user){
			send("Error!")
		}else{
			send(String(user.name))
		}
	})
})