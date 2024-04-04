document.getElementById("signup").onclick = function () {
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;
    if (password != "vk.password" || username != "ravi.com" || username != "vikram" || password != "ravi#1234") {
        window.alert("Wrong input");
        window.open('/userLogin', '_blank');
    }
    else if ((password == "ravi#1234" && username == "ravi.com") || (password == "vk.password" && username == "vikram")) {
        window.open('/', '_blank');
    }
}