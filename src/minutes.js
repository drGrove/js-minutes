/**
 * Adds minutes to a time provided
 * @param {string} time - String time [H}H:MM A
 * @param {Number} minutes - Number of Minutes to add
 * @return {string} newTime - The new time
 */
function addMinutes(time,minutes){
    var period, newTime
    time = time.split(' ')
    period = time[1]
    newTime = time[0].split(':')
    if(period == "PM")
        newTime[0] = Number(newTime[0]) + 12
    
    var timeAsMinutes = (Number(newTime[0]) * 60) + Number(newTime[1]) + minutes;
    var timeAsDecimal = Number(timeAsMinutes) / 60;
    var reconvertedTime = timeAsDecimal.toString().split('.');
    var hours = Number(reconvertedTime[0]);
    var minutes = Number("." + reconvertedTime[1]) * 60;
    var finalTime = [hours, Math.round(minutes)];
    if(Number(finalTime[1]) > 60){
        finalTime[0] = Number(finalTime[0]) + (Number(finalTime[1]) / 60)
        finalTime[1] = (Number(finalTime[0]) % 60) + Number(finalTime[1])
    }
    if(Number(finalTime[0]) >= 12){
        finalTime[0] = Number(finalTime[0]) - 12
        period = period == "PM" ? "AM" : "PM"
    }else{
        finalTime[0] = parseInt(Number(finalTime[0]), 10)
    }
    if(Number(finalTime[0]) == 0){
        finalTime[0] = 12
        period = "PM"
    }
    return finalTime.join(":") + " " + period
}
