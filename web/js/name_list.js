function updateTable() {
    // Here's where your code is going to go.
    var url = "api/name_list_get";
    var table = document.getElementById("datatable");
    var rowIndex = 0;
    var regPhonesDash = /^\d{3}-\d{3}-\d{4}$/;
    var regPhonesNoDash = /^\d{10}$/;
    while ($('#datatable')[0].rows[0] != null) {
        $('#datatable')[0].rows[0].remove();
    }
    $.getJSON(url, null, function(json_result) {
        for (var i = 0; i < json_result.length; i++) {
            var row = table.insertRow(rowIndex);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var corrPhoneNumber = json_result[i].phone;
            if (regPhonesNoDash.test(corrPhoneNumber)) {
                corrPhoneNumber = corrPhoneNumber.substring(0,3) + "-" + corrPhoneNumber.substring(3, 6) + "-" + corrPhoneNumber.substring(6,10);
            }
            var cell7 = row.insertCell(6);
            cell1.innerHTML = json_result[i].id;
            cell2.innerHTML = json_result[i].first;
            cell3.innerHTML = json_result[i].last;
            cell4.innerHTML = json_result[i].email;
            cell5.innerHTML = corrPhoneNumber;
            cell6.innerHTML = json_result[i].birthday;
            cell7.innerHTML = "<button type='button' name='delete' class='deleteButton btn' value='" + json_result[i].id + "'>Delete</button>";
            console.log(json_result[i].first);
            rowIndex++;
        }
        var buttons = $(".deleteButton");
        buttons.on("click", deleteItem);
    })
}

function showDialogAdd() {
    // Verify that the function started.
    console.log("Opening add item dialog");

    // Clear the form values.
    // Otherwise it will show old values.
    $('#id').val("");
    $('#firstName').val("");
    $('#lastName').val("");
    $('#email').val("");
    $('#phone').val("");
    $('#birthday').val("");

    $('#firstNameDiv').removeClass("has-error");
    $('#firstNameDiv').removeClass("has-success");
    $('#firstNameGlyph').removeClass("glyphicon-remove");
    $('#firstNameGlyph').removeClass("glyphicon-ok");
    $('#firstNameStatus').val("Awaiting value");

    $('#lastNameDiv').removeClass("has-error");
    $('#lastNameDiv').removeClass("has-success");
    $('#lastNameGlyph').removeClass("glyphicon-remove");
    $('#lastNameGlyph').removeClass("glyphicon-ok");
    $('#lastNameStatus').val("Awaiting value");

    $('#phoneDiv').removeClass("has-error");
    $('#phoneDiv').removeClass("has-success");
    $('#phoneGlyph').removeClass("glyphicon-remove");
    $('#phoneGlyph').removeClass("glyphicon-ok");
    $('#phoneStatus').val("Awaiting value");

    $('#emailDiv').removeClass("has-error");
    $('#emailDiv').removeClass("has-success");
    $('#emailGlyph').removeClass("glyphicon-ok");
    $('#emailGlyph').removeClass("glyphicon-remove");
    $('#emailStatus').val("Awaiting value");

    $('#birthdayDiv').removeClass("has-error");
    $('#birthdayDiv').removeClass("has-success");
    $('#birthdayGlyph').removeClass("glyphicon-remove");
    $('#birthdayGlyph').removeClass("glyphicon-ok");
    $('#birthdayStatus').val("Awaiting value");

    // Show the hidden dialog.
    $('#myModal').modal('show');
}

function saveChanges() {
    checkValues();
    console.log("New item has been added.");
}

