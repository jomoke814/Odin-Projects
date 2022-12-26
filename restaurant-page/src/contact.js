export function contact() {
    const content =  document.querySelector('.content');
    const sectContact = document.createElement('section');
    sectContact.classList.add('contact');
    const heading = document.createElement('h2');
    heading.classList.add('title');
    heading.textContent = "Contact"
    const para = document.createElement('p');
    para.classList.add('contact-text');
    para.textContent = "Feel free to contact us or make a Reservation with us."
    const divContainer = document.createElement('div');
    divContainer.classList.add('contact-container');
    const contactForm = document.createElement('form');
    contactForm.classList.add('form-left');
    const para1 = document.createElement('p');
    para1.classList.add('form-text');
    para1.textContent = "Online Reservation";
    const divWrapper = document.createElement('div');
    divWrapper.classList.add('input-wrapper');
    const inputYourName = document.createElement('input');
    inputYourName.type = "text";
    inputYourName.name = "name";
    inputYourName.placeholder = "Your name";
    const inputPhoneNumber = document.createElement('input');
    inputPhoneNumber.type = "text";
    inputPhoneNumber.name = "phone";
    inputPhoneNumber.placeholder = "Phone Number";
    const divWrapperInput = document.createElement('div');
    divWrapperInput.classList.add('wrapper-input');
    const selectOptions = document.createElement('select');
    selectOptions.name = "person";
    const optionselect = document.createElement('option');
    optionselect.value = "1";
    optionselect.innerText = "1 Person";
    const optionselect1 = document.createElement('option');
    optionselect1.value = "2";
    optionselect1.innerText = "2 Person";
    const optionselect2 = document.createElement('option');
    optionselect2.value = "3";
    optionselect2.innerText = "3 Person";
    const optionselect3 = document.createElement('option');
    optionselect3.value = "4";
    optionselect3.innerText = "4 Person";
    const optionselect4 = document.createElement('option');
    optionselect4.value = "5";
    optionselect4.innerText = "5 Person";
    const inputReservationDate = document.createElement('input');
    inputReservationDate.type = "date";
    inputReservationDate.name = "name";
    const selectTime = document.createElement('select');
    selectTime.name = "Time";
    const optionTime = document.createElement('option');
    optionTime.value = "8am";
    const optionTime1 = document.createElement('option');
    optionTime1.value = "9am";
    const optionTime2 = document.createElement('option');
    optionTime2.value = "10am";
    const optionTime3 = document.createElement('option');
    optionTime3.value = "11am";
    const optionTime4 = document.createElement('option');
    optionTime4.value = "12noon";
    const optionTime5 = document.createElement('option');
    optionTime5.value = "13pm";
    const optionTime6 = document.createElement('option');
    optionTime6.value = "14pm";
    const optionTime7 = document.createElement('option');
    optionTime7.value = "15pm";
    const optionTime8 = document.createElement('option');
    optionTime8.value = "16pm";
    const optionTime9 = document.createElement('option');
    optionTime9.value = "17pm";
    const optionTime10 = document.createElement('option');
    optionTime10.value = "18pm";
    const optionTime11 = document.createElement('option');
    optionTime11.value = "19pm";
    const optionTime12 = document.createElement('option');
    optionTime12.value = "20pm";
    const optionTime13 = document.createElement('option');
    optionTime13.value = "21pm";
    const optionTime14 = document.createElement('option');
    optionTime14.value = "22pm";
    const textMessage = document.createElement('textarea');
    textMessage.name = "message";
    textMessage.cols = "50";
    textMessage.rows = "10";
    const submitBtn = document.createElement('button');
    submitBtn.type = "submit";
    submitBtn.innerText = "Book Reservation"
    const formRight = document.createElement('div');
    formRight.classList.add('form-right');
    const heading2 = document.createElement('h2');
    heading2.classList.add('form-text');
    heading2.textContent = "Contact Us"
    const para2 = document.createElement('p');
    para2.classList.add('right-text')
    para2.textContent = "+254797801265"
    const para3 = document.createElement('p');
    para3.classList.add('right-text')
    para3.textContent= "Location: Flavor City"
    const addressForm = document.createElement('address');
    const aTag = document.createElement('a');
    aTag.href = "mailto:cater814@gmail.com"
    aTag.innerText = "cater814@gmail.com"
    addressForm.textContent = "Cater Reservation, @flavor City<br>Yuko land."
    const sectFooter = document.createElement('footer');
    sectFooter.classList.add('attribution');
    sectFooter.textContent = "© 2022 Cater Restaurant. All Rights Reserved | code by John Omoke.";

    content.appendChild(sectContact);
    sectContact.appendChild(heading);
    sectContact.appendChild(para);
    sectContact.appendChild(divContainer);
    divContainer.appendChild(contactForm);
    contactForm.appendChild(para1);
    contactForm.appendChild(divWrapper);
    divWrapper.appendChild(inputYourName);
    divWrapper.appendChild(inputPhoneNumber);
    contactForm.appendChild(divWrapperInput);
    divWrapperInput.appendChild(selectOptions);
    selectOptions.appendChild(optionselect);
    selectOptions.appendChild(optionselect1);
    selectOptions.appendChild(optionselect2);
    selectOptions.appendChild(optionselect3);
    selectOptions.appendChild(optionselect4);
    divWrapperInput.appendChild(inputReservationDate);
    divWrapperInput.appendChild(selectTime);
    selectTime.appendChild(optionTime);
    selectTime.appendChild(optionTime1);
    selectTime.appendChild(optionTime2);
    selectTime.appendChild(optionTime3);
    selectTime.appendChild(optionTime4);
    selectTime.appendChild(optionTime5);
    selectTime.appendChild(optionTime6);
    selectTime.appendChild(optionTime7);
    selectTime.appendChild(optionTime8);
    selectTime.appendChild(optionTime9);
    selectTime.appendChild(optionTime10);
    selectTime.appendChild(optionTime11);
    selectTime.appendChild(optionTime12);
    selectTime.appendChild(optionTime13);
    selectTime.appendChild(optionTime14);
    contactForm.appendChild(textMessage);
    contactForm.appendChild(submitBtn);
    divContainer.appendChild(formRight);
    formRight.appendChild(heading2);
    formRight.appendChild(para2);
    formRight.appendChild(para3);
    formRight.appendChild(addressForm);
    addressForm.appendChild(aTag);
    content.appendChild(sectFooter);

    return content;
}


