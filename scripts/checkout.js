// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


let amountH1= localStorage.getItem("amount") || 0 ;
document.querySelector("#wallet").innerText= amountH1 ;

function confirmTickets(){
    let walletAmount= localStorage.getItem("amount");

    let ticketsReq= document.querySelector("#number_of_seats").value ;

    if(walletAmount >= (Number(ticketsReq)*100) )
    {
        let newAmount= walletAmount- (Number(ticketsReq)*100);
        localStorage.setItem("amount",newAmount);

       
    document.querySelector("#wallet").innerText= newAmount ;

        alert("Booking successfull!")
    }
    else{
        alert("Insufficient Balance!");
    }

}

let selectedShow= JSON.parse(localStorage.getItem("movie"));

let singleBox = document.createElement("div");

let image= document.createElement("img");
image.src= selectedShow.Poster;
image.setAttribute("id","imageID");

let title= document.createElement("p");
title.innerText= selectedShow.Title;

singleBox.append(image, title)
document.querySelector("#movie").append(singleBox);

