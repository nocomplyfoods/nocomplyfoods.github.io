/**
 * Converts straight apostrophes (') in a string to curly apostrophes (')
 * @param {string} text - The input text containing straight apostrophes
 * @return {string} - Text with straight apostrophes replaced by curly apostrophes
 */
export default function convertApostrophe(text) {
	if (typeof text !== "string") {
		return "";
	}

	// Simple replacement of all straight apostrophes with curly ones
	return text.replace(/'/g, "’");
}

// Example usage:
// const original = "I can't believe it's already done!";
// const converted = convertToCurlyApostrophes(original);
// console.log(converted); // I can't believe it's already done!
