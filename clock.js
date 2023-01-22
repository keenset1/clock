
    var time = document.querySelector('.time');
    var date_time = document.querySelector('.date_time');


    function updateclock(){
    // get the current time, date,monthand year
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var day = now.getDay();
    var date = now.getDate();
    var month = now.getMonth();
    var year = now.getFullYear();
    console.log(year);
    
    var daynames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var monthnames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    hours = hours % 24 || 24;
    minutes =(minutes < 10) ? "0" + minutes : minutes;
    seconds= (seconds< 10) ? "0" + seconds : seconds;
    date = (date< 10) ? "0" + date: date;



    var period = (hours < 24) ? "PM" : "AM";
    var le  =  hours + ":" + minutes + ":" + seconds + " " ;
    console.log(le);
    document.getElementById("clockdisplay").innerText = le;
    var jou = daynames[day] + "," + monthnames[month] + " "+ date + "," + year;
    console.log(jou);
    document.getElementById("date_time").innerText = jou;
    }

    updateclock()
    setInterval(updateclock,1000);
