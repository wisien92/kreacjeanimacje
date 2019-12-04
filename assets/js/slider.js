var sheet = document.createElement('style'),  
  $birthdayRangeInput = $('#birthday-range'),
  $weddingRangeInput = $('#wedding-range'),
  $workshopsRangeInput = $('#workshops-range'),
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
    style += '.birthday-range-div input::-' + prefs[i] + '{background: linear-gradient(to right, #37adbf 0%, #37adbf ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
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
    style += '.wedding-range-div input::-' + prefs[i] + '{background: linear-gradient(to right, #37adbf 0%, #37adbf ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
  }
  return style;
}

var getWorkshopTrackStyle = function (el) {  
  var curVal = el.value,
      val = (curVal - 1) * 33.5,
      style = '';
  
  $('.workshops-range-labels li').removeClass('active selected');
  
  var curLabel = $('.workshops-range-labels').find('li:nth-child(' + curVal + ')');  
  curLabel.addClass('active selected');
  curLabel.prevAll().addClass('selected');
  
  for (var i = 0; i < prefs.length; i++) {
    style += '.workshops-range-div input::-' + prefs[i] + '{background: linear-gradient(to right, #37adbf 0%, #37adbf ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
  }
  return style;
}

$birthdayRangeInput.on('input', function () {
  sheet.textContent += getBirthdayTrackStyle(this);
});

$weddingRangeInput.on('input', function () {
  sheet.textContent += getWeddingTrackStyle(this);
});

$workshopsRangeInput.on('input', function () {
  sheet.textContent += getWorkshopTrackStyle(this);
});

$('.birthday-range-labels li').on('click', function () {
  var index = $(this).index();  
  $birthdayRangeInput.val(index + 1).trigger('input');  
});

$('.wedding-range-labels li').on('click', function () {
  var index = $(this).index();  
  $weddingRangeInput.val(index + 1).trigger('input');  
});

$('.workshops-range-labels li').on('click', function () {
  var index = $(this).index();  
  $workshopsRangeInput.val(index + 1).trigger('input');  
});

$("#birthday-range").on("input change", function(e) {
	switch ($(this).val()) {
		case '1':		  
			document.getElementById("birthday-price").innerHTML = "200 PLN";
			break;
		case '2':
			document.getElementById("birthday-price").innerHTML = "300 PLN";
			break;
		case '3':
			document.getElementById("birthday-price").innerHTML = "400 PLN";
			break;
		case '4':
			document.getElementById("birthday-price").innerHTML = "480+ PLN";
			break;
		default:
			console.log('Incorrect value selected ' + $(this).val());
	}        
})	

$("#wedding-range").on("input change", function(e) {
	switch ($(this).val()) {
		case '1':
			document.getElementById("wedding-price").innerHTML = "400 PLN";
			break;
		case '2':
			document.getElementById("wedding-price").innerHTML = "500 PLN";
			break;
		case '3':
			document.getElementById("wedding-price").innerHTML = "600 PLN";
			break;
		case '4':
			document.getElementById("wedding-price").innerHTML = "Cena ustalana indywidualnie";
			break;
		default:
			console.log('Incorrect value selected ' + $(this).val());
	}        
})	

$("#workshops-range").on("input change", function(e) {
	switch ($(this).val()) {
		case '1':		  
			document.getElementById("workshops-price").innerHTML = "200 PLN";
			break;
		case '2':
			document.getElementById("workshops-price").innerHTML = "300 PLN";
			break;
		case '3':
			document.getElementById("workshops-price").innerHTML = "400 PLN";
			break;
		case '4':
			document.getElementById("workshops-price").innerHTML = "480+ PLN";
			break;
		default:
			console.log('Incorrect value selected ' + $(this).val());
	}        
})	