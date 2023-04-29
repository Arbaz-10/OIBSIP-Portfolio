function sendEmail() {
    var params = {
        name: document.getElementById("username").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        message: document.getElementById("message").value,
        subject: document.getElementById("subject").value,
    }

    const ServiceID = "service_mptwfyg";
    const templateID = "template_cy9rl0f";

    emailjs.send(ServiceID, templateID, params)
        .then((res) => {
            document.getElementById("username").value = "";
            document.getElementById("email").value = "";
            document.getElementById("mobile").value = "";
            document.getElementById("message").value = "";
            document.getElementById("subject").value = "";
            console.log(res);
            alert("Message sent successfully !")
                .catch((err) => console.log(err));
        });
}