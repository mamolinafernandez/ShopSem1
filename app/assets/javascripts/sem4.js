$(document).ready(function() {

    $('.add_product').click(function(event) {
        var time = new Date().getTime();
        var regexp = new RegExp($(this).data('id'), "g");
        $(this).before($(this).data('fields').replace(regexp, time));
        event.preventDefault();
    });

    $('.del_product').click(function(event) {
        $(this).prev("input[type=hidden]").val("1");
        $(this).closest(".fields").hide();
        event.preventDefault();
    });
});
