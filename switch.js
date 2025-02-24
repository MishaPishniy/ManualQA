const age = 15
if ( age > 18 ){
    console.log("Особа повнолітня")
}else if ( age > 14) {
    console.log("Особа  не повнолітня")
} else {
    console.log("Особа малолітня")  
}


const age1 = 15
switch (true) {
    case age1 > 18:
    console.log("Особа повнолітня Switch")
    break;
    case age1 > 14:
    console.log("Особа  не повнолітня Switch")
    break;
    default:
    console.log('Особа малолітня Switch');

}