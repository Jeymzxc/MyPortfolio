// Handle contact form submission with AJAX (no redirect)
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.contact-form');
  const successMessage = document.getElementById('successMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent default form submission

      // Send form data to Formspree without redirect
      const formData = new FormData(this);
      
      fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          // Show success message
          successMessage.classList.remove('d-none');
          contactForm.reset();
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            successMessage.classList.add('d-none');
          }, 5000);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again.');
      });
    });
  }
});