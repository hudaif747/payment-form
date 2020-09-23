var $form = $('form#form-submission'),
    // url = 'https://script.google.com/macros/s/AKfycbywA_8KY-ReVkp-7U4SCfqtjgmNIXjlfuPy5GKUJLx84KIYTr8/exec'; !!ORIGINAL!!
    url = 'https://script.google.com/macros/s/AKfycbzUOSIpIwOzk8h770GkK9GaMqTNYG8KKG7JKaFCn0X7USx0SnGl/exec'; // !!TEST!!


// code for serializeObject 


$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};


$form.validate({
    rules: {
        Name: "required",
        Age: "required",
        "Whatsapp-Number": "required",
        "Contact-Number": "required",
        "Whatsapp": "required",
        "Contact": "required",
        Country: "required",
        State: "required",
        District: "required",
        Place: "required",
        Participated: "required"
    }
});

function fire(res, json) {
    var pid = res.razorpay_payment_id
    json.Payment_ID = pid;
    var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: json
    }).success(
        // do something
        onSuccess(pid)
    );
}


$('#form-submit').on('click', function (e) {
    e.preventDefault();
    const json_data = $form.serializeObject();
    console.log(json_data);
    if ($form.valid()) {
        var options = {
            "key": rzp_key,
            "amount": 50000, // Example: 2000 paise = INR 20
            "name": "Radio Islam",
            "description": "Course Fee for MEO Hifz by Radio Islam",
            "image": "images/logo.png", // COMPANY LOGO
            "handler": function (response) {
                fire(response, json_data);
                // AFTER TRANSACTION IS COMPLETE YOU WILL GET THE RESPONSE HERE.
            },
            "prefill": {
                "name": "Your Name", // pass customer name
                "email": 'you@example.com', // customer email
                // "contact": '+918848888121' //customer phone no.
            },
            // "notes": {
            //     "address": "address" //customer address 
            // },
            "theme": {
                "color": "#0399fa" // screen color
            }
        };
        console.log(options);
        var propay = new Razorpay(options);
        propay.open();

    }
})

function phphelper(response) {
    // response = JSON.parse(response)
    console.log(response)
}

function onSuccess(pid) {
    $form.trigger("reset");
    $('#pid').html(pid)
    $(".overlay").css({
        "visibility": "visible",
        "opacity": "1"
    });
}




function onXClick() {
    $(".overlay").css({
        "visibility": "hidden",
        "opacity": "0"
    });

    window.location = "index.php"
}