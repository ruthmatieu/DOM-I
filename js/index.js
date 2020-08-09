const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "e-mail" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let navItems = document.querySelectorAll("a");
navItems[0].setAttribute('class', '.nav-item-1')
navItems[0].innerText = "Services"
navItems[1].setAttribute('class', '.nav-item-2')
navItems[1].innerText = "Product"
navItems[2].setAttribute('class', '.nav-item-3')
navItems[2].innerText = "Vision"
navItems[3].setAttribute('class', '.nav-item-4')
navItems[3].innerText = "Features"
navItems[4].setAttribute('class', '.nav-item-4')
navItems[4].innerText = "About"
navItems[5].setAttribute('class', '.nav-item-4')
navItems[5].innerText = "Contact"

navItems.forEach((item) => {
  item.style.color = 'green';
})

// for(i=0; i < navItems.length; i++){
//   siteContent['nav'].innerText = navItems[i]
// }

//header
let header = document.querySelector('h1');
header.textContent = siteContent['cta']['h1'];

let mainImg = document.getElementById('cta-img');
mainImg.setAttribute('src', siteContent['cta']['img-src'])

let bodyImg = document.getElementById('middle-img');
bodyImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

let buttonTxt = document.querySelector('button');
buttonTxt.textContent = siteContent['cta']['button']

//main content
let mainContentTitles = document.querySelectorAll('h4');
mainContentTitles[0].textContent = siteContent['main-content']['features-h4']
mainContentTitles[1].textContent = siteContent['main-content']['about-h4']
mainContentTitles[2].textContent = siteContent['main-content']['services-h4']
mainContentTitles[3].textContent = siteContent['main-content']['product-h4']
mainContentTitles[4].textContent = siteContent['main-content']['vision-h4']

let mainContentPara = document.querySelectorAll('.text-content p');
mainContentPara[0].textContent = siteContent['main-content']['features-content']
mainContentPara[1].textContent = siteContent['main-content']['about-content']
mainContentPara[2].textContent = siteContent['main-content']['services-content']
mainContentPara[3].textContent = siteContent['main-content']['product-content']
mainContentPara[4].textContent = siteContent['main-content']['vision-content']

//contact
let contactTitle = document.querySelectorAll('.contact h4');
contactTitle[0].textContent = siteContent['contact']['contact-h4']

let contactPara = document.querySelectorAll('.contact p');
contactPara[0].textContent = siteContent['contact']['address']
contactPara[1].textContent = siteContent['contact']['phone']
contactPara[2].textContent = siteContent['contact']['e-mail']

//footer
let footerPara = document.querySelectorAll('footer p');
footerPara[0].textContent = siteContent['footer']['copyright']

//appendChild
let newContent = document.createElement("p");
newContent.textContent = "Site created by Alanna Mathieu";
newContent.setAttribute(
       "style", "color: gray; background-color: cyan; padding: 10px 0; margin: 3px; text-align: center;");

let body = document.querySelector('body');
body.appendChild(newContent)

//prepend
let prependContent = document.createElement("p");
prependContent.textContent = 'Welcome';
prependContent.setAttribute(
       "style", "color: gray; background-color: cyan; padding: 10px 0; margin: 3px; text-align: center;");
let text = document.querySelector('body');
text.prepend(prependContent)

//STRETCH: applying JS styles and event handler
let headerStyles = document.querySelector('h1');
headerStyles.style.color = 'crimson';

//event handler
let colorPalette = document.querySelector('button'),
      colors      = ['aquamarine', 
                    'coral', 
                    'palegreen', 
                    'powderblue', 
                    'salmon',
                    'papayawhite',
                    'slategray',
                    'thistle',
                    'turquoise',
                    'gold',
                    'deeppink'];
let   colorIndex  = 0;

colorPalette.addEventListener('click', () => {
  headerStyles.style.color = colors[colorIndex];      
  colorIndex = (colorIndex + 1) % colors.length
});

// colorPalette.addEventListener('click', () => {
//   headerStyles.style.color = colors.forEach(item => {
//     return (item + 1) % item.length;
//   })
// });
