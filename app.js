secondsHand = document.querySelector('.seconds-hand');
minutesHand = document.querySelector('.minutes-hand');
hoursHand = document.querySelector('.hours-hand');

function updateClock() {
    let seconds = new Date().getSeconds()*6;
    let minutes = new Date().getMinutes()* 6;
    let hours = new Date().getHours()* 30 + Math.round(minutes / 12);

    // console.log(seconds);
    secondsHand.style.rotate = `${seconds}deg`
    minutesHand.style.rotate = `${minutes}deg`
    hoursHand.style.rotate = `${hours}deg`

    setTimeout(()=>{updateClock()}, 1000);
}

updateClock();