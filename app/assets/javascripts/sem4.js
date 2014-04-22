$(document).ready(function() {

    function remove_line_item(link) {   
        $(link).prev("input[type=hidden]").val(1);
        $(link).closest(".items").hide();  
    }

    function add_fields(link, association, content) {
            var new_id = new Date().getTime();
            var regexp = new RegExp("new_" + association, "g");
            $(link).parent().parent().before(content.replace(regexp, new_id));
    }
                                                       
    $('.add_product').click(function(event) {
        var time = new Date().getTime();
        var regexp = new RegExp($(this).data('id'), "g");
        $(this).before($(this).data('fields').replace(regexp, time));
        event.preventDefault();
    });

    $('.del_product').click(function(event) {
        $(this).prev("input[type=hidden]").val("1");    //Ponerel campo de _destroy a true
        $(this).closest(".fields").hide();              //Ocultar este line_item_field
        event.preventDefault();                         // no ejecutes la accion normal de enlace 'ir a #'
    });
});
