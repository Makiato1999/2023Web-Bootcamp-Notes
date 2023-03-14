// jshint esversion:6
/*
module.exports.getDate = getDate;
1.
function getDate() {
    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);
}
2.
let getDate = function() {
    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);
}
*/
exports.getDate = function() {
    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);
}

module.exports.getDay = getDay;
function getDay() {
    let today = new Date();

    let options = {
        weekday: "long",
    };
    return today.toLocaleDateString("en-US", options);
}