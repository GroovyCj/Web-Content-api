function normalizeUrl(input) {
    let url = input.trim();

    // add protocol if missing
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url;
    }

    try {
        const parsed = new URL(url);

        // optional: remove "www."
        let hostname = parsed.hostname.replace(/^www\./, "");

        return `${parsed.protocol}//${hostname}${parsed.pathname}${parsed.search}`;
    } catch (err) {
        return null; // invalid URL
    }
}

document.getElementById("search-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const rawInput = document.getElementById("url-input").value;
    const normalized = normalizeUrl(rawInput);

    if (!normalized) {
        alert("Please enter a valid URL");
        return;
    }

    const response = await fetch("/ingest", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ url: normalized })
    });

    const data = await response.json();
    console.log(data);
});