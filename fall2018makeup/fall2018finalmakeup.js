$("li").click(function(){
    $("#story").load(this.id);
 });


$(document).ready(function(){
    $(".menu:first").click(function(){
        $(".submenu:first").toggle(1000);
    });
});

$(document).ready(function(){
    $(".menu:last").click(function(){
        $(".submenu:last").toggle(1000);
    });
});


$("#lightpink").click(function(){
    $("#source").css("background-color", "lightpink");
});

$("#lightsalmon").click(function(){
    $("#source").css("background-color", "lightsalmon");
});



$(document).ready(function(){
    $("#story").load("story0.txt");
});



