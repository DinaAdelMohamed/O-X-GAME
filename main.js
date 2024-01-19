// in the frist choose role x or o  with use variable turn
let title= document.querySelector(".head")
let turn="x" ;
let squers=[];
function load(a1,a2,a3){
    //print in header the won
title.innerHTML=`${squers[a1] } Winner `;
// change background i woon
document.getElementById('item'+a1).style.background="#03375c";
document.getElementById('item'+a2).style.background="#03375c";
document.getElementById('item'+a3).style.background="#03375c";

// this fun make loading when is wom 1000 mean rpeat in 1s
setInterval(function(){title.innerHTML += '.'},1000);
setTimeout(function(){location.reload()},4000)

}

function won(){
    // squersعمل لوب عشان تلف علي العناصر 9 وتضعهم داخل 
for (let i=1;i<10;i++){
    squers[i]=document.getElementById("item"+i).innerHTML
}
// هل المربع 1 يساوي 2  ووو 2 يساوي 3  ووواي مربع لايكون فاضي
if(squers[1]==squers[2] &&squers[2]==squers[3] &&squers[1]!=""){

    load(1,2,3);
}else if (squers[4]==squers[5] &&squers[5]==squers[6] &&squers[4]!=""){
    load(4,5,6);
 }else if (squers[7]==squers[8] &&squers[8]==squers[9] &&squers[8]!=""){
load(7,8,9)
 }



// coll squer
else if (squers[1]==squers[4] &&squers[4]==squers[7] &&squers[1]!=""){
load(1,4,7)
}else if (squers[2]==squers[5] &&squers[5]==squers[8] &&squers[5]!=""){
    load(2,5,8)
}else if (squers[3]==squers[6] &&squers[6]==squers[9] &&squers[6]!=""){
    load(3,6,9)

}
// crouse squers
else if (squers[1]==squers[5] &&squers[5]==squers[9] &&squers[5]!=""){
    load(1,5,9)

}else if (squers[3]==squers[5] &&squers[5]==squers[7] &&squers[3]!=""){
    load(3,5,7)

}
}

//made fun to write x
function game (id){
    let player=document.getElementById(id);
    //ejment mean squear
    if(turn ==="x" && player.innerHTML=="" ){
        player.innerHTML="x";
        turn="o";
        title.innerHTML='o';
    }
    else if(turn==="o" && player.innerHTML=="" ){
        player.innerHTML="o";
        turn="x";
        title.innerHTML='x';
    }
    won();
}
