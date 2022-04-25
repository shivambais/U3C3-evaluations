// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page


// Api key:   e0ab5b80
// Url s:  `https://www.omdbapi.com/?apikey=e0ab5b80&t&s=${title}`
// url t: `https://www.omdbapi.com/?apikey=e0ab5b80&t&t=${title}`


let amountH1new= localStorage.getItem("amount") || 0 ;
document.querySelector("#wallet").innerText= amountH1new ;

function main(){
    getTitleDetails();
}

async function getTitleDetails(){
   
    try{
        let title= document.querySelector("#search").value;
        let url= `https://www.omdbapi.com/?apikey=e0ab5b80&t&s=${title}`
    
        let res= await fetch(url);
    
        let data= await  res.json();
       

        let reqData= data.Search;
        // console.log(reqData);

        // appendTitleDetails(reqData);

        if(reqData != undefined){
            // console.log("error Occured 0000")
            appendTitleDetails(reqData);
            
        }
        // else{
        //     console.log("error Occured 0000")
        // }
    }
    catch{
        console.log("error Occured")
    }
}

function appendTitleDetails(data){

    document.querySelector("#movies").innerHTML= null;

    data.forEach(function(ele){

        let box= document.createElement("div");
        box.setAttribute("id","boxID");

        let image= document.createElement("img");
        image.src= ele.Poster;
        image.setAttribute("id","imageID");

        let title= document.createElement("p");
        title.innerText= ele.Title;

        let button= document.createElement("button");
        button.setAttribute("class","book_now");
        button.innerHTML= `<a href="./checkout.html">book now</a>` ;
        button.addEventListener("click",function(){
            addMovieToLocalStorage(ele);
        })

        box.append(image,title,button);
        document.querySelector("#movies").append(box);
    })
}

function  addMovieToLocalStorage(ele){
    let selectedShow= ele;
    localStorage.setItem("movie",JSON.stringify(selectedShow));
    // window.location.href= "./checkout.html"
}

let id;

function debounce(fun,time)
{
    if(id){
        clearTimeout(id);
    }

   id= setTimeout(fun,time);
}
