$(document).ready(function () {

    //Registration Form Submit
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


    //Login Form Submit
    $("#login_here").click(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "php/login_success.php",
            data: {
                email: $("#login_email").val(),
                password: $("#login_password").val(),
            },
            beforeSent: function () {
                $("#login_here").html("Please wait...");
            },
            success: function (response) {
                if (response.trim() == "Login Success") {
                    window.location = "index.html";
                }
            }
        });
    });


    //Auto show login form on page load
    // $('#loginModal').modal('show');
});
