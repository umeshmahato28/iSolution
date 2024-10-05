document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      const storedUserId = localStorage.getItem('userId');
      const userId = document.getElementById('userId').value;
      
      if (userId === storedUserId) {
          window.location.href = 'serviceOpt.html';
      } else {
          alert('Invalid User ID or Password');
      }
  });
  