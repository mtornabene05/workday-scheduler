$(document).ready(function(){

    $("#currentDay").text(moment().format('LLL'))

    $(".saveBtn").on("click", function(){
        var time = $(this).parent().attr("id");
        var description = $(this).siblings(".description").val();

        localStorage.setItem(time, description);
    });

    $("#row-9 .description").val(localStorage.getItem("row-9"));
    $("#row-10 .description").val(localStorage.getItem("row-10"));
    $("#row-11 .description").val(localStorage.getItem("row-11"));
    $("#row-12 .description").val(localStorage.getItem("row-12"));
    $("#row-13 .description").val(localStorage.getItem("row-13"));
    $("#row-14 .description").val(localStorage.getItem("row-14"));
    $("#row-15 .description").val(localStorage.getItem("row-15"));
    $("#row-16 .description").val(localStorage.getItem("row-16"));
    $("#row-17 .description").val(localStorage.getItem("row-17"));

    function timeColor() {
        var currentTime = moment().hour();

        $(".time-block").each(function(){
            var rowTime = parseInt($(this).attr("id").split("-")[1]);

            if (rowTime < currentTime) {
                $(this).addClass("past");
            }
            else if (currentTime === rowTime) {
                $(this).addClass("present");
            } 
            else {
                $(this).addClass("future");
            };

            
        });
    };

    timeColor();


});