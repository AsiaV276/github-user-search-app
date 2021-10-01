
// Toggling dark or light theme
var darkBtn = document.getElementById('dark')
var lightBtn = document.getElementById('light')

//dark theme colors
var bkgDark = 'rgb(20,29,47)';
var boxDark =  '#1e2a47';
var textDark = '#ffffff';
var btn = '#0079ff'; 

//light theme colors
var bkgLight = '#f6f8ff';
var boxLight = '#fefefe';
var textLight = '#2b3442';
var lightClr1 = '#4b6a9b';
var lightShadow = '#697c9a';

var body = document.getElementById('body')
var box = document.getElementsByClassName('box')
var statBox = document.getElementsByClassName('profile-stats')[0]
var iconText = document.getElementsByClassName('icon-text')
var websiteLinkA = document.getElementById('website-link')
var twitterLinkA = document.getElementById('twitter-link')
var inputBox = document.getElementById('input-box')

const toggleTheme = () => {
    if(window.getComputedStyle(darkBtn).getPropertyValue('display') == 'flex') {
        darkBtn.style.display = 'none'
        lightBtn.style.display = 'flex'
        lightBtn.style.alignItems = 'center'
        
        body.style.backgroundColor = bkgLight
        body.style.color = 'black'
        inputBox.style.color = 'black'
        statBox.style.backgroundColor = bkgLight
        websiteLinkA.style.color = 'black'
        twitterLinkA.style.color = 'black'

        for (let i = 0; i < 2; i++) {
          box[i].style.backgroundColor = boxLight
          box[i].style.boxShadow = '2px 5px 30px ' + lightShadow
        }
        for (let j = 0; j < iconText.length; j++) {
          if(iconText[j].innerHTML !== 'Not Available') {
            iconText[j].style.color = 'black'
          } 
        }
    }
    else if(window.getComputedStyle(lightBtn).getPropertyValue('display') == 'flex') {
        darkBtn.style.display = 'flex'
        darkBtn.style.alignItems = 'center'
        lightBtn.style.display = 'none'

        body.style.backgroundColor = bkgDark
        body.style.color = '#ffffff'
        inputBox.style.color = '#ffffff'
        statBox.style.backgroundColor = bkgDark
        websiteLinkA.style.color = '#ffffff'
        twitterLinkA.style.color = '#ffffff'

        for (let i = 0; i < 2; i++) {
          box[i].style.backgroundColor = boxDark
          box[i].style.boxShadow = '0px 0px 0px ' + bkgDark
        }
        for (let j = 0; j < iconText.length; j++) {
          if(iconText[j].innerHTML !== 'Not Available') {
            iconText[j].style.color = '#ffffff'
          } 
        }
    }
}