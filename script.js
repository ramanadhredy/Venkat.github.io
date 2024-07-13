function openTab(tabName) {
    var i, tabcontent, tablink;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].style.backgroundColor = "";
    }
    document.getElementById(tabName).style.display = "block";
}

document.addEventListener('DOMContentLoaded', (event) => {
    // Automatically open the first tab
    document.getElementsByClassName('tablink')[0].click();
    
    // Fetch latest skills from an API or website
    fetch('https://api.example.com/latest-skills') // Replace with a real API URL
        .then(response => response.json())
        .then(data => {
            const skillsList = document.getElementById('skills-list');
            data.skills.forEach(skill => {
                const li = document.createElement('li');
                li.textContent = skill;
                skillsList.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching skills:', error);
            const skillsList = document.getElementById('skills-list');
            const errorMessage = document.createElement('li');
            errorMessage.textContent = 'Error loading skills. Please try again later.';
            skillsList.appendChild(errorMessage);
        });
});
