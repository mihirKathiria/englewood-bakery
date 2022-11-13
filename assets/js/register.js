$(document).ready(function () {
    $("#register_here").click(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "php/register_success.php",
            data: {
                fullname: $("#register_fullname").val(),
                monumber: $("#register_mo_number").val(),
                email: $("#register_email").val(),
                password: $("#register_password").val()
            },
            beforeSend: function () {
                $("#register_here").html("Please Wait...");
            },
            success: function (response) {
                if (response.trim() == "Sign in Success :)") {
                    window.location = "index.html";
                }
            }
        });
    });
});
