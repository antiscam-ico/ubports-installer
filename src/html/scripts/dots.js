const dots = window.setInterval(function() {
  var wait = $("[id=wait-dot]");
  if (wait.text().length > 4) wait.text("");
  else wait.append(".");
}, 400);
