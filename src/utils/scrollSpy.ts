export function initScrollSpy(callback: (id: string) => void) {
	const sections = document.querySelectorAll("section[id]");

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const id = entry.target.getAttribute("id");
					if (id) callback(id);
				}
			});
		},
		{
			rootMargin: "-50% 0px -50% 0px",
			threshold: 0,
		}
	);

	sections.forEach((section) => observer.observe(section));
}
