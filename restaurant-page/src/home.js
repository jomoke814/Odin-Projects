// import bgImage from './assets/rod-long-kImU-9S9uh8-unsplash.jpg'
// import logo from './assets/default-monochrome.svg'
import whatApp from "./assets/icons8-whatsapp.svg"
import Instagram from "./assets/icons8-instagram.svg"
import faceBook from "./assets/icons8-facebook.svg"
import Twitter from "./assets/icons8-twitter.svg"

export function initialLoadPage() {
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');
    const header = document.createElement('header');
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');
    const logo = document.createElement('div');
    logo.classList.add('logo');
    const navMenu = document.createElement('ul');
    navMenu.classList.add('nav-menu');
    const navItems = document.createElement('li');
    navItems.classList.add('nav-item');
    navItems.innerText = 'Home'
    const navItems2 = document.createElement('li');
    navItems2.classList.add('nav-item');
    navItems2.innerText = 'Menu'
    const navItems3 = document.createElement('li');
    navItems3.classList.add('nav-item');
    navItems3.innerText = 'Events'
    const navItems4 = document.createElement('li');
    navItems4.classList.add('nav-item');
    navItems4.innerText = 'Galley'
    const navItems5 = document.createElement('li');
    navItems5.classList.add('nav-item');
    navItems5.innerText = 'Contact'
    const bookBtn = document.createElement('button');
    bookBtn.innerText = 'book a table'
    const sectionHero = document.createElement('section');
    sectionHero.classList.add('hero');
    const introDiv = document.createElement('div');
    introDiv.classList.add('intro');
    const heading = document.createElement('h1');
    heading.textContent = "Enjoy your healthy delicious meal";
    const heading2 = document.createElement('h2');
    heading2.textContent = "Treat Yourself";
    const para = document.createElement('p');
    para.textContent = "Hundreds of flavors under one roof, with a pinch of passion in every dish.";
    const para2 = document.createElement('p');
    para2.textContent = "Another project from";
    const spanText = document.createElement('span');
    spanText.innerText = "odin-project";
    const exploreBtn = document.createElement('button');
    exploreBtn.innerText = "Explore now"
    const socialDiv = document.createElement('div');
    socialDiv.classList.add('social-icons');
    const whatsappImg = document.createElement('img');
    whatsappImg.src = whatApp;
    whatsappImg.alt = "whatsapp";
    const instImg = document.createElement('img');
    instImg.src = Instagram;
    instImg.alt = "instagram";
    const fbImg = document.createElement('img');
    fbImg.src = faceBook;
    fbImg.alt = "facebook";
    const twitterImg = document.createElement('img');
    twitterImg.src = Twitter;
    twitterImg.alt = "twitter";

    contentDiv.appendChild(header);
    header.appendChild(navbar);
    navbar.appendChild(logo);
    navbar.appendChild(navMenu);
    navMenu.appendChild(navItems);
    navMenu.appendChild(navItems2);
    navMenu.appendChild(navItems3);
    navMenu.appendChild(navItems4);
    navMenu.appendChild(navItems5);
    navbar.appendChild(bookBtn);
    header.appendChild(sectionHero);
    sectionHero.appendChild(introDiv);
    introDiv.appendChild(heading);
    introDiv.appendChild(heading2);
    introDiv.appendChild(para);
    introDiv.appendChild(para2);
    para2.appendChild(spanText);
    introDiv.appendChild(exploreBtn);
    sectionHero.appendChild(socialDiv);
    socialDiv.appendChild(whatsappImg);
    socialDiv.appendChild(instImg);
    socialDiv.appendChild(fbImg);
    socialDiv.appendChild(twitterImg);

    return contentDiv;

};


{/* <header>
<div class="navbar">
    <div class="logo"></div>
    <ul class="nav-menu">
        <li class="nav-item">Home</li>
        <li class="nav-item">Menu</li>
        <li class="nav-item">Events</li>
        <li class="nav-item">Galley</li>
        <li class="nav-item">Contact</li>
    </ul>
    <button>book a table</button>
</div>
<section class="hero">
    <div class="intro">
        <h1>Enjoy your healthy delicious meal</h1>
        <h2>Treat Yourself</h2>
        <p>Hundreds of flavors under one roof, with a pinch of passion in every dish.</p>
        <p>Another project from <span>odin-project</span></p>
        <button >Explore now</button>
    </div>
    <div class="social-icons">
        <img src="./assets/icons8-whatsapp.svg" alt="whatsapp">
        <img src="./assets/icons8-instagram.svg" alt="instagram">
        <img src="./assets/icons8-facebook.svg" alt="facebook">
        <img src="./assets/icons8-twitter.svg" alt="twitter">
    </div>
</section>
</header> */}