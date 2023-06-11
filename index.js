function shout(string){
    return string.toUpperCase();
}


function whisper(string){
    return string.toLowerCase();
}

let logShout = string =>{
    console.log(string.toUpperCase())
}


let logWhisper = string =>{
    console.log(string.toLowerCase());
}

let sayHiToHeadphonedRoommate = string =>{
    if(string === string.toUpperCase()){
        return "YES INDEED!"
    } else if(string === "Let's have dinner together!"){
        return "I would love to!"
    } else {
        return "I can't hear you!"
    }
}

console.log(sayHiToHeadphonedRoommate("Let's"))



