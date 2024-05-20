document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM fully loaded and parsed');
    const form = document.getElementById('contactForm');
    console.log('Form:', form);
    if (form) {
      form.addEventListener('submit', handleClick);
    } else {
      console.error('Form element not found');
    }
  
    async function sendEmail(first_name, last_name, email, message) {
      const data = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        message: message
      };
  
      try {
        // Sending email via emailjs
        emailjs.init("Oo9dQhYjI9VQdZpPl");
        await emailjs.send("service_76f9y3h", "template_2i83ldw", {
          front_name: first_name,
          last_name: last_name,
          email: email,
          message: message,
        });
        console.log("Email sent successfully");
      } catch (error) {
        console.error('Error:', error);
        throw error; // Rethrow the error to be caught in handleClick
      }
    }
  
    async function handleClick(e) {
      e.preventDefault(); // Prevent the form from submitting the traditional way
      console.log('Form submission prevented'); // Debug log
  
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      try {
        await sendEmail(firstName, lastName, email, message);
        alert('Form submitted successfully');
      } catch (error) {
        alert('Failed to submit form');
      }
    }
  });