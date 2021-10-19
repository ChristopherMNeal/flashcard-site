$(document).ready(function() {
  $(".card-body").click(function() {
    $("h3", this).toggle();
    $("p", this).toggle();
  });
});
