function area(a, b, c) {
    var result;
    result = (a * b) + (a * (c - b) / 2);
    return result;
}

function display(text) {
    var output = document.createElement("pre");
    output.textContent = text;
    document.body.appendChild(output);
}

display("The result is: " + area(10,6,10));
display("The result is: " + area(2,1,3));
display("The result is: " + area(10,6,10));
display("The result is: " + area(3,2,4));

console.log("The result is: ", area);