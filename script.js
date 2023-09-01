/* Iteration 4: Make the Canvas App Functional */
let background_button = document.getElementById("background-button")
let background = document.getElementById("background")


background_button.oninput = function(){
  background.style.fill=background_button.value
}

let jersey_button = document.getElementById("jersey-button")
let jersey = document.getElementById("jersey")

jersey_button.oninput = function(){
  jersey.style.fill=jersey_button.value
}


let hair_button = document.getElementById("hair-button")
let hair = document.getElementById("hair")

hair_button.oninput = function(){
  hair.style.fill=hair_button.value
}

let face_button = document.getElementById("face-button")
let face = document.getElementById("face")

face_button.oninput = function(){
  face.style.fill=face_button.value
}

let cr_button = document.getElementById("cr-button")
let cr = document.getElementById("cr")

cr_button.oninput = function(){
  cr.style.fill=cr_button.value
}

let number_button = document.getElementById("number-button")
let number = document.getElementById("number")

number_button.oninput = function(){
  number.style.fill=number_button.value
}