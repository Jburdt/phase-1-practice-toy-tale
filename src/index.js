let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
      }
    });
  });

  //SUBMIT EVENT LISTENER ON FORM
  document.getElementsByClassName('input-text').addEventListener('submit', handleSubmit)
    
  //DELETE
  // "id": 1,
  //     "name": "Woody",
  //     "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
  //     "likes": 31
  
  //EVENT HANDLER
  function handleSubmit(e) {
    e.preventDefault()
    let toyObj = {
      name: e.target.value
      image: e.target.image.value
      likes. e.target.value
    }
    renderOneToy(toyObj)
    toyInput(toyObj)
  }

  
  
  //Fetch request to get all toys
  function getToys() {
  fetch('http://localhost:3000/toys')
    .then(res => res.json())
    .then(toys => toys.forEach(toy => renderOneToy(toy)))
  }

  //INITIAL RENDER
  //GETS DATA AND RENDERS OUR TOYS TO THE DOM
  function initialize() {
  getToys()
  }
    initialize()


  // RENDER FUNCTION
  function renderOneToy(toy) {
  // BUILD TOY
    let card = document.createElement('div')
    card.className = 'card'
    card.id = 'card'
    //NAME
    let h2 = document.createElement('h2')
    h2.innerHTML = toy.name
    //IMAGE
    let img = document.createElement('img')
    img.src = toy.image
    img.className = 'toy-avatar'
    
    //LIKES
    let pTag = document.createElement('p')
    pTag.innerText = `${toy.likes} likes`;
    
    //SPAN
    //let span = document.createElement('span')
    
    // LIKE BUTTON
    let button = document.createElement('button')
    button.innerText = 'like'
    button.class = 'like-btn'
    button.id = toy.id
    button.addEventListener('click', (e) => {
      toyLike(toy)
    } )
    card.append(h2, img, pTag, button)
    
    
  let div = document.getElementById('toy-collection')
  div.append(card)
  }

  function toyLike(toy) {
    let fetchObj = {
    method: "PATCH",
    headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
  "likes": ++toy.likes
  })
  }

  fetch(`http://localhost:3000/toys/${toy.id}`, fetchObj) 
  .then(res => res.json())
  .then(updatedToy => {updatedToy
  let buttonId = document.getElementById(toy.id)
  //console.log(buttonId.previousElementSibling)
   buttonId.previousElementSibling.innerText = `${updatedToy.likes} likes` 
})

}
//POST

function toyInput(toyObj){
  
  fetch('http://localhost:3000/toys', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify(fetchObj)
  })
  .then(res => res.json())
  .then(data => console.log(toy))
}





 //addevent listner to creat toy button
  //get the inner values and make post object