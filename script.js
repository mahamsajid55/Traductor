async function translateText() {
    const spanishText = document.getElementById("spanishText").value;
    const englishText = document.getElementById("englishText");

    if (!spanishText) {
        englishText.value = ""; // Clear output if input is empty
        return;
    }

    try {
        // Using LibreTranslate API (Free Translation)
        const response = await fetch("https://libretranslate.de/translate", {
            method: "POST",
            body: JSON.stringify({
                q: spanishText,
                source: "es",
                target: "en",
                format: "text"
            }),
            headers: { "Content-Type": "application/json" }
        });

        const data = await response.json();
        englishText.value = data.translatedText;
    } catch (error) {
        englishText.value = "Translation error!";
        console.error("Error:", error);
    }
}

// Auto-translate as user types
document.getElementById("spanishText").addEventListener("input", translateText);
