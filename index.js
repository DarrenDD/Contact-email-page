function sendEmail(){
  var email = {
    name : document.getElementById("name").value, 
    email : document.getElementById("email").value,
    phoneNo : document.getElementById("phoneNo").value,
    message : document.getElementById("message").value
  };
  const serviceId = "service_hwt9jfv";
const templateId = "template_num47in";

emailjs.send(serviceId, templateId, email).then(
  resp => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phoneNo").value = "";
    document.getElementById("message").value = "";

    console.log(resp);
    alert("Message sent")
  }
)
.catch((err) => console.log(err));
}

