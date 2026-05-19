/* Use the following requirements to complete the activity:
Use the async / await approach to Fetch the API and make a GET request to the / users endpoint of the JSONPlaceholder API.
Retrieve all the user records from the response data.
Display individual user records as list items li displaying the 'name' and 'email' of each user.
Handle any errors that may occur during the request.
*/

const userList = document.getElementById('users');
const getButton = document.getElementById('button')

async function fetchAndDisplayUsers() {
    userList.innerHTML = 'Loading...';

    try {
        const apiUrl = "https://jsonplaceholder.typicode.com/users";
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Network response was not ok. Status: ${response.status}`);
        }
        const users = await response.json();

        users.forEach((user) => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${user.name}</strong> | ${user.email}`;
            userList.appendChild(li);
        });
    } catch (error) {
        userList.innerHTML = `Could not load users: Error:${error.message}`;
    }
}

getButton.addEventListener('click', fetchAndDisplayUsers);