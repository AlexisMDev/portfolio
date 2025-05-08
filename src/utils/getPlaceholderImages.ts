export function getPlaceholderImages(text: string, width = 600, height = 300, bg = "1e293b", color = "ffffff") {
	const encodeText = encodeURIComponent(text);
	return `https://placehold.co/${width}x${height}/${bg}/${color}?text=${encodeText}`;
}
