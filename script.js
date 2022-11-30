// pulls the div class for style changing
var timeBlock = $(".time-block");

// Gets current date and time
var date = dayjs();
console.log(date.$d);

// Displays current date and time on page
$('#currentDay').append(date.$d);

// function to be called
updateTime();


function updateTime() {
    
    timeBlock.each(function(i, element){
        if (i + 9 < date.hour()) {
            $(timeBlock[i]).removeClass("past");
            $(timeBlock[i]).removeClass("present");
            $(timeBlock[i]).addClass("future");
        }
        else if (i + 9 > date.hour()) {
            $(timeBlock[i]).removeClass("present");
            $(timeBlock[i]).removeClass("future");
            $(timeBlock[i]).addClass("past");
        }
        else if (i + 9 === date.hour()){
            $(timeBlock[i]).removeClass("past");
            $(timeBlock[i]).removeClass("future");
            $(timeBlock[i]).addClass("present")
        }} 
    )}

$(".saveBtn").on("click", function(){
    var text = $(this).siblings("").val();
    var events = $(this).parents().attr("id");
    localStorage.setItem(events, text);
    }); 
    



$("#hour-9").children(".description").val(localStorage.getItem('hour-9'));
$("#hour-10").children(".description").val(localStorage.getItem('hour-10'));
$("#hour-11").children(".description").val(localStorage.getItem('hour-11'));
$("#hour-12").children(".description").val(localStorage.getItem('hour-12'));
$("#hour-13").children(".description").val(localStorage.getItem('hour-13'));
$("#hour-14").children(".description").val(localStorage.getItem('hour-14'));
$("#hour-15").children(".description").val(localStorage.getItem('hour-15'));
$("#hour-16").children(".description").val(localStorage.getItem('hour-16'));
$("#hour-17").children(".description").val(localStorage.getItem('hour-17'));
  