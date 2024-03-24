const url='https://meme-api.com/gimme/wholesomememes';



const btn=document.querySelector(".btn");
const image= document.querySelector(".imge img");
const title=document.querySelector(".title");

async function tooos(){
    let response=  await fetch(url);
    // console.log(response);
    let data=await response.json();
    
    // console.log(data);
    image.src=data.url;
    
    title.innerText=data.title;
    
}
tooos();

btn.addEventListener("click", ()=>{
    tooos();
})