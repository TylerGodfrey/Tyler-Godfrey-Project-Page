/**
 * Created by yerfd on 3/23/2017.
 */
<!-- AJAX Post -->
function logOut() {

    var url = "api/invalidate_session_servlet";

    $.post(url, null, function (dataFromServer) {
        console.log("Finished calling log out servlet.");
        console.log(dataFromServer);
        getLogin();
    });
}

function getLogin() {

    var url = "api/get_login_servlet";

    $.post(url, null, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
        dataFromServer = dataFromServer.trim();
        if (dataFromServer === "You are not logged in.") {
            $("#logoutdiv").hide();
            $('#getSessionResult').html(dataFromServer);
        }
        else {
            $("#logoutdiv").show();
            $('#getSessionResult').html("You are logged in as '" + dataFromServer + "'");
        }


    });
}

function login() {

    var url = "api/login_servlet";

    var loginID = $("#loginID").val();

    var dataToServer = { loginID : loginID };

    $.post(url, dataToServer, function (dataFromServer) {
        console.log("Finished calling servlet.");
        console.log(dataFromServer);
        $("#loginID").val("");
        getLogin();
    });
}

button = $('#getLogin');
button.on("click", getLogin);

button = $('#login');
button.on("click", login);

button = $('#logout');
button.on("click", logOut);

getLogin();