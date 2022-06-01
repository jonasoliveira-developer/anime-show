const baseUrl = "https://kitsu.io/api/edge"
let slideImg = document.querySelector(".slide")
let margin = 100
let cardItem = document.querySelector(".card")
let inputPesquisar = document.querySelector("#pesquisar")
let limit = 20


setInterval(() => {
    
    slideImg.style.marginLeft = `${-margin}vw`
    margin+= 100
    if(margin > 400) {
        margin = 0
        
    }
},3500)



const pesquisar = () => {
    let texto = inputPesquisar.value
 const res =  fetch(`${baseUrl}/anime?filter[text]=${texto}?[limit]=${limit}`)
    .then(response => {
        return response.json()
}).then(json => {
    listarTodos(json.data)


})
   
   }

   const listarTodos = (json) => {
       json.map((anime) => {
           cardItem.innerHTML +=`  <div class="card-item">
           <h4>${anime.attributes.canonicalTitle}</h4>
           <div class="img">
               <img src="${anime.attributes.posterImage.small}" alt="${anime.attributes.canonicalTitle}">
           </div>
            `

       })
   }
  

