//Set date to count down to
const oneWeekFromNow = new Date();
oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);

//Update count every second
const x = setInterval(function () {

    //get today's date and time
    const now = new Date().getTime();

    //find difference between now and count down date

    const difference = oneWeekFromNow - now;

    //time calculation for days hours minutes
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    //display results in id="countdown"
    document.getElementById("countdown").innerHTML = days + "d "+ hours+ "h " + minutes + "m " + seconds + "s";

    //if count is finnished write some text
    if (difference < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);
