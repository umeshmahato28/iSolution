document.getElementById('registrationForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Generate random User ID
      const userId = Math.floor(Math.random() * 100000);
    //   const userName = document.getElementById('userName').value;
      const email = document.getElementById('email').value;
  
      // Store the details locally (if needed for future use)
      localStorage.setItem('userId', userId);
    //   localStorage.setItem('userName', userName);
      localStorage.setItem('email', email);
  
      // Show the success modal with details
      document.getElementById('userId').textContent = userId;
    //   document.getElementById('modalUserName').textContent = userName;
      document.getElementById('modalEmail').textContent = email;
  
      const modal = document.getElementById('successModal');
      modal.style.display = "block";
  
      // Close modal functionality
      const span = document.getElementsByClassName('close')[0];
      span.onclick = function() {
          modal.style.display = "none";
      };
  
      // Close modal when clicking outside
      window.onclick = function(event) {
          if (event.target === modal) {
              modal.style.display = "none";
          }
      };
  });
  