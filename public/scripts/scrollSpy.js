import { initScrollSpy } from "../../src/utils/scrollSpy";

document.addEventListener("DOMContentLoaded", () => {
	initScrollSpy((id) => {
		document.querySelectorAll("#navbar a").forEach((item) => {
			item.classList.remove("font-bold", "text-primary");
			if (item.getAttribute("href") === `#${id}`) {
				item.classList.add("font-bold", "text-primary");
			}
		});
	});
});
