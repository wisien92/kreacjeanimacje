/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

$(function() {
	  $('#contactform').submit(function(e) {
		var phoneNumber = document.getElementById("inputPhone").value;
		var emailAddress = document.getElementById("inputEmail").value;
		var eventType = document.getElementById("inputEventType").value;
		var eventDate = document.getElementById("inputEventDate").value;
		var comments = document.getElementById("inputComments").value;
	  
		var body = "Wiadomość wysłana przy użyciu formularza. <br><br>" +
			"Email:                " + emailAddress + "<br>" +
			"Telefon:              " + phoneNumber + "<br>" +
			"Wybrany event:        " + eventType + "<br>" +
			"Data eventu:          " + eventDate + "<br><br>" +
			"Dodatkowe informacje: " + comments + "<br>";	  
	
		Email.send({			
			SecureToken : "c3e0c2e0-9fe3-4d1c-92c2-a980a6dea159",
			To : 'j.j.wisniewski92@gmail.com',
			From : "j.j.wisniewski92@gmail.com",
			Subject : "Zapytanie o animacje - Formularz",
			Body : body
		}).then(			
		  message => {
			if(message === "OK") {				
				$('.email-success').modal('show');
			} else {			
				$('.email-fail').modal('show');
			}
			console.log(message);
		  }
		);
		return false;
	  });
	});