$(document).ready(function(){
	$.getJSON('https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=invader_zim&includes=Images,Shop&callback=?', function(data){
		console.log(data)
		var itemString =""

		for( i = 0 ; i < 24 ; i++ ){
			itemString += `<div class="itemBox"><div class = "image" id="imageActual${i}"></div><div class ="imageLabel" id="imageLabelActual${i}"><span class ="title">TITLE</span><span class ="maker">MAKER</span><span class ="price">PRICE</span></div></div>`
		}
		$("#itemFence").html(itemString)
		for( i = 0 ; i < 24 ; i++ ){
			$(`#imageActual${i}`).css("background-image", `url(${data.results[i].Images[0].url_570xN})`)
		}
	})
})


/*
console.log(data.results[0].Images[0].url_570xN)






*/