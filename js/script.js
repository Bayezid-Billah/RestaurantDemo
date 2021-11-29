function sayHello() {
    var name = document.getElementById("name").value
    var message = "<h2>Hello " + name + "!</h2>";
    document.getElementById("content").innerHTML = message;

    if (name === "student") {
        var title = document.querySelector("#koduid").textContent;
        title += " & He is using it";
        document.querySelector("#koduid").textContent = title;
    }
}