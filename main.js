$(document).ready(function(){
	$.getJSON('https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop&callback=?', function(data){
		var itemString =""

		data.forEach(function(item){
			itemString += `<div class="itemBox></div>`

		})
		$("#itemBlock").html(itemString)
	})
})