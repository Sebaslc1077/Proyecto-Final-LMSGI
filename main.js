var numeroScroll = 0;
$(document).ready(function() {
  // var container = $("#noticiasJsonContainer");
  // $.getJSON("data/" + 1 + ".json", function(json) {
  //     console.log(json);
  // });
  $(window).on("scroll", function() {
    if ($(window).scrollTop() + $(window).height() === $(document).height()) {
      addNews();
    }
  });
  $("#appendNews").click(function() {
    addNews();
  });
});

function addNews() {
  if (numeroScroll > 1) return null;
  numeroScroll++;
  if (numeroScroll === 2) $("#appendNews").hide();
  $.getJSON("data/" + numeroScroll + ".json", function(json) {
    console.log(json);
    $.each(json, function(index) {
      $("#noticiasJsonContainer").append(
        '<div class="noticia">' +
          '<div class="img">' +
          '<img src="' +
          json[index].imgmid +
          '" alt="' +
          json[index].imgmid +
          '" />' +
          "</div>" +
          '<div class="content">' +
          '<div class="title">' +
          json[index].title +
          "</div>" +
          '<p class="body">' +
          json[index].description +
          "</p>" +
          "<div>Publicada el: " +
          json[index].datetime +
          "</div>" +
          "</div>" +
          "</div>"
      );
    });
  });
}
