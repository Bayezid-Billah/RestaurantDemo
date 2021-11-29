function sayHello() {
    var name = document.getElementById("koduid").value;
    var message = "<h2>Hello " + name + "!</h2>";
    document.getElementById("content").innerHTML = message;

    if (name === "student") {
        var title = document.querySelector("#title").textContent;
        title += " & He is using it";
        document.querySelector("#title").textContent = title;
    }
}