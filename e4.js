function clock(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let amPm ;
    if (hours/12 <1){
        amPm  = "AM";
        hours = hours;
    }
    else {
        amPm = "PM";
        hours = hours - 12 ; 
    }
    return hours + ":" + minutes + " " + amPm;
}
console.log(clock(new Date));