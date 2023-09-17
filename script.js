const name = document.getElementById("name")
const email = document.getElementById("email")
const budget = document.getElementById("budget")
const message = document.getElementById("message")
const submitMsg = document.getElementById("submitMsg")

function sendMail(e) {
    e.preventDefault();

    var params = {
        from_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        budget: document.getElementById("budget").value,
        message: document.getElementById("message").value
    }
    
    emailjs.send("service_jbl85xs", "template_vbntieg", params)
    .then(function (res) {
        name.value="";
        email.value="";
        budget.value="";
        message.value="";
        submitMsg.innerHTML="Your message was submitted successfully!";
    })
}