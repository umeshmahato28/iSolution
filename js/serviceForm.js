document.addEventListener("DOMContentLoaded", function () {
    const serviceDropdown = document.getElementById('service');
    const applianceOptions = document.getElementById('applianceOptions');
    const cleaningOptions = document.getElementById('cleaningOptions');
    const vehicleOptions = document.getElementById('vehicleOptions');
    const productOptions = document.getElementById('productOptions');
    const vendorDropdown = document.getElementById('vendor');
    const amountField = document.getElementById('amount');
    const bookingForm = document.getElementById('bookingForm');

    const modal = document.getElementById('bookingModal');
    const modalServiceId = document.getElementById('modalServiceId');
    const modalVendor = document.getElementById('modalVendor');
    const modalDate = document.getElementById('modalDate');
    const modalAmount = document.getElementById('modalAmount');
    const closeModalSpan = document.querySelector('.close-btn');

    let basePrice = 0;

    // Show or hide additional options based on the service selected
    serviceDropdown.addEventListener('change', function () {
        const selectedService = serviceDropdown.value;

        // Hide all extra options initially
        applianceOptions.style.display = 'none';
        cleaningOptions.style.display = 'none';
        vehicleOptions.style.display = 'none';
        productOptions.style.display = 'none';
        basePrice = parseInt(serviceDropdown.selectedOptions[0].getAttribute('data-price')) || 0;

        // Show appropriate options based on service selection
        if (selectedService === 'Appliance Repair') {
            applianceOptions.style.display = 'block';
        } else if (selectedService === 'House Cleaning') {
            cleaningOptions.style.display = 'block';
        } else if (selectedService === 'Vehicle Repair') {
            vehicleOptions.style.display = 'block';
        } else if (selectedService === 'Product Deliery') {
            productOptions.style.display = 'block';
        }

        updateAmount(); // Update amount based on selection
    });

    // Event listener to update amount when additional options change
    document.getElementById('applianceType').addEventListener('change', updateAmount);
    document.getElementById('cleaningType').addEventListener('change', updateAmount);
    document.getElementById('vehicleType').addEventListener('change', updateAmount);
    document.getElementById('productType').addEventListener('change', updateAmount);

    // Update amount based on service and sub-service selected
    function updateAmount() {
        let additionalPrice = 0;

        if (serviceDropdown.value === 'Appliance Repair') {
            const applianceType = document.getElementById('applianceType');
            additionalPrice = parseInt(applianceType.selectedOptions[0].getAttribute('data-price')) || 0;
        } else if (serviceDropdown.value === 'House Cleaning') {
            const cleaningType = document.getElementById('cleaningType');
            additionalPrice = parseInt(cleaningType.selectedOptions[0].getAttribute('data-price')) || 0;
        } else if (serviceDropdown.value === 'Vehicle Repair') {
            const vehicleType = document.getElementById('vehicleType');
            additionalPrice = parseInt(vehicleType.selectedOptions[0].getAttribute('data-price')) || 0;
        } else if (serviceDropdown.value === 'Product Deliery') {
            const productType = document.getElementById('productType');
            additionalPrice = parseInt(productType.selectedOptions[0].getAttribute('data-price')) || 0;
        }

        // Update the total amount
        const totalAmount = basePrice + additionalPrice;
        amountField.value = totalAmount;
    }

    // Event listener for form submission
    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Generate random Service ID
        const serviceId = Math.floor(Math.random() * 100000);

        // Get values for the modal
        const selectedVendor = vendorDropdown.value;
        const selectedDate = document.getElementById('date').value;
        const totalAmount = amountField.value;

        // Set modal content
        modalServiceId.textContent = serviceId;
        modalVendor.textContent = selectedVendor;
        modalDate.textContent = selectedDate;
        modalAmount.textContent = totalAmount;

        // Show the modal
        modal.style.display = "block";
    });

    // Close modal when the 'X' is clicked
    

    // Close modal when clicking outside of the modal
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});