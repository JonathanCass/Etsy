$(document).ready(function(){
	$.getJSON('https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop&callback=?', function(data){
		console.log(data)
		console.log(data.length)

		var itemString =""

		for( i = 0 ; i < 52 ; i++ ){
			itemString += `<div class=itemBox></div>`
		}
		$("#itemFence").html(itemString)
	})
})
