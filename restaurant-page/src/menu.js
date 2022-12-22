import bacon from "./assets/bacon stuffed.jpg"
import lasagna from "./assets/lasagna.jpg"
import pizza from "./assets/adam-smotkin-nv3lL1MzOto-unsplash.jpg"
import ginger from "./assets/johann-trasch-m_7sQR2pDF8-unsplash.jpg"
import mojito from "./assets/wu-yi-9ds9FNzUEwM-unsplash.jpg"
import martini from "./assets/ash-edmonds-fsI-_MRsic0-unsplash.jpg"

export function menu() {
    const content = document.querySelector('.content');
    const sectionMenu = document.createElement('section');
    sectionMenu.classList.add('menu');
    const heading = document.createElement('h2');
    heading.classList.add('title');
    heading.textContent = "Menu";
    const para = document.createElement('p');
    para.classList.add('title-para');
    para.textContent = "Delicious Meals & Drinks";
    const unorderedList = document.createElement('ul');
    unorderedList.classList.add('grid-list');
    const unList = document.createElement('li');
    const menuCardDiv =  document.createElement('div');
    menuCardDiv.classList.add('menu-card');
    const figureImg = document.createElement('figure');
    const baconImg = document.createElement('img');
    baconImg.src = bacon;
    baconImg.alt ="bacon"
    const div = document.createElement('div');
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title-wrapper');
    const heading2 = document.createElement('h3');
    heading2.textContent = "bacon staffed mushroom";
    const spanPrice = document.createElement('span');
    spanPrice.classList.add('title-price');
    spanPrice.innerText = "$20";
    const para2 = document.createElement('p');
    para2.classList.add('card-text');
    para2.textContent = "Delectable stuffed mushrooms with rosemary, bacon, and cheese!";
    const unorderedList2 = document.createElement('ul');
    unorderedList2.classList.add('grid-list');
    const unList2 = document.createElement('li');
    const menuCardDiv2 = document.createElement('div');
    menuCardDiv2.classList.add('menu-card');
    const figureImg2 = document.createElement('figure');
    const lasagnaImg = document.createElement('img');
    lasagnaImg.src = lasagna;
    lasagnaImg.alt ="lasagna"
    const div2 = document.createElement('div');
    const titleDiv2 = document.createElement('div');
    titleDiv2.classList.add('title-wrapper');
    const heading3 = document.createElement('h3');
    heading3.textContent = "lasagna staffed";
    const spanPrice2 = document.createElement('span');
    spanPrice2.classList.add('title-price');
    spanPrice2.innerText = "$30";
    const para3 = document.createElement('p');
    para3.classList.add('card-text');
    para3.textContent = "sweet italian sausage, lean ground beef,ricotta cheese lasagna";
    const unorderedList3 = document.createElement('ul');
    unorderedList3.classList.add('grid-list');
    const unList3 = document.createElement('li');
    const menuCardDiv3 = document.createElement('div');
    menuCardDiv3.classList.add('menu-card');
    const figureImg3 = document.createElement('figure');
    const pizzaImg = document.createElement('img');
    pizzaImg.src = pizza;
    pizzaImg.alt = "pizza"
    const div3 = document.createElement('div');
    const titleDiv3 = document.createElement('div');
    titleDiv3.classList.add('title-wrapper');
    const heading4 = document.createElement('h3');
    heading4.textContent = "Pizza";
    const spanPrice3 = document.createElement('span');
    spanPrice3.classList.add('title-price');
    spanPrice3.innerText = "$50";
    const para4 = document.createElement('p');
    para4.classList.add('card-text');
    para4.textContent = "sweet italian onion pizza with little of seasoning";
    const unorderedList4 = document.createElement('ul');
    unorderedList4.classList.add('grid-list');
    const unList4 = document.createElement('li');
    const menuCardDiv4 = document.createElement('div');
    menuCardDiv4.classList.add('menu-card');
    const figureImg4 = document.createElement('figure');
    const gingerImg = document.createElement('img');
    gingerImg.src = ginger;
    gingerImg.alt = "ginger";
    const div4 = document.createElement('div');
    const titleDiv4 = document.createElement('div');
    titleDiv4.classList.add('title-wrapper');
    const heading5 = document.createElement('h3');
    heading4.textContent = "ginger hibiscus";
    const spanPrice4 = document.createElement('span');
    spanPrice4.classList.add('title-price');
    spanPrice4.innerText = "$50";
    const para5 = document.createElement('p');
    para5.classList.add('card-text');
    para5.textContent = "Ginger ale, sparkling white wine,lemon dried hibiscus";
    const unorderedList5 = document.createElement('ul');
    unorderedList5.classList.add('grid-list');
    const unList5 = document.createElement('li');
    const menuCardDiv5 = document.createElement('div');
    menuCardDiv5.classList.add('menu-card');
    const figureImg5 = document.createElement('figure');
    const mojitoImg = document.createElement('img');
    mojitoImg.src = mojito;
    mojitoImg.alt = "mojito"
    const div5 = document.createElement('div');
    const titleDiv5 = document.createElement('div');
    titleDiv5.classList.add('title-wrapper');
    const heading6 = document.createElement('h3');
    heading6.textContent = "Mojito";
    const spanPrice5 = document.createElement('span');
    spanPrice5.classList.add('title-price');
    spanPrice5.innerText = "$20";
    const para6 = document.createElement('p');
    para6.classList.add('card-text');
    para6.textContent = "Cuban punch, Mojito made with citrus, and herbaceous mint flavors";
    const unorderedList6 = document.createElement('ul');
    unorderedList6.classList.add('grid-list');
    const unList6 = document.createElement('li');
    const menuCardDiv6 = document.createElement('div');
    menuCardDiv6.classList.add('menu-card');
    const figureImg6 = document.createElement('figure');
    const martiniImg = document.createElement('img');
    martiniImg.src = martini;
    martiniImg.alt = "martini"
    const div6 = document.createElement('div');
    const titleDiv6 = document.createElement('div');
    titleDiv6.classList.add('title-wrapper');
    const heading7 = document.createElement('h3');
    heading7.textContent = "Martini";
    const spanPrice6 = document.createElement('span');
    spanPrice6.classList.add('title-price');
    spanPrice6.innerText = "$30";
    const para7 = document.createElement('p');
    para7.classList.add('card-text');
    para7.textContent = "Dirty Martini made with gin, vermouth and a lemon twist";

    content.appendChild(sectionMenu);
    sectionMenu.appendChild(heading);
    sectionMenu.appendChild(para);
    sectionMenu.appendChild(unorderedList);
    unorderedList.appendChild(unList);
    unList.appendChild(menuCardDiv);
    menuCardDiv.appendChild(figureImg);
    figureImg.appendChild(baconImg);
    menuCardDiv.appendChild(div);
    div.appendChild(titleDiv);
    titleDiv.appendChild(heading2);
    titleDiv.appendChild(spanPrice);
    div.appendChild(para2);
    sectionMenu.appendChild(unorderedList2);
    unorderedList2.appendChild(unList2);
    unList2.appendChild(menuCardDiv2);
    menuCardDiv2.appendChild(figureImg2);
    figureImg2.appendChild(lasagnaImg);
    menuCardDiv2.appendChild(div2);
    div2.appendChild(titleDiv2);
    titleDiv2.appendChild(heading3);
    titleDiv2.appendChild(spanPrice2);
    div2.appendChild(para3);
    sectionMenu.appendChild(unorderedList3);
    unorderedList3.appendChild(unList3);
    unList3.appendChild(menuCardDiv3);
    menuCardDiv3.appendChild(figureImg3);
    figureImg3.appendChild(pizzaImg);
    menuCardDiv3.appendChild(div3);
    div3.appendChild(titleDiv3);
    titleDiv3.appendChild(heading4);
    titleDiv3.appendChild(spanPrice3);
    div3.appendChild(para4);
    sectionMenu.appendChild(unorderedList4);
    unorderedList4.appendChild(unList4);
    unList4.appendChild(menuCardDiv4);
    menuCardDiv4.appendChild(figureImg4);
    figureImg4.appendChild(gingerImg);
    menuCardDiv4.appendChild(div4);
    div4.appendChild(titleDiv4);
    titleDiv4.appendChild(heading5);
    titleDiv4.appendChild(spanPrice4);
    div4.appendChild(para5);
    sectionMenu.appendChild(unorderedList5);
    unorderedList5.appendChild(unList);
    unList5.appendChild(menuCardDiv5);
    menuCardDiv5.appendChild(figureImg5);
    figureImg5.appendChild(mojitoImg);
    menuCardDiv5.appendChild(div5);
    div5.appendChild(titleDiv5);
    titleDiv5.appendChild(heading6);
    titleDiv5.appendChild(spanPrice5);
    div5.appendChild(para6);
    sectionMenu.appendChild(unorderedList6);
    unorderedList6.appendChild(unList);
    unList6.appendChild(menuCardDiv6);
    menuCardDiv6.appendChild(figureImg6);
    figureImg6.appendChild(martiniImg);
    menuCardDiv6.appendChild(div6);
    div6.appendChild(titleDiv6);
    titleDiv6.appendChild(heading7);
    titleDiv6.appendChild(spanPrice6);
    div6.appendChild(para7);

    return content;
};

