
// Toggling dark or light theme
var darkBtn = document.getElementById('dark')
var lightBtn = document.getElementById('light')

const toggleTheme = () => {
    if(window.getComputedStyle(darkBtn).getPropertyValue('display') == 'flex') {
        darkBtn.style.display = 'none'
        lightBtn.style.display = 'flex'
        lightBtn.style.alignItems = 'center'
        console.log('changing to light');

    }
    else if(window.getComputedStyle(lightBtn).getPropertyValue('display') == 'flex') {
        darkBtn.style.display = 'flex'
        darkBtn.style.alignItems = 'center'
        lightBtn.style.display = 'none'
        console.log('changing to dark');
    }
}

/*var mql = window.matchMedia('(prefers-color-scheme: dark)')
//var isDarkPref

function screenTest(e) {
    if (e.matches) {
      //computer's prefered theme is dark
      //console.log('the computers prefered theme is dark');
      //isDarkPref = true

    } else {
      //computer's prefered theme is light
      //console.log('the computers prefered theme is light');
      //isDarkPref = false
    }
  }
  
  mql.addEventListener('change', screenTest);*/

  //console.log(lightBtn);

//var background = document.getElementsByTagName('body')
