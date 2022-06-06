// console.log('testing')

document.querySelector("#signUp").addEventListener("submit", signUpFun)

function signUpFun(event){
    event.preventDefault()

    let name = document.querySelector("#name").value 
    let email = document.querySelector("#email").value
    let address = document.querySelector("#address").value
    let amount = document.querySelector("#amount").value

    signUpObj = {
        name : signUp.name.value,
        email: signUp.email.value,
        address: signUp.address.value,
        wallet: signUp.amount.value
    }

    console.log(signUpObj)

    localStorage.setItem("user", JSON.stringify(signUpObj))

    window.location.reload()
}