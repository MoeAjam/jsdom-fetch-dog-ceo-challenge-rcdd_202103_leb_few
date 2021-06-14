console.log('%c HI', 'color: firebrick');
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
document.addEventListener('DOMContentLoaded', run);
function run() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  const letter = document.getElementById("breed-dropdown");
  fetch(imgUrl)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    console.log(json);
    let images = document.getElementById("dog-image-container");
    for (let i=0;i<4;i++){
    images.insertAdjacentHTML('beforeend', `<img src="${json.message[i]}">`);
  }
  });
fetch(breedUrl)
.then(function(response){
  return response.json();
})
.then(function(json){
  console.log(json);
  console.log(json.message.length);
  let breeds = document.getElementById("dog-breeds");
  for (const key in json.message){
    breeds.insertAdjacentHTML('beforeend',`<li>${key}</li>`);
  }
  letter.addEventListener('changed', filter);
  function filter(){
    for (const key in json.message){
      if(key[0] === letter.value){
      breeds.insertAdjacentHTML('beforeend',`<li>${key}</li>`);
    }
  }

  }

});


}
