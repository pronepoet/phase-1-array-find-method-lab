// code your solution here
function superbowlWin(record){
   let win = record.find(element => element.result === "W") 
   
    if(win){
        return win.year;
    } else {
       return undefined;
    }
}