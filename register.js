console.log("register.js");
let pets = [];//empty array
//create pets
let pet1 ={
    name: "Scooby",
    age: 99,
    gender: "Male"
    service: "Laughter Support",
    breed: "Great Dane"
},

let pet2 ={
    name: "Luna",
    age: 2,
    gender: "Female",
    service: "Guide Dog",
    breed: "Labrador Retriever"
},

let pet3 ={
    name: "Max",
    age: 4,
    gender: "Male",
    service: "Emotional Support",
    breed: "Beagle"
}


// Display each pet's information
pets.forEach(pet => {
console.log(`Name: ${pet.name}, Age: ${pet.age}, Gender: ${pet.gender}, Service: ${pet.service}, Breed: ${pet.breed}`);
});




pets.push(pet1);

function displayNames(){
    //display pet names
    console.log(pet1.name);
    //console.log(pets[1].name);

//hint: use a for loop and travel the array
//hint: use brute force
}