// const nobtn = document.querySelector(".btn-no");
var showHide;
function show_hide() {
  if (showHide == 1) {
    document.getElementById("span_text2").style.display = "block";
    return (showHide = 0);
  } else {
    document.getElementById("span_text2").style.display = "block";
    document.getElementById("btn_container").style.display = "block";

    document.getElementById("span_text").style.display = "none";
  }
}

// nobtn.addEventListener("mouseover", () => {
//     const i =
//       Math.floor(Math.random() * (wrapperRect.width - nobtnRect.width)) + 1;
//     const j =
//       Math.floor(Math.random() * (wrapperRect.height - nobtnRect.height)) + 1;

//     nobtn.style.left = i + "px";
//     nobtn.style.left = j + "px";
//   });
