document.getElementById("personalInfoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get selected service and personal information
    var selectedService = document.getElementById("serviceSelect").value;
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var location = document.getElementById("location").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;

    // Display confirmation message
    var confirmationMessage = `Your request for ${selectedService} will be processed. We will contact you at ${number} or ${email}.`;
    alert(confirmationMessage);

    // You can optionally send this data to the server for processing using AJAX
});
