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

function createEmployeeRecord(array) {
    let newEmployee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return newEmployee
}

function createEmployeeRecords(arrays) {
    return arrays.map(a => createEmployeeRecord(a))
}

function createTimeInEvent(dateStamp) {
    let dateTimeSplit = dateStamp.split(" ")
    let newTimeIn = {
        type: "TimeIn",
        hour: parseInt(dateTimeSplit[1], 10),
        date: dateTimeSplit[0]
    }
    this.timeInEvents.push(newTimeIn)
    return this
}

function createTimeOutEvent(dateStamp) {
    let dateTimeSplit = dateStamp.split(" ")
    let newTimeOut = {
        type: "TimeOut",
        hour: parseInt(dateTimeSplit[1], 10),
        date: dateTimeSplit[0]
    }
    this.timeOutEvents.push(newTimeOut)
    return this
}

function hoursWorkedOnDate(dateStamp) {
    let timeIn = this.timeInEvents.filter(time => time.date === dateStamp.split(" ")[0])[0].hour
    let timeOut = this.timeOutEvents.filter(time => time.date === dateStamp.split(" ")[0])[0].hour
    return (timeOut - timeIn)/100
}

function wagesEarnedOnDate(dateStamp) {
    let hoursWorked = hoursWorkedOnDate.call(this, dateStamp)
    return hoursWorked * this.payPerHour
}

// function payrollExpense() {

// }

function calculatePayroll(array) {
    return array.map(e => allWagesFor.call(e)).reduce((accum, curr) => accum + curr)
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(e => e.firstName === firstName)
}