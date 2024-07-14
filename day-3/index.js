// functions > syntax 

// function functionname(){
//     console.log("hii")
// }
// functionname()

// function multiplication(num){
//     console.log(num)
// }
// multiplication(4*6)


// to check driving license of user example

function drivinglicense(age){
    console.log(`your age : ${age}`)
    if(age>18 && age<=60){
        console.log("you are eligible for drving license")

    }else if(age<=17 || age>60){
        console.log("you are not eligible for driving license")

    }else {
        console.log("you are eligible for learning license")
    }

}
drivinglicense(18);