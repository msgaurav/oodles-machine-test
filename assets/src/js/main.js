$("#view-all-services").click(function() {
	$(".popup-services-container").css("display", "block");
});

$(".remove-popup").click(function() {
	$(".popup-services-container").css("display", "none");
});

$("#contact-us-form").submit(function() {
	alert("Contact form has been submitted successfully.");
});