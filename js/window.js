jQuery(function ($) {
    var wnd = $("#widget_right_panel");
    $(".close_meedget", wnd).click(function () {
        //wnd.find("ul").hide();
        //wnd.find(".close_meedget").hide();
        wnd.animate({right: "-185px"}, function () {
            wnd.find(".open_right_panel").fadeIn();
        });
    });
    $(".open_right_panel", wnd).click(function () {
        /*wnd.find("ul").show();*/
        wnd.find(".open_right_panel").hide();
        //wnd.find(".close_meedget").show();
        wnd.animate({right: 0});
    });
    $(".meedget_calc", wnd).click(function () {
        $("div[data-step]").hide();
        $("div[data-step=1]").show();
        $("#calc_form")[0].reset();
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

    $("#ans2-01, #ans3-01, #meedget_phone_input").keypress(function (event) {
        if (event.keyCode === 10 || event.keyCode === 13) {
            event.preventDefault();
        }
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
        if ($('[name="ans1[]"]:checked').length > 0) {
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
        setTimeout(function () {
            $("div[data-step=calc]").hide();
            $("div[data-step=phone]").show();
        }, 2000);
    });
    $("div[data-step=4] .meedget_back_link").click(function () {
        $("div[data-step=4]").hide();
        $("div[data-step=3]").show();
        $(window).scrollTop(0);
    });

    // Step calc
    $("div[data-step=calc] .meedget_calc_next").click(function () {
        $("div[data-step=calc]").hide();
//        $("#calc_form .meedget_copy").hide();
        $("div[data-step=phone]").show();
        $(window).scrollTop(0);
    });
    $("div[data-step=calc] .meedget_back_link").click(function () {
        $("div[data-step=calc]").hide();
        $("div[data-step=4]").show();
        $(window).scrollTop(0);
    });

    // Step phone
    $("div[data-step=phone] .meedget_calc_submit").click(function () {
        var phone = $.trim($("#meedget_phone_input").val());
        $("#meedget_phone_input").val(phone);
        if (!phone) {
            alert("Введите пожалуйста телефон");
        } else {
            phone = phone.replace(/\s/g, '');

            var phoneMask = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
            //var phoneMask = /[0-9-()+]{3,20}/;
            //var phoneMask = /[0-9-()+]{3,20}/g;
            if (!phone.match(phoneMask)) {
                alert("Номер телефона не корректен");
            } else {
                $.post('file.php', $('#calc_form').serialize());
                $("div[data-step=phone]").hide();
                $("div[data-step=finish]").show();
                $(window).scrollTop(0);
            }
        }
    });

    // Step finish


});
