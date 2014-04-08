/**
 * Adds minutes to a time provided
 * @param {string} time - String time [H}H:MM A
 * @param {Number} minutes - Number of Minutes to add
 * @return {string} newTime - The new time
 */
function addMinutes(time,minutes){
    var period;
    var today = new Date()
    var t = new Date( today.toDateString() + ' ' + time )
    var newTime = new Date(t.getTime() + minutes*60000).toTimeString()
    // Just get the time
    newTime = newTime.split(' ');
    newTime = newTime[0].split(':');
    // Remove Seconds
    newTime.pop();
    if(Number(newTime[0]) > 11){
        newTime[0] = Number(newTime[0]) - 12
        period = "PM";
    } else{
        newTime[0] = parseInt(Number(newTime[0]), 10)
        period = "AM"
    }
    if(Number(newTime[0]) == 0)
        newTime[0] = 12
    return newTime.join(":") + " " + period
}
