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
    wndForm.submit(function (e) {
        e.preventDefault();
        return false;
    });

    // Step 1
    $("div[data-step=1] .meedget_calc_next").click(function () {
        if ($("[name=ans0]:checked").length > 0) {
            $("div[data-step=1]").hide();
            $("div[data-step=2]").show();
            $(window).scrollTop(0);
        } else {
            alert("не выбран ни один пункт!");
        }
    });

    // Step 2
    $("div[data-step=2] .meedget_calc_next").click(function () {
        if ($("[name=ans1]:checked").length > 0) {
            $("div[data-step=2]").hide();
            $("div[data-step=3]").show();
            $(window).scrollTop(0);
        } else {
            alert("не выбран ни один пункт!");
        }
    });
    $("div[data-step=2] .meedget_back_link").click(function () {
        $("div[data-step=2]").hide();
        $("div[data-step=1]").show();
        $(window).scrollTop(0);
    });

    // Step 3
    $("div[data-step=3] .meedget_calc_next").click(function () {
        $("div[data-step=3]").hide();
        $("div[data-step=4]").show();
        $(window).scrollTop(0);
    });
    $("div[data-step=3] .meedget_back_link").click(function () {
        $("div[data-step=3]").hide();
        $("div[data-step=2]").show();
        $(window).scrollTop(0);
    });

    // Step 4
    $("div[data-step=4] .meedget_calc_next").click(function () {
        $("div[data-step=4]").hide();
        $("div[data-step=calc]").show();
        $(window).scrollTop(0);
    });
    $("div[data-step=4] .meedget_back_link").click(function () {
        $("div[data-step=4]").hide();
        $("div[data-step=3]").show();
        $(window).scrollTop(0);
    });

    // Step calc
    $("div[data-step=calc] .meedget_calc_next").click(function () {
        $("div[data-step=calc]").hide();
        $("div[data-step=phone]").show();
        $(window).scrollTop(0);
    });
    $("div[data-step=calc] .meedget_back_link").click(function () {
        $("div[data-step=calc]").hide();
        $("div[data-step=4]").show();
        $(window).scrollTop(0);
    });

    // Step phone
    $("div[data-step=phone] .meedget_calc_next").click(function () {
        $("div[data-step=phone]").hide();
        $("div[data-step=finish]").show();
        $(window).scrollTop(0);
    });
    $("div[data-step=phone] .meedget_back_link").click(function () {
        $("div[data-step=phone]").hide();
        $("div[data-step=calc]").show();
        $(window).scrollTop(0);
    });

    // Step phone
});
