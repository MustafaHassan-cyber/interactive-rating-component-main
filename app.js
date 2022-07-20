// wasn't made for others to read
const ratingBtns = document.getElementsByClassName("rBtns");
const sbtn = document.getElementById("sbtn");
const span = document.getElementsByTagName("span")[0];
const main = document.getElementsByClassName("main")[0];

let num = null;
let s = "";
for (let i = 0; i < ratingBtns.length; i++) {
  ratingBtns[i].addEventListener("click", () => {
    s = ratingBtns[i];
    num = ratingBtns[i].innerHTML;
    s.style.backgroundColor = "hsl(217, 12%, 63%)";
    for (let i = 0; i < ratingBtns.length; i++) {
      ratingBtns[i].style.backgroundColor = "hsl(212, 20%, 27%)";
    }
    s.style.backgroundColor = "hsl(217, 12%, 63%)";
  });
}

sbtn.addEventListener("click", () => {
  if (num != null) {
    main.style.zIndex = -1;
    span.innerText = num;
  } else {
    alert("please rate us");
  }
});
