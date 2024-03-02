let btn = document.getElementById("btn");
let cardtext = document.getElementById("cardtext");
let cardtitle = document.getElementById("cardtitle");
let card = document.getElementById("card");

btn.addEventListener("click", function () {

    let input = document.getElementById("input").value;

    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
                      

    fetch(`${url}${input}`)
        .then((response) => response.json()
        .then((data) => {
            console.log(data)
                         card.innerHTML =`<div class="input-group flex-nowrap">
    
                         <input type="text" id="input" class="form-control" placeholder="enter words">
                         <a href="#" id="btn" class="btn btn-primary">Go</a>
                       </div>
                   <h5 class="card-title" id="cardtitle">${input}</h5>
                   <p class="card-text" id="cardtext">${data[0].meanings[0].partofspeech}</p>
               `
        }))

        
 });       
//   input.innerHTML=""
   

