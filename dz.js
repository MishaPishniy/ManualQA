let day = 4;

if (day === 1 ) {
    console.log("Ponedilok")
} else if (day === 2) {
    console.log("Vivtorok") 
}else if ( day === 3 ) {
    console.log("Sereda") 
} else {
    console.log("Chetverg") 
}


switch (day) {
    case 1:
        console.log("Понеділок");
        break;
    case 2:
        console.log("Vivtorok");
        break;
    case 3:
        console.log("Sereda");
        break;    
    case 4:
        console.log("Chetverg Switch");
        break;
        default:
            console.log("Невірне значення");
}