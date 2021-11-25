function display() {
    var length = document.getElementById("length").value;


    console.log("length=" + length);

    var area = Number(length) * Number(length);
    var perimeter = 4 * Number(length);

    document.getElementById("area").innerHTML = "Area is : " + area;
    document.getElementById("perimeter").innerHTML = "Perimeter is : " + perimeter;
}