/**
 * Created by yerfd on 1/19/2017.
 */

function helloFunction(event) {
    console.log("Hello");
}
var formButton1 = $('#button1');
formButton1.on("click", helloFunction);


function addFunction(event) {
    var value1 = parseInt($('#field1').val());
    var value2 = parseInt($('#field2').val());
    var value3 = value1 + value2;
    $('#field3').val(value3);
    console.log(value1);
    console.log(value2);
    console.log(value3);
}

var formButton2 = $('#button2');
formButton2.on("click", addFunction);

function hideFunction(event){
    $('#paragraphToHide').toggle(750);
}

var formButton3 = $('#button3');
formButton3.on("click", hideFunction);

function testNumberFunction(event){
    var testNumber = $('#phoneField').val();
    var numberCheck = /^\d{3}-\d{3}-\d{4}$/;
    //if (testNumber === /'[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]'/) {
    if (numberCheck.test(testNumber) == true) {
        console.log("Okay.");
    }
    else {
        console.log("Bad!");
    }
}

var formButton4 = $('#button4');
formButton4.on("click", testNumberFunction);

function jsonFunction(event){
    var formObject = {};

    formObject.firstName = $('#firstName').val();
    formObject.lastName = $('#lastName').val();
    formObject.email = $('#email').val();

    var jsonString = JSON.stringify(formObject);

    console.log(jsonString);
}

var formButton5 = $('#button5');
formButton5.on("click", jsonFunction);