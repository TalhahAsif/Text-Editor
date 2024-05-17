var text = document.getElementById("text");

var fonts = document.getElementsByClassName("fonts");
var fontstyle = document.getElementsByClassName("fontstyle");

console.log(text);
console.log(fonts);

for (let i = 0; i < fonts.length; i++) {
  fonts[i].addEventListener("click", function () {
    console.log(this.innerHTML);
    text.style.fontFamily = this.innerHTML;
  });
}
for (let i = 0; i < fontstyle.length; i++) {
  fontstyle[i].addEventListener("click", function () {
    if ((this.innerText == "B")) {
      text.style.fontWeight = "bolder";
    }
    if ((this.innerText == "I")) {
      console.log(this);
      text.style.fontStyle = "italic";
    }
    if ((this.innerText == "U")) {
      text.style.textDecoration = "underline";
    }
  });
}
