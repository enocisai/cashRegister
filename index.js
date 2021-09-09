//* CASH REGISTER //

let itemsPrice = [50, 50]

function registerCash(itemsPrice, payment) {
  
    let total = 0
    for(let i of itemsPrice) total += i;

    if(payment === total) return "NOT CHANGE BACK"
    if(payment < total) return "Need more money"
    if(payment > total) return "take your change, " + (payment - total) + " dollars" 

}

console.log("result:",registerCash(itemsPrice, 10))