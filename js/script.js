$(function() {
    $("#navbarToggle").blur(function(event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#collapsable-nav").collapse('hide');
        }
    });
});

(function(global) {
    var bb = {};
    var homeHtml = "snippets/home-snippet.html";
    var insertHtml = function(selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHtml = html;
    };

    // Show loadin icon inside element identified by 'selector'.'
    var showLoading = function(selector) {
        var html = "<div class='text-center'>";
        html += "<img src='images/ajax-loader.gif'></div";
        insertHtml(selector, html);
    };

    //On page Load (before images or CSS)
    document.addEventListener("DOMContentLoaded", function(event) {
        //on first load, show home view
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(
            homeHtml,
            function(responseText) {
                document.querySelector("#main-content").innerHTML = responseText;
            }, false);
    });
    global.$dc = dc;
})(window);