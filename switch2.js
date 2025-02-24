/*switch (expression) {
	case value1:
		// The code to be executed if the expression is equal to value1
		break;
	case value2:
		// The code that will be executed if the expression equals value2
		break;
	default:
		// Code that will be executed if none of the values match
} 
const age = 17
const age2 = 10

switch (true) {
  case age > 18:
    console.log('Особа повнолітня');
    break;
  case age > 14:
    console.log('Особа неповнолітня');
    break;
  default:
   console.log('Особа малолітня');
}


if ( age2 > 18) {
    console.log('Особа повнолітня');
} else if (age2 > 14 ) {
    console.log('Особа неповнолітня'); 
} else {
    console.log('Особа малолітня');
} */


    let day = 4
    switch (day) {
        case 1:
            console.log("Понеділок");
            break;
            case 2:
            console.log("Вівторок");
            break;  
            case 3:
                console.log("Середа");
                break;  
                default:
                    console.log("Такого дня не має");   
    }

    if ( day === 1 ) {
        console.log("Понеділок");
    } else if ( day === 2 ) {
        console.log("Вівторок");
    } else if ( day === 3 ){
        console.log("Середа");
    }else {
        console.log("Такого дня не має");   
    }



    const a = 5
    const b = 10 

    if ( a > 5  && b  != 10 ) {
        console.log( " a > 5 i b < 10")
    } esle if ( a <5    && b >10 )