// on-scroll navbar animaion
window.onscroll = function () {
    $("#banner").toggleClass("scrolled", $(window).scrollTop() > 100);
    // $("#banner").slideDown(500, swing, $(window).scrollTop() > 50)
};

// down button
$('.round').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.arrow').toggleClass('bounceAlpha');
    window.location.href = "#content";
    // $(window).scrollTop($('#contact').offset().top);

});

// international telephone things
$("#contact").intlTelInput({
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js"
});
$("#whatsapp").intlTelInput({
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js"
});

// $(document).ready(() => { OLD METHODD!!!
// $("#contact").change(() => {
//     var intlNumber = $("#contact").intlTelInput("getNumber"); // get full number eg +17024181234
//     var countryData = $("#contact").intlTelInput("getSelectedCountryData"); // get country data as obj 
//     console.log(countryData);

//     var countryCode = countryData.dialCode; // using updated doc, code has been replaced with dialCode
//     countryCode = "+" + countryCode; // convert 1 to +1

//     var newNo = intlNumber.replace(countryCode, "(" + countryCode + ")"); // final version
//     console.log(newNo);
//     $("#contactreal").val(newNo);
// })

$("#contact").on("input", function () {
    var intlNumber = $("#contact").intlTelInput("getNumber"); // get full number eg +17024181234
    var countryData = $("#contact").intlTelInput("getSelectedCountryData"); // get country data as obj 
    console.log(countryData);

    var countryCode = countryData.dialCode; // using updated doc, code has been replaced with dialCode
    countryCode = "+" + countryCode; // convert 1 to +1

    var newNo = intlNumber.replace(countryCode, "(" + countryCode + ")"); // final version
    console.log(newNo);
    $("#contactreal").val(newNo);
});
$("#whatsapp").on("input", function () {
    var intlNumber = $("#whatsapp").intlTelInput("getNumber"); // get full number eg +17024181234
    var countryData = $("#whatsapp").intlTelInput("getSelectedCountryData"); // get country data as obj 
    console.log(countryData);

    var countryCode = countryData.dialCode; // using updated doc, code has been replaced with dialCode
    countryCode = "+" + countryCode; // convert 1 to +1

    var newNo = intlNumber.replace(countryCode, "(" + countryCode + ")"); // final version
    console.log(newNo);
    $("#whatsappreal").val(newNo);
});

// })