const mainWrapper = document.getElementById("mainWrapper");
function movePage(i, width) {
  i = parseInt(i);
  if (i === NaN) {
    return;
  }

  width = parseFloat(width);
  if (width === NaN) {
    return;
  }

  mainWrapper.style.transform = `translateX(${-(i-1)*width}px)`;
}

// when an item in nav is clicked, move the view to that item's corresponding index
const navItems = document.getElementById("menuNav").querySelectorAll("a[data-ref-article]");
navItems.forEach(item => {
  item.addEventListener("click", function (e) {
    let refArticleId = this.getAttribute("data-ref-article").trim();
    let refArticle = document.getElementById(refArticleId);

    refArticle.setAttribute("data-content-side", "left");
    refArticle.previousElementSibling.setAttribute("data-content-side", "right");
    let CSSObj = window.getComputedStyle(refArticle);
    movePage(refArticle.getAttribute("data-index").trim(), CSSObj.getPropertyValue("width"));
  });
});

const hoverArticlesContainer = document.getElementById("hoverArticlesContainer");
[
  "our-belief",
  "us",
  "our-values",
  "do-we-do",
  "products",
  "solutions",
  "services",
  "projects"
].forEach(id => {
  let elem = document.getElementById(id);
  elem.addEventListener("mouseover", function (e) {
    console.log(e);
    let refArticleId = this.getAttribute("data-ref-article").trim();
    let refArticle = document.getElementById(refArticleId);
    let activeSect = e.path[e.path.indexOf(mainWrapper) - 1];
    let activeSide = "left";

    if (activeSect) {
      activeSide = activeSect.getAttribute("data-content-side");
    }

    if (refArticle) {
      refArticle.style.display = "block";
      hoverArticlesContainer.setAttribute("data-content-side", activeSide);
    }

  });

  elem.addEventListener("mouseout", function (e) {
    let refArticleId = this.getAttribute("data-ref-article").trim();
    let refArticle = document.getElementById(refArticleId);

    if (refArticle) {
      refArticle.style.display = "none";
      hoverArticlesContainer.removeAttribute("data-content-side");
    }

  })
})


document.getElementById("toggleTheme").addEventListener("click", function (e) {
  document.body.setAttribute("data-theme", this.checked ? "dark" : "light");
  if (this.checked) {
    document.querySelector(".logo").src = "../assets/logo/shunya/shunya-logo-ver-O-5-clean-light.svg";
  } else {
    document.querySelector(".logo").src = "../assets/logo/shunya/shunya logo numbers & tag line ver O-5 clean 763 X 233 dark.svg";
  }
});

// function sideDivView(clickBtn, detailsDiv) {
//   document.querySelector(`#${clickBtn}`).addEventListener("mouseover", () => {
//     if (atAbout) {
//       document.querySelector(`#${detailsDiv}-left`).classList.add("displayBlock");
//       document.querySelector(`#${detailsDiv}-left`).classList.remove("displayNone");
//     } else {
//       document.querySelector(`#${detailsDiv}-right`).classList.add("displayBlock")
//       document.querySelector(`#${detailsDiv}-right`).classList.remove("displayNone")
//     }
//   });
//   document.querySelector(`#${clickBtn}`).addEventListener("mouseout", () => {
//     if (atAbout) {
//       if (document.querySelector(`#${detailsDiv}-left`).classList.contains("Clicked")) {
//         document.querySelector(`#${detailsDiv}-left`).classList.add("displayBlock");
//         document.querySelector(`#${detailsDiv}-left`).classList.remove("displayNone");
//       } else {
//         document.querySelector(`#${detailsDiv}-left`).classList.add("displayNone");
//         document.querySelector(`#${detailsDiv}-left`).classList.remove("displayBlock");
//       }
//     } else {
//       if (document.querySelector(`#${detailsDiv}-right`).classList.contains("Clicked")) {
//         document.querySelector(`#${detailsDiv}-right`).classList.add("displayBlock");
//         document.querySelector(`#${detailsDiv}-right`).classList.remove("displayNone");
//       } else {
//         document.querySelector(`#${detailsDiv}-right`).classList.add("displayNone");
//         document.querySelector(`#${detailsDiv}-right`).classList.remove("displayBlock");
//       }
//     }
//   });
//   document.querySelector(`#${clickBtn}`).addEventListener("click", (e) => {
//     e.stopPropagation();
//     if (atAbout) {
//       document.querySelector(`#${detailsDiv}-left`).classList.add("displayBlock");
//       document.querySelector(`#${detailsDiv}-left`).classList.add("Clicked");
//       document.querySelector(`#${detailsDiv}-left`).classList.remove("displayNone");
//     } else {
//       document.querySelector(`#${detailsDiv}-right`).classList.add("displayBlock");
//       document.querySelector(`#${detailsDiv}-right`).classList.add("Clicked");
//       document.querySelector(`#${detailsDiv}-right`).classList.remove("displayNone");
//     }
//   });
//   document.querySelector(`.about`).addEventListener("click", () => {
//     hideLeftRightContainers();
//   });
//   document.querySelector(`menu`).addEventListener("click", () => {
//     hideLeftRightContainers();
//   });