function checkValues() {

    var validForm = true;

    var savedId = $('#id').val();
    var savedFirstName = $('#firstName').val();
    var savedLastName = $('#lastName').val();
    var savedEmail = $('#email').val();
    var savedPhone = $('#phone').val();
    var savedBirthday = $('#birthday').val();

    var regNames = /^[A-Za-záéíóúñÄäÖöÜüßбвгдёжзийклмнопрстуфхцчшщъыьэюя\'\w\-]{1,20}$/;
    var regPhonesDash = /^\d{3}-\d{3}-\d{4}$/;
    var regPhonesNoDash = /^\d{10}$/;
    var regDate = /^\d{4}-\d{2}-\d{2}$/;
    var regEmail = /^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[a-z]{2,4}$/;

    if (regNames.test(savedFirstName)) {
        console.log("First name is good.");
        $('#firstNameDiv').removeClass("has-error");
        $('#firstNameDiv').addClass("has-success");

        $('#firstNameGlyph').removeClass("glyphicon-remove");
        $('#firstNameGlyph').addClass("glyphicon-ok");

        $('#firstNameStatus').val("success");
    } else {
        console.log("First name is bad.");
        $('#firstNameDiv').removeClass("has-success");
        $('#firstNameDiv').addClass("has-error");

        $('#firstNameGlyph').removeClass("glyphicon-ok");
        $('#firstNameGlyph').addClass("glyphicon-remove");

        $('#firstNameStatus').val("failure");

        validForm = false;
    }

    if (regNames.test(savedLastName)) {
        console.log("Last name is good.");
        $('#lastNameDiv').removeClass("has-error");
        $('#lastNameDiv').addClass("has-success");

        $('#lastNameGlyph').removeClass("glyphicon-remove");
        $('#lastNameGlyph').addClass("glyphicon-ok");

        $('#lastNameStatus').val("success");
    } else {
        console.log("Last name is bad.");
        $('#lastNameDiv').removeClass("has-success");
        $('#lastNameDiv').addClass("has-error");

        $('#lastNameGlyph').removeClass("glyphicon-ok");
        $('#lastNameGlyph').addClass("glyphicon-remove");

        $('#lastNameStatus').val("failure");

        validForm = false;
    }

    if (regEmail.test(savedEmail)) {
        console.log("Email address is good.");
        $('#emailDiv').removeClass("has-error");
        $('#emailDiv').addClass("has-success");

        $('#emailGlyph').removeClass("glyphicon-remove");
        $('#emailGlyph').addClass("glyphicon-ok");

        $('#emailStatus').val("success");
    } else {
        console.log("Email address is bad.");
        $('#emailDiv').removeClass("has-success");
        $('#emailDiv').addClass("has-error");

        $('#emailGlyph').removeClass("glyphicon-ok");
        $('#emailGlyph').addClass("glyphicon-remove");

        $('#emailStatus').val("failure");

        validForm = false;
    }

    if (regPhonesDash.test(savedPhone)) {
        console.log("Phone number is good.");
        $('#phoneDiv').removeClass("has-error");
        $('#phoneDiv').addClass("has-success");

        $('#phoneGlyph').removeClass("glyphicon-remove");
        $('#phoneGlyph').addClass("glyphicon-ok");

        $('#phoneStatus').val("success");
    } else {
        if (regPhonesNoDash.test(savedPhone)){
            console.log("Phone number needed dashes; good otherwise. Fixed version: ");
            savedPhone = savedPhone.substring(0, 3) + "-" + savedPhone.substring(3, 6) + "-" + savedPhone.substring(6, 10);
            console.log(savedPhone);
            $('#phoneDiv').removeClass("has-error");
            $('#phoneDiv').addClass("has-success");

            $('#phoneGlyph').removeClass("glyphicon-remove");
            $('#phoneGlyph').addClass("glyphicon-ok");

            $('#phoneStatus').val("success");
        } else {
            console.log("Bad phone number.");
            $('#phoneDiv').removeClass("has-success");
            $('#phoneDiv').addClass("has-error");

            $('#phoneGlyph').removeClass("glyphicon-ok");
            $('#phoneGlyph').addClass("glyphicon-remove");

            $('#phoneStatus').val("failure");

            validForm = false;
        }
    }

    if (regDate.test(savedBirthday)) {
        console.log("Birthday is good.");
        $('#birthdayDiv').removeClass("has-error");
        $('#birthdayDiv').addClass("has-success");

        $('#birthdayGlyph').removeClass("glyphicon-remove");
        $('#birthdayGlyph').addClass("glyphicon-ok");

        $('#birthdayStatus').val("success");
    } else {
        console.log("Birthday is bad.");
        $('#birthdayDiv').removeClass("has-success");
        $('#birthdayDiv').addClass("has-error");

        $('#birthdayGlyph').removeClass("glyphicon-ok");
        $('#birthdayGlyph').addClass("glyphicon-remove");

        $('#birthdayStatus').val("failure");

        validForm = false;
    }

    if (validForm == true) {
        console.log(savedId + ", " + savedFirstName + ", " + savedLastName + ", " + savedEmail + ", " + savedPhone + ", " + savedBirthday);
        jqueryPostButtonAction();
    } else {
        console.log("Error: invalid value entered.");
    }
}


function jqueryPostButtonAction() {

    var url = "api/name_list_modify";
    var firstNameValue = $("#firstName").val();
    var lastNameValue = $("#lastName").val();
    var emailValue = $("#email").val();
    var phoneValue = $("#phone").val();
    var birthdayValue = $("#birthday").val();
    var dataToServer = { firstName : firstNameValue, lastName : lastNameValue, email : emailValue, phone : phoneValue, birthday : birthdayValue };

    $.post(url, dataToServer, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
        updateTable();
    });

}

function deleteItem(e) {
    console.debug("Delete");
    var idValue = e.target.value;
    console.debug(idValue);
    var url = "api/name_list_delete";
    var dataToServer = { id : idValue };

    $.post(url, dataToServer, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
        updateTable();
    })
}

var jqueryPostButton = $('#jqueryPostButton');
jqueryPostButton.on("click", jqueryPostButtonAction);

var saveChangesButton = $('#saveChanges');
saveChangesButton.on("click", saveChanges);

var addItemButton = $('#addItem');
addItemButton.on("click", showDialogAdd);

// Call your code.
updateTable();