{/* <section class="contact">
            <h2 class="title">contact</h2>
            <p class="contact-text">Feel free to <span>contact us</span>  or make a <span>Reservation</span>  with us.</p>
            <div class="contact-container">
                <form action="" class="form-left">
                    <p class="form-text">Online Reservation</p>
                    <div class="input-wrapper">
                        <input type="text" name="name" placeholder="Your Name">
                        <input type="text" name="phone" placeholder="phone number">
                    </div>
                    <div class="wrapper-input">
                        <select name="person" class="input-field">
                            <option value="1">1 person</option>
                            <option value="2">2 person</option>
                            <option value="3">3 person</option>
                            <option value="4">4 person</option>
                            <option value="5">5 person</option>
                        </select>
                        <input type="date" name="reservation-date" class="input-field">
                        <select name="time" class="input-field">
                            <option value="8am">8am</option>1
                            <option value="9am">9am</option>2
                            <option value="10am">10am</option>3
                            <option value="11am">11am</option>4
                            <option value="12noon">12noon</option>5
                            <option value="13pm">13pm</option>6
                            <option value="14pm">14pm</option>7
                            <option value="15pm">15pm</option>8
                            <option value="16pm">16pm</option>9
                            <option value="17pm">17pm</option>10
                            <option value="18pm">18pm</option>11
                            <option value="19pm">19pm</option>12
                            <option value="20pm">20pm</option>13
                            <option value="21pm">21pm</option>14
                            <option value="22pm">22pm</option>15
                        </select>
                    </div>
                    <textarea name="message" class="input-field" cols="50" rows="10"></textarea>
                    <button type="submit">Book Reservation</button>
                </form>
                <div class="form-right">
                    <h2 class="form-text">Contact Us</h2>
                    <p class="right-text">+254797801265</p>
                    <p class="right-text">Location: Flavor City</p>
                    <address>
                        <a href="mailto:cater814@gmail.com">cater814@gmail.com</a>
                         Cater Reservation, @flavor City
                        <br>
                         Yuko land.
                    </address>
                </div>
            </div>
        </section>
        <footer class="attribution">
            © 2022 Cater Restaurant. All Rights Reserved | code by John Omoke.
        </footer> */}