//UC 1 IF ELSE CONDITION

{
    const isAbsent = 0;
    let empCheck = Math.floor(Math.random() * 10) % 2;

    if (empCheck == isAbsent) {
        console.log("Employee is Absent");
    } else {
        console.log("Employee is Present");
    }
}

//UC 2 SWITCH CASE
function getWorkingHours{

    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;

    let empHrs = 0;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    switch (empCheck) {
        case IS_PART_TIME:
            empHrs = PART_TIME_HOURS;
            break;

        case IS_FULL_TIME:
            empHrs = FULL_TIME_HOURS;
            break;

        default:
            empHrs = 0;
    }

    let empWage = empHrs * WAGE_PER_HOUR;
    console.log('wage of the employee: ' + empWage);

}

