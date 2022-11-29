// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// var dayPlanner = []

$("#currentDay").text(dayjs().format('ddd, MMM D, YYYY h:mm A'));


$(document).ready(function() {
    $('.saveBtn').on('click', function() {
        var description = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        localStorage.setItem(time, description);
    })


    myCalendarTimeIds.forEach(id => {
        $('hour-#${id} .description').val(localStorage.getItem('hour-${i}'))

    });


    for(let i = 8; i < 17; i++) {
        $(hour-'#${i} .description').val(localStorage.getItem(hour-'${i}'));
    }


  });
//   Display curents day and time
function timeCheck() {
    var currentHour = dayjs().hour();
    console.log(currentHour)

    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log( blockHour, currentHour)

        //check if we've moved past this time, click into css/html given classes of past, present, or future
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
