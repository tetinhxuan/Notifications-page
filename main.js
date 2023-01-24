var num = $(".noti").length;

function render() {
    $(".noti").one("click", function() {
        $(this).addClass("click1");
        num--;
        if (num < 0) {
            num = 0;
        }
        $(this).find("p").removeClass("info");
        $(".num").text(num);
    });
}
render();

function clearAll() {
    $("button").click(function() {
        num = 0;
        $(".noti").addClass("click1");
        $("p").removeClass("info");
        $(".num").text(num);
    });
}
clearAll();