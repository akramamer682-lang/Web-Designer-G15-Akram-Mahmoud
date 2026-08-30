var degree = prompt("Enter Your Degree");

    if (degree == null || degree == "") {
        alert("Please Enter Your degree");
    }else if (degree < 0 || degree > 100) {
        console.log("invalid degree")
    } else if (degree >= 90) {
        console.log("Excellent")
    } else if (degree >= 80) {
        console.log("Very good")
    } else if (degree >= 70) {
        console.log("good")
    } else {
        console.log("failed")
    }



// function looping ==> startNum , endNum , breakNum , contNum
function looping(startNum, endNum, breakNum, contNum) {
    if(startNum != null && endNum != null && breakNum != null && contNum != null){
    
    for (var i = startNum; i <= endNum; i++) {
        if (i === breakNum) {
            break;
        }
        if (i === contNum) {
            continue;
        }
        console.log(i);
    }
    }else{
        alert("Please Enter All Num")
    }
}


looping(1,10,8,3);