const a = parseFloat(prompt('enter "a"'));
const b = parseFloat(prompt('enter "b"'));
const c = parseFloat(prompt('enter "c"'));
function equation (a, b, c) {
    const d = b * b - 4 * a * c;
    alert('d = '+' '+d);
    var result = "";
    if (d < 0) {
        result = "No result";
    }
    else {
        const x1 = (-b + Math.sqrt(d)) / (2*a);
        const x2 = (-b - Math.sqrt(d)) / (2*a);
        result = 'result: x1 ='+ x1 + ', x2 ='+ x2;
    }
    return result;
}
const result = equation (a,b,c);
alert(result);