import { initScrollSpy } from "../../src/utils/scrollSpy";
import { animateOnScroll } from "../../src/utils/animateOnScroll";
import { handleContactForm } from "../../src/utils/contactForms";

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
