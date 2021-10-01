// get elements on the page to fill with data
var noResults = document.getElementById('error')
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
var usernameLink = document.getElementById('username-link');
var websiteLink = document.getElementById('website-link');
var twitterLink = document.getElementById('twitter-link');

var userInput = document.getElementById('input-box').value = 'asiav276';

// fetch data from github API
const getUserData = async () => {
    userInput = document.getElementById('input-box').value;
    await fetch(`https://api.github.com/users/${userInput}`)
    .then( res => {
        if (res.status >= 200 && res.status <= 299) {
            return res.json()
        } else {
            // Handle errors
            throw Error(res.statusText)
        }
    })
    .then(response => {
        if(noResults.style.display == 'block') {
            noResults.style.display = 'none'
        }
        //box header elements
        username.innerHTML = response.name
        usernameLink.innerText = '@'+response.login.toLowerCase()
        usernameLink.href = response.html_url
        usernameLink.target = '_blank'
        profilePic.src = response.avatar_url
        joined.innerHTML = new Date(Date.parse(response.created_at)).toDateString().slice(4)
        response.bio != null ? bio.innerText = response.bio : bio.innerText = "This profile has no bio."
        
        //profile stats elements
        repos.innerHTML = response.public_repos
        followers.innerHTML = response.followers
        following.innerHTML = response.following

        //icon-box elements
        userLocation.innerText = " " + response.location
        website.innerText = response.blog
        company.innerText = response.company

            //location icon
            if (response.location != null) {
                userLocation.innerText = response.location
                userLocation.style.color = '#ffffff'
            }
            else {
                userLocation.innerText = 'Not Available'
                userLocation.style.color = 'gray'
            }

            //website icon
            if (response.blog != '') {
                website.style.display = 'none'
                websiteLink.innerText = response.blog
                //considers links including http or not
                response.blog.startsWith('http') ? websiteLink.href = 'https://' + response.blog.split('//')[1] : websiteLink.href = 'https://' + response.blog
                websiteLink.target = '_blank'
            }
            else {
                website.innerText = 'Not Available'
                websiteLink.innerText = ''
            }
            
            //twitter icon
            if (response.twitter_username != null) {
                twitter.style.display = 'none'
                twitterLink.innerText = '@' + response.twitter_username
                twitterLink.href = 'https://twitter.com/' + response.twitter_username
                twitterLink.target = '_blank'
            }
            else {
                twitter.innerText = 'Not Available'
                twitterLink.innerText = ''
            }

            //company icon
            if (response.company != null) {
                company.innerText = response.company
                company.style.color = '#ffffff'
            }
            else {
                company.innerText = 'Not Available'
                company.style.color = 'gray'
            }
        
    })
    .catch((err) => {
        noResults.style.display = 'block'
    })
}

getUserData()
