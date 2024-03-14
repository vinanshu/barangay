// Array to store user accounts
var users = [
    { email: 'user1@example.com', password: 'password1', name: 'User 1', age: 25, location: 'Location 1', phoneNumber: '1234567890' },
    { email: 'user2@example.com', password: 'password2', name: 'User 2', age: 30, location: 'Location 2', phoneNumber: '9876543210' }
  ];
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Check login credentials
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;
  
    var user = users.find(function(user) {
        return user.email === email && user.password === password;
    });
  
    var loginMessage = document.getElementById('loginMessage');
    if (user) {
        // Redirect to home page after successful login
        loginMessage.innerText = 'Login successful. Redirecting...';
        loginMessage.style.color = '#008000'; // Green color for success
        loginMessage.style.display = 'block';
        setTimeout(function() {
          window.location.href = 'home.html'; // Redirect to home.html
        }, 1500); // Redirect after 1.5 seconds
    } else {
        loginMessage.innerText = 'Incorrect email or password. Please try again.';
        loginMessage.style.display = 'block';
    }
  });
  
  document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form data
    var name = document.getElementById('registerName').value;
    var age = document.getElementById('registerAge').value;
    var location = document.getElementById('registerLocation').value;
    var phoneNumber = document.getElementById('registerPhoneNumber').value;
    var email = document.getElementById('registerEmail').value;
    var password = document.getElementById('registerPassword').value;
  
    // Perform client-side validation
    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }
  
    // Check if email already exists
    var existingUser = users.find(function(user) {
      return user.email === email;
    });
  
    if (existingUser) {
      alert('Email already exists. Please use a different email address.');
      return;
    }
  
    // Add new user to the array
    users.push({ email: email, password: password, name: name, age: age, location: location, phoneNumber: phoneNumber });
  
    // Show registration successful message
    alert('Registration successful!');
  
    // Clear registration form fields
    document.getElementById('registerForm').reset();
  });
  
  
  //LOGOUT
  