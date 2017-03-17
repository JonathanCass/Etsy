$(document).ready(function(){
	$.getJSON('https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop&callback=?', function(data){
		console.log(data)
		console.log(data[0].images)
		var itemString =""

		for( i = 0 ; i < 52 ; i++ ){
			itemString += `<div id="itemBox${i}" class="itemBox"></div>`
		}
		$("#itemFence").html(itemString)
		for( i = 0 ; i < 52 ; i++ ){
			$(`#itemBox${i}`).css("background-image", "url(assets/cart.png)")
		}
	})
})
