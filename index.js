/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(ary) {
    let record;
    return record = {
        firstName: ary[0],
        familyName: ary[1],
        title: ary[2],
        payPerHour: ary[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arys) {
    return arys.map(createEmployeeRecord)
}

// function createDSObj(getType, dateStamp) {
//     return {type: getType, date: dateStamp.slice(0,10), hour: parseInt(dateStamp.slice(-4))}
// }

function createTimeInEvent(dateStamp) {
   const [date, hour] = dateStamp.split(" ");
   this.timeInEvents.push({
       type:"TimeIn",
       hour: parseInt(hour, 10),
       date: date
   });
   return this
}


function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    });
    return this
}

function hoursWorkedOnDate(dateStamp) {
    let timeIn = this.timeInEvents.filter(timeIn => timeIn.date === dateStamp)[0].hour;
    let timeOut = this.timeOutEvents.filter(timeOut => timeOut.date === dateStamp)[0].hour;

    return ((timeOut - timeIn) * .01);
}

function wagesEarnedOnDate(dateStamp) {
    return this.payPerHour * hoursWorkedOnDate.call(this, dateStamp)
    // What does this mean inside a functiona and what is the functionality of the .call method?
}

function findEmployeeByFirstName(sourceArray, firstName) {
    let empRecord = sourceArray.filter(emp => emp.firstName === firstName);

    return !!empRecord[0] ? empRecord[0] : undefined;
    // why do we invoke the 2 exclamation points in the beginning
}
 
function calculatePayroll(empArray) {
    return empArray.reduce((total, wages) => total += allWagesFor.call(wages), 0);
    // what is the purpose of the call method and why we need to invoke the 0
}

// comment