document.querySelector(".control-buttons span").onclick = function(){

    let yourName = prompt("what's your name");

    if(yourName == null || yourName == ''){
        document.querySelector(".name span").innerHTML = "Unknown";
    }else{
        document.querySelector(".name span").innerHTML = yourName;
    }

    document.querySelector(".control-buttons").remove();
};

let duration = 1000;

let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children);

let orderRange = [...Array(blocks.length).keys()];

shuffle(orderRange);

blocks.forEach((block, index) => {

    block.style.order = orderRange[index];

    block.addEventListener('click', function (){
        flibBlock(block);
    });
});


function flibBlock (selectedBlock){
    selectedBlock.classList.add('is-flipped');

    let allFlibdBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

    if(allFlibdBlocks.length === 2){

        stopClicking();

        checkMatchedBlocks(allFlibdBlocks[0], allFlibdBlocks[1]);
    }
};

function stopClicking (){
    blocksContainer.classList.add('no-clicking');
    
    setTimeout(() => {
        blocksContainer.classList.remove('no-clicking');
    },duration);
}

function checkMatchedBlocks (firstBlock, secondBlock){
    let triesElement = document.querySelector('.tryis span');

    if(firstBlock.dataset.technology === secondBlock.dataset.technology){

        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');


        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');

        document.getElementById('success').play();
        
    }else{
        triesElement.innerHTML = parseInt(triesElement.innerHTML) +1 ;
        
        setTimeout(()=>{
            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');
        },duration);    

        document.getElementById('fail').play();
    }
}

function shuffle (array){
    let current = array.length,
    temp,
    random;

    while (current > 0){
        random = Math.floor(Math.random() * current);
        current--;

        temp = array[current];

        array[current] = array[random];

        array[random] = temp;
    }

    return array;
}

setInterval(() => {
    console.log('hello fouad')
}, 2000);

setInterval(() => {
    console.log('hello ahmed')
}, 4000);

setInterval(() => {
    console.log('hello mohamed')
}, 6000);

setInterval(() => {
    console.log('hello ali')
}, 8000);

setInterval(() => {
    console.log('hello khaled')
}, 10000);
