document.getElementById('bookingForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      const serviceId = Math.floor(Math.random() * 100000);
      const vendor = document.getElementById('vendor').value;
      const date = document.getElementById('date').value;
      
      alert('Service Booked successfully!');
      
      localStorage.setItem('serviceId', serviceId);
      localStorage.setItem('vendor', vendor);
      localStorage.setItem('date', date);
      
      window.location.href = 'booking-success.html';
  });
  
  document.getElementById('serviceId').textContent = localStorage.getItem('serviceId');
  document.getElementById('vendor').textContent = localStorage.getItem('vendor');
  document.getElementById('date').textContent = localStorage.getItem('date');
  