export function animateOnScroll(selector = ".reveal") {
	const elements = document.querySelectorAll<HTMLElement>(selector);

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const { classList } = entry.target;
					classList.add("opacity-100", "translate-y-0");
					classList.remove("opacity-0", "translate-y-4");
					observer.unobserve(entry.target);
				}
			});
		},
		{
			threshold: 0.1,
		}
	);

	elements.forEach((el) => observer.observe(el));
}
