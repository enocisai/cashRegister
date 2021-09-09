//* CASH REGISTER //

let itemsPrice = [50, 50]

function registerCash(itemsPrice, payment) {
  
    let total = 0
    for(let i of itemsPrice) total += i;

    if(payment === total) return "NOT CHANGE BACK"
    if(payment < total) return "NEED MORE MONEY"
    if(payment > total) return "TAKE YOUR CHANGE, " + (payment - total) + " DOLLARS" 

}

console.log("result:",registerCash(itemsPrice, 10))