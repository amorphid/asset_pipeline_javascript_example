// converts 'Italicize me' from unitalicized to italicized
function italicizer() {
  // finds the 'italicizer' button && adds a click event listener
  $("#italicizer").click(function() {
    // finds the 'Italicize me' && adds style attribute
    $("#italic_1").attr("style", "font-style:italic");
  });
};

// waits until the document has completely loaded before running scripts within
$(document).ready(function() {
  // initializes the 'italicizer' function
  italicizer();
});
