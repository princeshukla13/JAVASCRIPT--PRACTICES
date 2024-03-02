const url = "https://meme-api.com/gimme";
// let img = document.getElementsByClassName("card-img-top")[0];
let memetext = document.getElementsByClassName("card-text")[0]; // Assuming you want to update the first element with class "card-text"
let btn = document.getElementById("btn");
let card =document.getElementById("card")

async function meme() {
   
        const response = await fetch(url);
       
        const memedata = await response.json();
        console.log(memedata);
        // Now you can update your UI with the meme data
      
        if (card.querySelector(".card-img-top")) {
            card.querySelector(".card-img-top").remove();
        }
        const memeImage = document.createElement('img');
        memeImage.src = memedata.url;
        memeImage.classList.add('card-img-top'); // Add class if needed
        memeImage.alt = 'Meme Image';
        //  card.appendChild(memeImage)
         card.insertBefore(memeImage, card.firstChild);
            
                // let imgs =new Image()
                // img.src = memedata.url
    
}

btn.addEventListener("click", meme);
