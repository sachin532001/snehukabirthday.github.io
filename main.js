let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let countDown = () => {
    // let futureDate = new Date("12 aug 2021");
    // let newDate = new Date(year, month, date, hours, minutes, seconds, milliseconds);
    let futureDate = new Date(2021, 7, 12, 0, 0, 0, 0);
    let currentDate = new Date();
    let myDate = futureDate - currentDate;
    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);

    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;

    let min = Math.floor(myDate / 1000 / 60) % 60;

    let sec = Math.floor(myDate / 1000) % 60;

    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;

    if (days<=0&&hours<=0&&min<=0&&sec<=0 ) {
        location.replace("page_3.html");
    }
}

countDown()

setInterval(countDown, 1000)