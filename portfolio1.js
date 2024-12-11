
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !subject || !message) {
      displayResponse("Please fill in all fields!", "error");
      return;
    }
  
    if (!validateEmail(email)) {
      displayResponse("Please enter a valid email address!", "error");
      return;
    }

    displayResponse("Your message has been sent successfully!", "success");
  
    document.getElementById("contactForm").reset();
  });
  
  
  function displayResponse(message, type) {
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.textContent = message;
    responseMessage.style.color = type === "success" ? "#4caf50" : "#ff3d3d";
  }
  
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  } 