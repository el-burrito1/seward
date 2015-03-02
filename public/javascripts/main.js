$(document).on('ready' , function(){
	function initialize() {
	  var mapOptions = {
	    zoom: 17,
	    center: new google.maps.LatLng(34.086336, -118.33344799999998)
	  };

	  var map = new google.maps.Map(document.getElementById('map-canvas'),
	      mapOptions);

	  var marker = new google.maps.Marker({
	      position: new google.maps.LatLng(34.086336, -118.33344799999998),
	      map: map,
	      title: '835 Seward Street'
	  });

	};


	google.maps.event.addDomListener(window, 'load', initialize)

	$(window).scroll(function(){
		if($(document).scrollTop()>0){
			$('#navbar').addClass('navbar-after')
		} else {
			$('#navbar').removeClass('navbar-after')
		}
	})

	$('#contactForm').on('submit' , function(e){
		e.preventDefault()
		$('#spinner').addClass('fa fa-spinner fa-spin')
		var contactInfo = $(this).serialize()
		console.log(contactInfo)

		var success = function(){
			setTimeout(function(){
				$('#button').text('Thank you. We will contact you shortly.')
			},1000)
		}

		$.ajax({
			type: 'POST',
			url : '/contact',
			data: contactInfo,
			success : success()
		})

		$(this)[0].reset()

	})

})