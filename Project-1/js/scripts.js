/*const Playstation = ["Ark Survival Evovled", "Warframe", "Elden Ring", "COD Modern Warfare"];
const Switch = ["Pokemon Violet", "Animal Crossing New Horizons","Super Smash Brothers Ultimate", "Sega Mega Drive Collection"];
const PC = ["Cosmoteer", "Factorio", "Homeworld", "Timberborn"];
const AgeRating = ["E", "E10+", "T", "M"];
const Own = ["Physical", "Disc", "Both", "N/A"];

document.getElementById("PS").innerHTML = Playstation[index];
for (let index = 0; index < array.length; index++) {
    const Playstation = Playstation[index];
    
}
document.getElementById("S").innerHTML = Switch[index];
for (let index = 0; index < array.length; index++) {
    const Switch = Switch[index];
    
}
document.getElementById("PC").innerHTML = PC[index];
for (let index = 0; index < array.length; index++) {
    const PC = PC[index];
    
}
document.getElementById("AR").innerHTML = AgeRating[index];
for (let index = 0; index < array.length; index++) {
    const document.getElementById("AR").innerHTML = AgeRating[index];
    
}
document.getElementById("O").innerHTML = Own[index];
for (let index = 0; index < array.length; index++) {
    const Own = Own[index];
    
}
Couldnt get this to work for project but want to get it to work in the future*/

var dire1 = 'Click the device you wish to view.';
var dire2 = 'You will then be taken to the table page for that device';
var directions = dire1  + dire2;
var directionsEl = document.getElementById('directions');

directionsEl.textContent = directions;

document.getElementById("desc").innerHTML = "This is a catologe of all the types of devices I have for gaming and the games I play on them";
document.getElementById("footer").innerHTML = "Gary Christie ----------------------------------------------------------------- Game Cataloge"; // need to use a class i think for putting the footer on each page.
const backgroundC = document.getElementsByClassName("background");
backgroundC[0].style.backgroundColor = "white";
const buttonsC = document.getElementsByClassName("buttons")
buttonsC[0].style.backgroundColor = "green";
buttonsC[1].style.backgroundColor = "blue"; 
buttonsC[2].style.backgroundColor = "red";  // wanted to have each device stay the same color on each page but couldn't

var messages = [];
 
var messageType = {
    in: 'in-message',
    unknown: 'unknown-message'
};

// messed up the preloaded messages
var data = [
    {
        type: messageType.in,
        message: 'Add Xbox games'
    },
    {
        type: messageType.in,
        message: 'Add Mario Party to Switch game list'
    }
];

function Message(type, message){
    this.type = type;
    this.message = message;
}

function createMemoElement(message){
    var messageText = document.createTextNode(
        message.message
    );

    var memoEl = document.createElement('div');
    memoEl.appendChild(messageText)

    memoEl.className = message.type;

    return memoEl;
}

function addMessageHandler(event) {
    var type;
    var messageInput = document.getElementById('memo-input');
    var memoContainerEl = document.getElementById('memo-container')

    switch(event.target.id) {
        case 'add-memo':
            type= messageType.in;
    }

    if (messageInput.value != '') {
        var message = new Message(type, messageInput.value);
        messages.push(message);

        var el = createMemoElement(message) 
        
        memoContainerEl.appendChild(el)

        messageInput.value = '';
    }
}  


function loadSeedData() {
    for (var i = 0; i < data.lenght; i++){
        var message = new Message(data[i].type, data[i].message);
        messages.push(message);
    }
    var memoContainerEl = document.getElementById('memo-container');

    for (var i = 0; i < message.length; i++) {
        var message = messages[i];
        var el = createMemoElement(message)

        memoContainerEl.appendChild(el);
    }
}

var init = function () {
        document.getElementById('add-memo').onclick = addMessageHandler;

        loadSeedData();
};


init();