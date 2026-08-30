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
