import { initScrollSpy } from "../utils/scrollSpy";
import { animateOnScroll } from "../utils/animateOnScroll";
import { handleContactForm } from "../utils/contactForms";

document.addEventListener("DOMContentLoaded", () => {
	initScrollSpy((id) => {
		document.querySelectorAll("#navbar a").forEach((item) => {
			item.classList.remove("font-bold", "bg-primary");
			if (item.getAttribute("href") === `#${id}`) {
				item.classList.add("font-bold", "bg-primary");
			}
		});
	});

	animateOnScroll();
	handleContactForm();
});
