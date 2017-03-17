$(document).ready(function(){
	$.getJSON('https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=invader_zim&includes=Images,Shop&callback=?', function(data){
		console.log(data)
		var itemString =""

		for( i = 0 ; i < 24 ; i++ ){
			itemString += `<div class="itemBox"><div class = "image" id="imageActual${i}"><div class = "hoverBar"><img src ="assets/heart.png" class="heart"><img src ="assets/hamburger.png" class="hamburger"></div></div><div class ="imageLabel" id="imageLabelActual${i}"><span class ="title" id="titleActual${i}" >TITLE</span><span class ="maker" id="makerActual${i}" >MAKER</span><span class ="price" id="priceActual${i}">PRICE</span></div></div>`
		}
		$("#itemFence").html(itemString)
		for( i = 0 ; i < 24 ; i++ ){
			$(`#imageActual${i}`).css("background-image", `url(${data.results[i].Images[0].url_570xN})`)
			$(`#titleActual${i}`).html(`${data.results[i].title}`)		
			$(`#makerActual${i}`).html(`${data.results[i].Shop.shop_name}`)
			$(`#priceActual${i}`).html(`$${data.results[i].price}`)
		}
		$(".image").hover(function(){
			$(this).children().addClass("showMe")
			console.log(1)
		}, function(){
			$(this).children().removeClass("showMe")
		})
	})
})
