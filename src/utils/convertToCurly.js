export default function convertToCurly(text) {
	if (typeof text !== "string") {
		return "";
	}

	let result = "";
	let isOpenQuote = true;
	// Iterate through each character in the string
	for (let i = 0; i < text.length; i++) {
		if (text[i] === '"') {
			// Replace with opening or closing curly quote
			result += isOpenQuote ? "“" : "”";
			isOpenQuote = !isOpenQuote; // Toggle between open and close
		} else {
			result += text[i];
		}
	}

	return result;
}
