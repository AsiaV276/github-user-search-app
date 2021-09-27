// get elements on the page to fill with data
var username = document.getElementById('username');
var profilePic = document.getElementById('profile-pic');
var joined = document.getElementById('joined');

var repos = document.getElementById('repos');
var followers = document.getElementById('followers');
var following = document.getElementById('following');

var userLocation = document.getElementById('location');
var website = document.getElementById('website');
var websiteLink = document.getElementById('website-link');
var twitter = document.getElementById('twitter');
var company = document.getElementById('company');
var bio = document.getElementById('profile-bio');
var usernameLinkH3 = document.getElementById('username-link');
var websiteLinkSpan = document.getElementById('website-link');

var userInput = document.getElementById('input-box').value = 'asiav276';

// fetch data from github API
const getUserData = async () => {
    userInput = document.getElementById('input-box').value;
    await fetch(`https://api.github.com/users/${userInput}`)
    .then( res => res.json())
    .then(response => {
        if(response != null) {
            //box header elements
            username.innerHTML = response.login
            var usernameLink = document.createElement('a')
                usernameLink.appendChild(document.createTextNode('@'+response.login.toLowerCase()))
                usernameLink.href = response.html_url
                usernameLink.target = '_blank'
                usernameLinkH3.appendChild(usernameLink)
            profilePic.src = response.avatar_url
            joined.innerHTML = new Date(Date.parse(response.created_at)).toDateString()
            response.bio != null ? bio.innerText = response.bio : bio.innerText = "This profile has no bio."
            
            //profile stats elements
            repos.innerHTML = response.public_repos
            followers.innerHTML = response.followers
            following.innerHTML = response.following

            //icon-box elements
            userLocation.innerText = response.location
            website.innerText = response.blog
            company.innerText = response.company
            console.log(response.blog);
            if (response.blog != null) {
                website.style.display = "none"
                var websiteLink = document.createElement('a')
                websiteLink.appendChild(document.createTextNode(response.blog))
                websiteLink.href = 'https://' + response.blog
                websiteLink.target = '_blank'
                websiteLinkSpan.appendChild(websiteLink)
            }
            else {
                website.innerText = 'Not Available'
            }
    
            response.twitter_username != null ? twitter.innerText = response.twitter_username : twitter.innerHTML = "Not Available"
            response.company != null ? company.innerText = response.company : company.innerText = "Not Available"
        }
        else {
            console.log('show error message/ user not found');
        }
         })
}

getUserData()

/* Toggling dark or light theme?
var mql = window.matchMedia('prefers-color-scheme: dark')

const screenTest =(e) => {
    if(e.matches) {

    }
}
const toggleTheme = () => {
    //if()
}
*/