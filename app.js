var text = document.getElementById("text");

var fonts = document.getElementsByClassName("fonts");
var fontstyle = document.getElementsByClassName("fontstyle");
var fontBtn = document.getElementById("font-btn");
var form = document.getElementById("formSubmit");
var textArea = document.getElementById("floatingTextarea2");

var bold = false;
var italic = false;
var underline = false;

function formSubmit(e) {
  console.log(e);
  e.preventDefault();
  text.innerText = textArea.value 
}

form.addEventListener('submit', formSubmit);

for (let i = 0; i < fonts.length; i++) {
  fonts[i].addEventListener("click", function () {
    console.log(this.innerHTML);
    text.style.fontFamily = this.innerHTML;
    fontBtn.innerHTML = this.innerHTML;
    fontBtn.style.fontFamily = this.innerHTML;
  });
}
for (let i = 0; i < fontstyle.length; i++) {
  fontstyle[i].addEventListener("click", function () {
    // console.log();
    if (this.id == "bold") {
      if (bold == false) {
        text.style.fontWeight = "bolder";
        bold = true;
        this.style.backgroundColor = "#B2EF9B";
      } else {
        text.style.fontWeight = "normal";
        bold = false;
        this.style.backgroundColor = "transparent";
      }
    }
    if (this.id == "italic") {
      if (italic == false) {
        text.style.fontStyle = "italic";
        italic = true;
        this.style.backgroundColor = "#B2EF9B";
      } else {
        text.style.fontStyle = "normal";
        italic = false;
        this.style.backgroundColor = "transparent";
      }
    }
    if (this.id == "underline") {
      if (underline == false) {
        text.style.textDecoration = "underline";
        underline = true;
        this.style.backgroundColor = "#B2EF9B";
      } else {
        text.style.textDecoration = "none";
        underline = false;
        this.style.backgroundColor = "transparent";
      }
    }
  });
}