//   function hideLeftRightContainers() {
//     document.querySelector(`#${detailsDiv}-left`).classList.add("displayNone");
//     document.querySelector(`#${detailsDiv}-left`).classList.remove("displayBlock");
//     document.querySelector(`#${detailsDiv}-left`).classList.remove("Clicked");

//     document.querySelector(`#${detailsDiv}-right`).classList.add("displayNone");
//     document.querySelector(`#${detailsDiv}-right`).classList.remove("displayBlock");
//     document.querySelector(`#${detailsDiv}-right`).classList.remove("Clicked");
//   }
// }

// sideDivView(`our-belief`, `our-belief-div`);
// sideDivView(`us`, `us-div`);
// sideDivView(`our-values`, `our-values-div`);
// sideDivView(`do-we-do`, `do-we-do-div`);
// sideDivView(`products`, `products-div`);
// sideDivView(`solutions`, `solutions-div`);
// sideDivView(`services`, `services-div`);
// sideDivView(`projects`, `projects-div`);


// function accordion() {

//   document.querySelectorAll(".accordion-heading").forEach((item) =>
//     item.addEventListener("click", () => {
//       if (item.parentElement.lastElementChild.style.height) {
//         item.parentElement.lastElementChild.style.height = null;
//         if (item.parentElement.parentElement.parentElement.classList.contains("accordion-body")) {
//           // console.log(item.parentElement.parentElement.parentElement);
//           // console.log(item.nextElementSibling.scrollHeight);
//           item.parentElement.parentElement.parentElement.style.height = (item.parentElement.parentElement.parentElement.scrollHeight - item.nextElementSibling.scrollHeight) + "px";
//           // item.parentElement.parentElement.parentElement.style.height=;
//           // console.log(item.parentElement.parentElement.parentElement);

//         }
//       } else {
//         if (item.parentElement.parentElement.parentElement.classList.contains("accordion-body")) {
//           item.parentElement.parentElement.parentElement.style.height = (fun(item.parentElement.parentElement.childNodes) + item.parentElement.lastElementChild.scrollHeight + 25) + "px";

//           function fun(itemNodes) {
//             let sum = 0;
//             for (i = 0; i < itemNodes.length; i++) {
//               if (itemNodes[i].scrollHeight > 0) {
//                 sum += itemNodes[i].scrollHeight;
//               }
//             }
//             return sum;
//           };
//           item.parentElement.lastElementChild.style.height = item.parentElement.lastElementChild.scrollHeight + "px";
//         } else {
//           item.parentElement.lastElementChild.style.height = item.parentElement.lastElementChild.scrollHeight + "px";
//         }
//       }
//     })
//   );
// }
// accordion();

// document.querySelectorAll(".stories-inner-tab>*").forEach((item) => {
//   item.addEventListener("click", () => {
//     document.querySelectorAll(".stories-inner-tab-div-content>*").forEach(item => {
//       if (item.classList.contains("stories-inner-tab-div-content-visibility")) {
//         item.classList.remove("stories-inner-tab-div-content-visibility");
//       }
//     });
//     document.querySelector(`.${item.textContent.toLowerCase()}`).classList.toggle("stories-inner-tab-div-content-visibility");
//   });
// });