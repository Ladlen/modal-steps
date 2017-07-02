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
    $(".meedget_calc", wnd).click(function () {
        $("#meedget_popup").show();
    });

    var wndForm = $("#calc_form");
    $(".meedget_close_link", wndForm).click(function () {
        $("#meedget_popup").hide();
        $("#calc_form")[0].reset();
    });
    wndForm.submit(function(e){
        e.preventDefault();

        return false;
    });
});
