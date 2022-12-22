import galleyImg1 from "./assets/event-1.jpg"
import galleyImg2 from "./assets/event-2.jpg"
import galleyImg3 from "./assets/event-3.jpg"
import galleyImg4 from "./assets/service-1.jpg"
import galleyImg5 from "./assets/service-2.jpg"
import galleyImg6 from "./assets/service-3.jpg"

export function galley() {
    const content = document.querySelector('.content');
    const sectGalley = document.createElement('section');
    sectGalley.classList.add('galley');
    const heading = document.createElement('h3');
    heading.classList.add('title')
    const galleyCard = document.createElement('div');
    galleyCard.classList.add('galley-card');
    const divImage = document.createElement('div');
    divImage.classList.add('image');
    const Image = document.createElement('img');
    Image.src = galleyImg1;
    Image.alt = "galley-img-1";
    const divImage2 = document.createElement('div');
    divImage2.classList.add('image');
    const Image2 = document.createElement('img');
    Image2.src = galleyImg2;
    Image2.alt = "galley-img-2";
    const divImage3 = document.createElement('div');
    divImage3.classList.add('image');
    const Image3 = document.createElement('img');
    Image3.src = galleyImg3;
    Image3.alt = "galley-img-3";
    const divImage4 = document.createElement('div');
    divImage4.classList.add('image');
    const Image4 = document.createElement('img');
    Image4.src = galleyImg4;
    Image4.alt = "galley-img-4";
    const divImage5 = document.createElement('div');
    divImage5.classList.add('image');
    const Image5 = document.createElement('img');
    Image5.src = galleyImg5;
    Image5.alt = "galley-img-5";
    const divImage6 = document.createElement('div');
    divImage6.classList.add('image');
    const Image6 = document.createElement('img');
    Image.src = galleyImg6;
    Image6.alt = "galley-img-6";

    content.appendChild(sectGalley);
    sectGalley.appendChild(heading);
    sectGalley.appendChild(galleyCard);
    galleyCard.appendChild(divImage);
    divImage.appendChild(Image);
    sectGalley.appendChild(galleyCard);
    galleyCard.appendChild(divImage2);
    divImage2.appendChild(Image2);
    sectGalley.appendChild(galleyCard);
    galleyCard.appendChild(divImage3);
    divImage3.appendChild(Image3);
    sectGalley.appendChild(galleyCard);
    galleyCard.appendChild(divImage4);
    divImage4.appendChild(Image4);
    sectGalley.appendChild(galleyCard);
    galleyCard.appendChild(divImage5);
    divImage5.appendChild(Image5);
    sectGalley.appendChild(galleyCard);
    galleyCard.appendChild(divImage6);
    divImage6.appendChild(Image6);

    return content;
}

document.body.appendChild(galley());

{/* <section class="galley">
<h3 class="title">Galley</h3>
<div class="galley-card">
    <div class="image">
        <img src="./assets/event-1.jpg" alt="galley-img-1">
    </div>
    <div class="image">
        <img src="./assets/event-2.jpg" alt="galley-img-2">
    </div>
    <div class="image">
        <img src="./assets/event-3.jpg" alt="galley-img-3">
    </div>
    <div class="image">
        <img src="./assets/service-1.jpg" alt="galley-img-4">
    </div>
    <div class="image">
        <img src="./assets/service-2.jpg" alt="galley-img-5">
    </div>
    <div class="image">
        <img src="./assets/service-3.jpg" alt="galley-img-6">
    </div>
</div>
</section> */}