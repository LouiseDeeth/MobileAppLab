function count_with_spaces(value) {
    return value.length;
}
function count_with_no_spaces(value) {
    return value.replace(" ", " ").length;
}
function count_both(value, spaces) {
    var count = 0;
    if (spaces) {
        count = value.length;
    }
    else {
        count = value.replace(" ", " ").length;
    }
    return count;
}
var count = count_with_spaces("test 1");
console.log(count);
console.log(count_with_no_spaces("test 1"));
console.log(count_both("test 1", true));
console.log(count_both("test 1", false));
