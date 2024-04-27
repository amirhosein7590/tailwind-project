$(document).ready(function () {
  $(".inline-go-calender").pDatepicker({
    initialValue: false,
    observer: true,
    format: "YYYY/MM/DD",
    altField: ".inline-go-calender-alt",
  });
    $(".inline-back-calender").pDatepicker({
      initialValue: false,
      observer: true,
      format: "YYYY/MM/DD",
      altField: ".inline-back-calender-alt",
    });
});
