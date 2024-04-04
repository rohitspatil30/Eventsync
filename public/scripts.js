document.getElementById("signin").onclick = function () {
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;
    if (password != "admin@123" || username != "admin") {
        window.alert("Wrong input");
        window.open('/adminLogin', '_blank');
    }
    else if (password == "admin@123" && username == "admin") {
        window.open('/adminView', '_blank');
    }
}