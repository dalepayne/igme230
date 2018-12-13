/* Don't use <script> tags in a linked js file! */
$(document).ready(function(){
    $(".menuitem:first").click(function(){
        $(".submenu:first").toggle(1000);
    });
});

$(document).ready(function(){
    $(".menuitem:last").click(function(){
        $(".submenu:last").toggle(1000);
    });
});
