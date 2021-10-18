var sheet = document.createElement('style'),  
  $birthdayRangeInput = $('#birthday-range'),
  $weddingRangeInput = $('#wedding-range'),
  prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

document.body.appendChild(sheet);

var getBirthdayTrackStyle = function (el) {  
  var curVal = el.value,
      val = (curVal - 1) * 33.5,
      style = '';
  
  $('.birthday-range-labels li').removeClass('active selected');
  
  var curLabel = $('.birthday-range-labels').find('li:nth-child(' + curVal + ')');  
  curLabel.addClass('active selected');
  curLabel.prevAll().addClass('selected');
  
  for (var i = 0; i < prefs.length; i++) {
    style += '.birthday-range-div input::-' + prefs[i] + '{background: linear-gradient(to right, #fea1c9 0%, #fea1c9 ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
  }
  return style;
}

var getWeddingTrackStyle = function (el) {  
  var curVal = el.value,
      val = (curVal - 1) * 33.5,
      style = '';
  
  $('.wedding-range-labels li').removeClass('active selected');
  
  var curLabel = $('.wedding-range-labels').find('li:nth-child(' + curVal + ')');  
  curLabel.addClass('active selected');
  curLabel.prevAll().addClass('selected');
  
  for (var i = 0; i < prefs.length; i++) {
    style += '.wedding-range-div input::-' + prefs[i] + '{background: linear-gradient(to right, #fea1c9 0%, #fea1c9 ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
  }
  return style;
}

$birthdayRangeInput.on('input', function () {
  sheet.textContent += getBirthdayTrackStyle(this);
});

$weddingRangeInput.on('input', function () {
  sheet.textContent += getWeddingTrackStyle(this);
});

$('.birthday-range-labels li').on('click', function () {
  var index = $(this).index();  
  $birthdayRangeInput.val(index + 1).trigger('input');  
});

$('.wedding-range-labels li').on('click', function () {
  var index = $(this).index();  
  $weddingRangeInput.val(index + 1).trigger('input');  
});

$("#birthday-range").on("input change", function(e) {
	switch ($(this).val()) {
		case '1':		  
			document.getElementById("birthday-price").innerHTML = "300 PLN";
			break;
		case '2':
			document.getElementById("birthday-price").innerHTML = "400 PLN";
			break;
		case '3':
			document.getElementById("birthday-price").innerHTML = "550 PLN";
			break;
		case '4':
			document.getElementById("birthday-price").innerHTML = "Cena ustalana indywidualnie";
			break;
		default:
			console.log('Incorrect value selected ' + $(this).val());
	}        
})	

$("#wedding-range").on("input change", function(e) {
	switch ($(this).val()) {
		case '1':
			document.getElementById("wedding-price").innerHTML = "500 PLN";
			break;
		case '2':
			document.getElementById("wedding-price").innerHTML = "650 PLN";
			break;
		case '3':
			document.getElementById("wedding-price").innerHTML = "800 PLN";
			break;
		case '4':
			document.getElementById("wedding-price").innerHTML = "Cena ustalana indywidualnie";
			break;
		default:
			console.log('Incorrect value selected ' + $(this).val());
	}        
})	
