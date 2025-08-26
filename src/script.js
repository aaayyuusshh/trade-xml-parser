document.getElementById("parseBtn").addEventListener("click", parseXML);

function parseXML() {
    const parser = new DOMParser();
    const xmlString = document.getElementById("xmlInput").value.trim();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");
    const outputEl = document.getElementById("output");

    if (xmlDoc.documentElement.nodeName !== "trades") {
        outputEl.innerHTML = "<span class='error'>Error: XML must start with &lt;trades&gt;</span>";
        return;
    }

    const trades = xmlDoc.getElementsByTagName("trade");
    let result = "Parsed Trades:\n\n";

    let totalQuantity = 0;
    let totalPrice = 0;

    for (let i = 0; i < trades.length; i++) {
        const trade = trades[i];
        const id = trade.getElementsByTagName("id")[0]?.textContent || "";
        const symbol = trade.getElementsByTagName("symbol")[0]?.textContent || "";
        const quantity = parseFloat(trade.getElementsByTagName("quantity")[0]?.textContent) || 0;
        const price = parseFloat(trade.getElementsByTagName("price")[0]?.textContent) || 0;

        result += `Trade ID: ${id} | Symbol: ${symbol} | Quantity: ${quantity} | Price: ${price}\n`;

        totalQuantity += quantity;
        totalPrice += price * quantity;
    }

    result += `<strong>\nGrand Total Quantity: ${totalQuantity}</strong>\n`;
    result += `<strong>Grand Total Price: $${totalPrice.toFixed(2)}</strong>`;

    outputEl.innerHTML = `${result.replace(/\n/g, '<br>')}`;
}

function copyOutput() {
    const output = document.getElementById("output").textContent;
    navigator.clipboard.writeText(output).then(() => {
        alert("Output copied to clipboard!");
    }).catch(err => {
        alert("Failed to copy text: ", err);
    });
}

function downloadOutput() {
    const output = document.getElementById("output").textContent;
    const blob = new Blob([output.replace(/\n/g, "\r\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "parsed.txt";
    a.click();

    URL.revokeObjectURL(url);
}
