function starteBot() {
  const zielgruppe = document.getElementById("zielgruppe").value;
  const ergebnis = document.getElementById("ergebnis");

  if (zielgruppe.trim() === "") {
    ergebnis.textContent = "Bitte gib eine Zielgruppe ein.";
    return;
  }

  ergebnis.textContent = `Ghost.MarketingBot scannt jetzt das Netz nach Kunden aus der Zielgruppe: "${zielgruppe}" ...`;
}
