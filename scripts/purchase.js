let userData = JSON.parse(localStorage.getItem("user"))

// console.log(userData.wallet)

document.querySelector("#wallet_balance").innerText = userData.wallet


let purchaseData = JSON.parse(localStorage.getItem("purchase"))

console.log(purchaseData)
append(purchaseData)

function append(data){
    let container = document.querySelector("#purchased_vouchers")
    data.forEach(function(elem){
        // console.log(elem)
        let box = document.createElement("div")
        box.setAttribute("class", 'voucher')

        let image = document.createElement("img")
        image.src = elem.image
        image.setAttribute('class', 'img')

        let name = document.createElement('p')
        name.innerText = elem.name
        name.setAttribute("class", 'voucherName')

        let price = document.createElement('p')
        price.innerText = elem.price
        price.setAttribute("class", 'price')

        box.append(image, name, price)
        container.append(box)
    })
}