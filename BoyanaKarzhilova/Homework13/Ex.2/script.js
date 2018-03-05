function convert (a,b,c) {
    var first=a.toString(16);
    var second=b.toString(16);
    var third=c.toString(16);
    return "#"+first+second+third;
}

console.log (convert(255, 192, 203));