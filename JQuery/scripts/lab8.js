// /*a*/
$("h1").text("Lab 08");

// /*b*/
var newItem = $("<h3>Working with jQuery</h3>");
$("#header").html(newItem);

// /*c*/
$("input[type='button']").each(function(index, element){
    $(element).addClass("btn-background");
});

/*d*/
$("#buttons").addClass("red-border");

/*e*/
$("#paragraphs  p").each(function(index, element) {
    $(element).addClass("blue");
});

/*f*/
$("#first").on("click", function(){
    $("#paragraphs p:first").addClass("green-border");
}); 

/*g*/
$("#last").on("click", function(){
    $("#paragraphs p:last").addClass("orange-border");
});

/*h*/
$("#prev").on("click", function(){
    $("#para3").prev().addClass("purple-border");
});

/*i*/
$("#next").on("click", function(){
    $("#para2").next().addClass("yellow-border");
}); 

/*g*/
$("#remove").on("click", function(){
    $("#footer").remove();
});

