function counter() {
  var content = document.getElementById("jasoseol").value;
  if (content.length > 500) {
    content = content.substring(0, 500);
    document.getElementById("jasoseol").value = content;
  }
  document.getElementById("count").innerHTML = "(" + content.length + "/500)";
}

counter();
