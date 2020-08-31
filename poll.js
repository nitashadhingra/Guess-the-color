var tiles = 6;
var options = chooseColor(tiles);

function chooseColor(n){
    var arr = [];
    for(var i=0  ; i<n ; i++)
        arr.push(randomclr());
    console.log(arr);
    return arr;
}
function randomclr(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

var squares = document.getElementsByClassName("option");
var ques = document.querySelector("h2");
var message = document.querySelector("span");

var pickedClr = pickColor();
ques.textContent = pickedClr;

for(var i=0 ; i<squares.length ; i++){
    squares[i].style.backgroundColor = options[i];
}

for(var i=0 ; i<squares.length ; i++){
    squares[i].addEventListener("click", function(){
        var chose = this.style.backgroundColor;
        // console.log(chose + " " + pickedClr);
        if(chose === pickedClr){
            // alert("Correct");
            for(var j=0 ; j<squares.length ; j++)
                squares[j].style.backgroundColor = pickedClr;
            message.textContent = "Waiting for others...";
            document.querySelector("h1").style.backgroundColor = pickedClr;
        } else{
            this.style.backgroundColor = "#31302c";
            message.textContent = "Try again";
        }
    });
}

var reset = document.querySelector("button");
reset.addEventListener("click", function(){
    options = chooseColor(tiles);
    pickedClr = pickColor();
    console.log(pickedClr);
    ques.textContent = pickedClr;
    message.textContent = "";
    for(var i=0 ; i<squares.length ; i++){
        if(options[i]){
            squares[i].style.backgroundColor = options[i];
            squares[i].style.display = "block";
        }
        else
            squares[i].style.display = "none";
    }
    document.querySelector("h1").style.backgroundColor = "royalblue";
});

var level1 = document.getElementById("lvl1");
var level2 = document.getElementById("lvl2");
level1.addEventListener("click", function(){
    tiles = 3;
    options = chooseColor(tiles);
    pickedClr = pickColor();
    for(var i=0 ; i<squares.length ; i++){
        if(options[i])
            squares[i].style.backgroundColor = options[i];
        else
            squares[i].style.display = "none";
    }
    level1.classList.add("selected");
    level2.classList.remove("selected");
});
level2.addEventListener("click", function(){
    tiles = 6;
    options = chooseColor(tiles);
    pickedClr = pickColor();
    for(var i=0 ; i<squares.length ; i++){
        squares[i].style.backgroundColor = options[i];
        squares[i].style.display = "block";
    }
    level2.classList.add("selected");
    level1.classList.remove("selected");
});

function pickColor() {
    var index = Math.floor(Math.random() * options.length);
    return options[index];
}
