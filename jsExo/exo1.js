function calculTotal(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        var pos = array[i];
        total = total + pos;
    }
    var total = 0;
    array.forEach(element => {
        total = total + element;
    });
    return total;
}
var arrayTotal = [50, 21, 10, 30, 8, 14, 5, 12]
var total = calculTotal(arrayTotal);
console.log("result : " + total);
document.getElementById("result").innerHTML = "result : " + total;
