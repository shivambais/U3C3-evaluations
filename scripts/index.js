// Store the wallet amount to your local storage with key "amount"

let amountH1= localStorage.getItem("amount") || 0 ;
document.querySelector("#wallet").innerText= amountH1 ;

function addMoney(){
    let amount= document.querySelector("#amount").value ;

    let getAmount= localStorage.getItem("amount") || 0 ;
    let setlAmount= Number(getAmount) + Number(amount) ;

    localStorage.setItem("amount",setlAmount);
    
    
    // let amountH1L= localStorage.getItem("amount") || 0 ;
document.querySelector("#wallet").innerText= setlAmount ;
}

