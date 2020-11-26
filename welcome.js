document.getElementById("sign_form_email").oninput = function() {
    var email = document.getElementById("sign_form_email").value;
    var $password = document.getElementById("sign_form_password");
    if (validateEmail(email)) {
        $password.removeAttribute('disabled', false);
    } else {
        $password.setAttribute('disabled', true);
    }
}
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}