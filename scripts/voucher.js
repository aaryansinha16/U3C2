// API : `https://masai-vouchers-api.herokuapp.com/api/vouchers`

let userData = JSON.parse(localStorage.getItem("user"))

console.log(userData.wallet)

document.querySelector("#wallet_balance").innerText = userData.wallet


async function getData(){
    let url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`

    let res = await fetch(url)
    let data = await res.json()

    // console.log(data[0].vouchers)
    append(data[0].vouchers)
}

getData()

function append(data){
    let container = document.querySelector("#voucher_list")
    // container.innerHTML = null
    
    data.forEach(function(elem){
        console.log(elem)
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

        let buyBtn = document.createElement("button")
        buyBtn.setAttribute("class", 'buy_voucher')
        buyBtn.innerText = "Buy"
        buyBtn.addEventListener('click', function(){
            buyFun(elem)
        })

        box.append(image, name, price, buyBtn)
        container.append(box)
    })
}

let purchaseData = JSON.parse(localStorage.getItem("purchase")) || []

function buyFun(el){
    if(userData.wallet >= el.price){
        alert("Hurray! purchase successful")
        userData.wallet = userData.wallet - el.price
        document.querySelector("#wallet_balance").innerText = userData.wallet
        localStorage.setItem("user", JSON.stringify(userData))

        purchaseData.push(el)

        localStorage.setItem("purchase", JSON.stringify(purchaseData))
    }
    else if(userData.wallet < el.price){
        alert("Sorry! insufficient balance")
    }
    window.location.reload()
}