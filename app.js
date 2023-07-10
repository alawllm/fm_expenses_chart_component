const json = `[
    {
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
]`

let jsonArr = JSON.parse(json)

//finding the max amount
let maxAmount = 0;
for (let i = 0; i < jsonArr.length; i++) {
    const amount = jsonArr[i].amount
    if (amount > maxAmount) {
        maxAmount = amount;
    }
}

//setting bar height
//choosing bar, in dom 
for (let i = 0; i < jsonArr.length; i++) {
    const amount = jsonArr[i].amount;
    let barHeight = (amount / maxAmount) * 150
    //assigning height to the given days
    const bar = document.querySelector(`#${jsonArr[i].day}`)
    bar.style.height = `${barHeight}px`
    //assigning correct amount to the bar elements in html through dataset
    bar.dataset.amount = `${amount}$`
    console.log(bar.dataset.amount)
}



//finding current day of the week
const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const currentDate = new Date;
const currentDay = currentDate.getDay();
const currentDayName = daysOfWeek[currentDay]
console.log(currentDayName)

//setting custom color for the current day of the week
const activeBar = document.getElementById(`${currentDayName}`)
activeBar.classList.add('active-bar')

//showing current amount upon hovering on a given day

