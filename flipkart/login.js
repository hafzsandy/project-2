var a;
function pass() {
  if (a == 1) {
    document.getElementById("password").type = "password";
    document.getElementById("password").src = "images-2/notview-icon.png";
    a = 0;
  } else {
    document.getElementById("password").type = "text";
    document.getElementById("password").src = "images-2/view-icon.png";
    a = 1;
  }
}
