jQuery(function ($) {
    var wnd = $("#widget_meedget");
    $(".close_meedget", wnd).click(function () {
        wnd.find("ul").hide();
        wnd.find(".close_meedget").hide();
        wnd.find(".open_meedget").show();
    });
    $(".open_meedget", wnd).click(function () {
        wnd.find("ul").show();
        wnd.find(".open_meedget").hide();
        wnd.find(".close_meedget").show();
    });
});