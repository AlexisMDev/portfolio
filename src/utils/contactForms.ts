export function handleContactForm(formSelector = "#contact-form") {
	const form = document.querySelector<HTMLFormElement>(formSelector);
	const responseMessage = document.getElementById("form-response");

	if (!form || !responseMessage) return;

	form.addEventListener("submit", async (evt) => {
		evt.preventDefault();

		const formData = new FormData(form);

		try {
			const res = await fetch("https://formspree.io/f/xyzwlodo", {
				method: "POST",
				headers: { Accept: "application/json" },
				body: formData,
			});

			if (res.ok) {
				form.reset();
				responseMessage.textContent = "✅ Merci pour votre message, je vous répondrai dans les plus brefs délais.";
				responseMessage.className = "text-success mt-4";
			} else {
				const data = await res.json();
				responseMessage.textContent = data?.error || "❌ Une erreur est survenue.";
				responseMessage.className = "text-error mt-4";
			}
		} catch {
			responseMessage.textContent = "❌ Erreur réseau. Réessayez plus tard.";
			responseMessage.className = "text-error mt-4";
		}
	});
}
