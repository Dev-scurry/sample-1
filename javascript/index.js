
let x = 4
let y = 3
let total = x+y

x = 7
z = 2
total = x + y
console.log("this is what i calculated"+z)


let bulbHolder = document.getElementById("bulb-holder");
let onSwitch = document.getElementById('on-button');
let offSwitch = document.getElementById('off-button');

function switchBulbon(){
    bulbHolder.src='./Assets/light on.jpg'
}
function switchBulboff(){
    bulbHolder.src='./Assets/light off.jpg'
}

onSwitch.addEventListener('click', switchBulbon)


offSwitch.addEventListener('click', switchBulboff)







