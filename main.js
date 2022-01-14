function display() {
    var length = document.getElementById("length").value;


    console.log("length=" + length);

    var area = Number(length) * Number(length);
    var perimeter = 4 * Number(length);

    document.getElementById("area").innerHTML = "Area is : " + area +" sq. units";
    document.getElementById("perimeter").innerHTML = "Perimeter is : " + perimeter + " units";
}

function square() {
    var number = document.getElementById("number").value;


    console.log("number= " + number);

    var squareResult = Number(number) * Number(number);
    

    document.getElementById("square").innerHTML = "Square is : " + squareResult ;
}

function squareRoot() {
    var root = document.getElementById("root").value;


    console.log("root= " + root);

    var rootResult = Math.sqrt(root);
    

    document.getElementById("rootDisplay").innerHTML = "Square root is : " + rootResult ;
}


