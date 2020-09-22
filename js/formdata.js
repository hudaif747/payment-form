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

$('#form-submit').on('click', function (e) {
    e.preventDefault();
    const json_data = $form.serializeObject();
    console.log(json_data);
    if ($form.valid()) {
        var jqxhr = $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: json_data
        }).success(
            // do something
            onSuccess()
        );
    }
})

function onSuccess() {
    if (!alert("form submission succesfull")) {
        window.location.reload();
    }
}