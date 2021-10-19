$(document).ready(function() {
  $(".card-body").click(function() {
    $(this.h3).toggle();
    $(this.p).toggle();
  });
});