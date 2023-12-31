document.addEventListener('DOMContentLoaded', function () {
  fetchUserName();
});

const displayWelcomeMessage = (message) => {
  document.getElementById('welcomeMessage').innerHTML = message;
};

const fetchUserName = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:3000/getUser/username', {
        headers: { "Authorization": token }
    });
    
    const userName = response.data.loggedInUserName

    console.log(userName)
    const welcomeMessage = `
    <div class="welcome-message">
    <p>Hello <span class="user-name">${userName}</span></p>
    <p>Step into your expense tracker app.</p>
    <p><span>Are you all set to get started?</span></p>
</div>
`;
    displayWelcomeMessage(welcomeMessage);
  } catch (error) {
    console.error('Error fetching user name:', error.message);
  }
};



