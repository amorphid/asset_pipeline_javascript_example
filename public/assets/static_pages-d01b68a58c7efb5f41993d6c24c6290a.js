function makeItalics() {
  $("#italic_1").attr("style", "font-style:italic");
};

$(document).ready(function() {
  $("#italicizer").click(function() {
    makeItalics();
  });
});
