// $(document).ready(function () {
//   $("nav li").click(function () {
//     $("nav li").removeClass("current");
//     $(this).addClass("current");
//   });
// });

// window.addEventListener("DOMContentLoaded", () => {
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       const id = entry.target.getAttribute("id");
//       if (entry.intersectionRatio > 0) {
//         document
//           .querySelector(`nav li a[href="#${id}"]`)
//           .parentElement.classList.add("current");
//       } else {
//         document
//           .querySelector(`nav li a[href="#${id}"]`)
//           .parentElement.classList.remove("current");
//       }
//     });
//   });

//   // Track all sections that have an `id` applied
//   document.querySelectorAll("section[id]").forEach((section) => {
//     observer.observe(section);
//   });
// });

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.classList.add("loader-hidden");
  }, 2700);
  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});


const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop =
      current.getBoundingClientRect().top + window.pageYOffset - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navigation a[href*=" + sectionId + "]")
        .classList.add("current");
    } else {
      document
        .querySelector(".navigation a[href*=" + sectionId + "]")
        .classList.remove("current");
    }
  });
}
