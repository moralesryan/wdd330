/*JavaScript can be used to enhance form validation experience by providing custom
validation logic, handling complex validation scenarios, and providing real-time 
feedback to users. This can include checking if two fields match (e.g., password confirmation), 
validating input formats, and preventing form submission if the data is invalid.
*/
const form = document.getElementById('myForm');
form.addEventListener('submit', function (event) {
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    if (!email || !age) {
        event.preventDefault(); // Prevent form submission
        alert('Please fill out all required fields.');
    } else if (age < 18 || age > 100) {
        event.preventDefault(); // Prevent form submission
        alert('Age must be between 18 and 100.');
    }
});

//here is a code example i edited in codepen that shows when criteria is not met in the form, how js is cooking and making an alert pop up! 
https://codepen.io/moralesryan/pen/XJNMNLL