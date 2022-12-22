import lunchFood from "./assets/ella-olsson-yb6bm_66Jdk-unsplash.jpg"
import birthDay from "./assets/andrea-mininni-VLlkOJdzLG0-unsplash.jpg"
import weddingDay from "./assets/arjun-mj-UEeiZeKFlks-unsplash.jpg"

export function events() {
    const content = document.querySelector('.content');
    const sectEvents = document.createElement('section');
    const heading = document.createElement('h2');
    const para = document.createElement('p');
    const eventGrid =  document.createElement('ul');
    eventGrid.classList.add('grid-event');
    const list = document.createElement('li');
    const divEvent = document.createElement('div');
    divEvent.classList.add('event-card');
    const ImgEvent = document.createElement('img');
    ImgEvent.src = lunchFood;
    ImgEvent.alt = "food";
    const para1 = document.createElement('p');
    para1.classList.add('text-event')
    para1.textContent = "Food lunch event";
    const eventGrid2 =  document.createElement('ul');
    const list1 = document.createElement('li');
    const divEvent1 = document.createElement('div');
    divEvent1.classList.add('event-card');
    const ImgEvent1 = document.createElement('img');
    ImgEvent1.src = birthDay;
    ImgEvent1.alt = "Birthday";
    const para2 = document.createElement('p');
    para2.classList.add('text-event')
    para2.textContent = "Birthday event"
    const eventGrid3 =  document.createElement('ul');
    const list2 = document.createElement('li');
    const divEvent2 = document.createElement('div');
    divEvent2.classList.add('event-card');
    const ImgEvent2 = document.createElement('img');
    ImgEvent2.src = weddingDay;
    ImgEvent2.alt = "Wedding";
    const para3 = document.createElement('p');
    para3.classList.add('text-event')
    para3.textContent = "Wedding Events"

    content.appendChild(sectEvents);
    sectEvents.appendChild(heading);
    sectEvents.appendChild(para);
    sectEvents.appendChild(eventGrid);
    eventGrid.appendChild(list);
    list.appendChild(divEvent);
    divEvent.appendChild(ImgEvent);
    divEvent.appendChild(para1);
    sectEvents.appendChild(eventGrid2);
    eventGrid.appendChild(list1);
    list1.appendChild(divEvent1);
    divEvent1.appendChild(ImgEvent1);
    divEvent1.appendChild(para2);
    sectEvents.appendChild(eventGrid3);
    eventGrid.appendChild(list2);
    list2.appendChild(divEvent2);
    divEvent2.appendChild(ImgEvent2);
    divEvent2.appendChild(para3);

    return content;
}

document.body.appendChild(events());
{/* <section class="events">
<h2 class="title">Events</h2>
<p class="title-text">Top notch Events</p>
    <ul class="grid-event">
        <li>
            <div class="event-card hover:shine">
                <img src="./assets/ella-olsson-yb6bm_66Jdk-unsplash.jpg" alt="food">
                <p class="text-event">Food lunch event</p>
            </div>
        </li>
        <li>
            <div class="event-card hover:shine">
                <img src="./assets/andrea-mininni-VLlkOJdzLG0-unsplash.jpg" alt="food">
                <p class="text-event">Birthday event</p>
            </div>
        </li>
        <li>
            <div class="event-card hover:shine">
                <img src="./assets/arjun-mj-UEeiZeKFlks-unsplash.jpg" alt="food">
                <p class="text-event">Wedding Events</p>
            </div>
        </li>
    </ul>
</section> */}