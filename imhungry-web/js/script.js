var userArrary = [

	{
		name: "Titos",
		type: "Etinic",
		address: "122 Walter Hardwick Ave 305 Vancouver",
		link: "",
		pic: "",
	},

	{
		name: "Hank's Dairy Bar",
		type: "Fast food",
		address: "3308 Ash St Vancouver",
		link: "",
		pic: "",
	},

	{
		name: "D'Wine Restaurant",
		type: "Fast casual",
		address: "2485 Broadway W 414 Vancouver",
		link: "www.baidu.com",
		pic: "",
	},
	{
		name: "Basil Doc's Pizza Florida",
		type: "Casual dining",
		address: "275 28th Ave E Vancouver",
		link: "",
		pic: "",
	},
	{
		name: "Samuel's Memorable",
		type: "Fine dining",
		address: "106 5888 45th Ave W Vancouver",
		link: "",
		pic: "",
	},
	{
		name: "Louie's Chophouse",
		type: "Barbecue",
		address: "563 Union St Vancouver",
		link: "",
		pic: "",
	},



];

for (var i = 0; i < userArrary.length; i++) {
	var userDiv = $('<div>').addClass('user');

	$('<h1>').text(userArrary[i].name).appendTo(userDiv);
	$('<h3>').text(userArrary[i].type).appendTo(userDiv);
	$('<h3>').text(userArrary[i].address).appendTo(userDiv);

	var text= "url(" +userArrary[i].pic+")"
	$(userDiv).css("background-image",text);
	$(userDiv).css("background-repeat","no-repeat");
	$(userDiv).css("background-size","cover");
	$(userDiv).css("background-image","url(img/pic2.jpg)");
	$(userDiv).appendTo($('#user-container'));
}
