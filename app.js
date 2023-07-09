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

console.log(jsonArr[0].amount)
console.log(jsonArr[3].day)


//finding the max amount
let maxAmount = 0;
for (let i = 0; i < jsonArr.length; i++) {
    console.log(jsonArr[i].amount)
    console.log(jsonArr[i].day)
    const amount = jsonArr[i].amount
    if (amount > maxAmount) {
        maxAmount = amount;
    }
}

console.log(maxAmount)
//setting bar height
//choosing bar, in dom etc
for (let i = 0; i < jsonArr.length; i++) {
    const amount = jsonArr[i].amount;
    let barHeight = (amount / maxAmount) * 150
    console.log(barHeight)

    const bar = document.querySelector(`#${jsonArr[i].day}`)
    bar.style.height = `${barHeight}px`
}

//setting custom color for the current day of the week

console.log(maxAmount)





// function makeBars(jsonData) {
//     //find the max height for the bar
//     //specify the ratio - amount / max amount
//     //iterate over json array, set the height of the bars
//     //find current date, highlight it with a different color
//     let maxAmount = 0;


// }


