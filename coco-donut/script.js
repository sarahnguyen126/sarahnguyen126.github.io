// $(document).ready(function () {
//   $("nav li").click(function () {
//     $("nav li").removeClass("current");
//     $(this).addClass("current");
//   });
// });

window.addEventListener('DOMContentLoaded', () => {

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('current');
			} else {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('current');
			}
		});
	});

	// Track all sections that have an `id` applied
	document.querySelectorAll('section[id]').forEach((section) => {
		observer.observe(section);
	});
	
});

window.addEventListener("load", () => {
	const loader = document.querySelector(".loader");
	loader.classList.add("loader-hidden");
	loader.addEventListener("transitionend", () => {
		document.body.removeChild("loader");
	})
})