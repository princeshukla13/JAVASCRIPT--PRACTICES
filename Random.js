const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
let cardt = document.getElementById("cardt");
let cardtext =document.getElementById("cardtext");
let btn1 = document.getElementById("btn1");

              const jokes = ()=>{
                    fetch(url)
                        .then(response => response.json())
                        .then(data => {
                             cardt.innerHTML = `${data.category}`;
                            
                             cardtext.innerHTML = `${data.joke}`; 
                    });
              }
              btn1.addEventListener("click", jokes)
              jokes();