$(function() {
  // for (let i = 0; i < 7; i++) {
  //   $("#1" + i).slideToggle();
  // }

  $("#l3").slideToggle();

  setTimeout(() => {
    var prev = 3;
    $("#coverflow").coverflow({
      active: 3,
      trigger: { mousewheel: false },
      select: function(event, ui) {
        $("#l" + prev).slideToggle(() => {
          event.target.style.display = "block";
          $("#l" + ui["index"]).slideToggle();
          prev = ui["index"];
        });
      }
    });

    $("#coverflow img").click(function() {
      if (!$(this).hasClass("ui-state-active")) {
        return;
      }

      $("#coverflow").coverflow("next");
    });
  }, 3000);
});

// $("#coverflow").bind("mousewheel", function() {
//   return false;
// });
