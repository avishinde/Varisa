document.addEventListener("DOMContentLoaded", function () {
   document.getElementById("sendMessageButton").addEventListener("click", function () {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email1").value;
      var projectDescription = document.getElementById("projectDescription").value || document.getElementById("projectDescriptionMobile").value;
      // alert("Please fill in all fields.");
      // console.log(name)
      // console.log(email)
      console.log(projectDescription)
       if (!name || !email || !projectDescription) {
         alert("Please fill in all fields.");
         // console.log("Working")
         return; // Stop further execution
         }
       if (name && email && projectDescription) {
           // Send email through EmailJS
           var templateParams = {
               from_name: name,
               reply_to: email,
               message: projectDescription
           };
           console.log(templateParams)
           emailjs.send("service_p6by7x9", "template_sx0rrwi", templateParams,"t4oFPYK0ETrcbxHEq")
               .then(function (response) {
                   console.log("Email sent successfully:", response);
                   alert("Message sent successfully!");
               })
               .catch(function (error) {
                   console.error("Email sending error:", error);
                   alert("Error sending message. Please try again later.");
               });
       } else {
           alert("Please fill in all fields.");
       }
   });
   sendMessageButton.style.cursor = "pointer";
   
});