document.body.appendChild(menu());

{/* <section class="menu">
<h2 class="title">Menu</h2>
<p class="title-para">Delicious Meals & Drinks</p>
<ul class="grid-list">
    <li>
        <div class="menu-card">
            <figure>
                <img src="./assets/bacon stuffed.jpg" alt="bacon">
            </figure>
            <div>
                <div class="title-wrapper">
                    <h3>bacon staffed mushroom</h3>
                    <span class="title-price">
                        $20
                    </span>
                </div>
                <p class="card-text">Delectable stuffed mushrooms with rosemary, bacon, and cheese!</p>
            </div>
        </div>
    </li>
    <li>
        <div class="menu-card">
            <figure>
                <img src="./assets/lasagna.jpg" alt="lasagna">
            </figure>
            <div>
                <div class="title-wrapper">
                    <h3>lasagna staffed</h3>
                    <span class="title-price">
                        $30
                    </span>
                </div>
                <p class="card-text">sweet italian sausage, lean ground beef,ricotta cheese lasagna</p>
            </div>
        </div>
    </li>
    <li><div class="menu-card">
        <figure>
            <img src="./assets/adam-smotkin-nv3lL1MzOto-unsplash.jpg" alt="pizza">
        </figure>
        <div>
            <div class="title-wrapper">
                <h3>Pizza</h3>
                <span class="title-price">
                    $50
                </span>
            </div>
            <p class="card-text">sweet italian onion pizza with little of seasoning</p>
        </div>
    </div></li>
    <li><div class="menu-card">
        <figure>
            <img src="./assets/johann-trasch-m_7sQR2pDF8-unsplash.jpg" alt="ginger-hibiscus">
        </figure>
        <div>
            <div class="title-wrapper">
                <h3>ginger hibiscus </h3>
                <span class="title-price">
                    $25
                </span>
            </div>
            <p class="card-text">Ginger ale, sparkling white wine,lemon dried hibiscus</p>
        </div>
    </div></li>
    <li><div class="menu-card">
        <figure>
            <img src="./assets/wu-yi-9ds9FNzUEwM-unsplash.jpg" alt="mojito">
        </figure>
        <div>
            <div class="title-wrapper">
                <h3>Mojito</h3>
                <span class="title-price">
                    $20
                </span>
            </div>
            <p class="card-text">Cuban punch, Mojito made with citrus, and herbaceous mint flavors</p>
        </div>
    </div></li>
    <li><div class="menu-card">
        <figure>
            <img src="./assets/ash-edmonds-fsI-_MRsic0-unsplash.jpg" alt="martini">
        </figure>
        <div>
            <div class="title-wrapper">
                <h3>Dirty Martini</h3>
                <span class="title-price">
                    $30
                </span>
            </div>
            <p class="card-text">Dirty Martini made with gin, vermouth and a lemon twist</p>
        </div>
    </div></li>
</ul>
</section> */}