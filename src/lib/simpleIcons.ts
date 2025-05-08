import * as simpleIcons from "simple-icons";
import type { SimpleIcon } from "simple-icons";

export function getIconBySlug(slug: string): SimpleIcon | null {
	const icons = Object.values(simpleIcons) as SimpleIcon[];
	const icon = icons.find((icon) => icon.slug === slug);
	return icon || null;
}
