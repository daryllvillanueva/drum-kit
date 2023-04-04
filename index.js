 var numberofButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberofButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        const drumSetButton = this.innerHTML;

        makeSound(drumSetButton);
    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":                
            const tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            const tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            const tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            const tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            const snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            const crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            const kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;

        default:
    }
}



// var person = {
//     name:"daryll villanueva",
//     age: 18,
//     hasWork: false,
//     languages: ["Tagalog", "Nihonggo"]
// }


// console.log("Hello there, I'm " + person.name + " and my age is " + person.age);


//  var audio = new Audio("sounds/tom-1.mp3");
//  audio.play();