function area(a, b, c) {

    var result = (a * b) + (a * (c - b) / 2)
    return result;
}

function display(text) {
    var output = document.createElement("pre");
    output.textContent = text;
    document.body.appendChild(output);
}

display("The result is: " + area(10, 6, 10));
display("The result is: " + area(2, 1, 3));
display("The result is: " + area(11, 6, 11));
display("The result is: " + area(20, 1, 30));
