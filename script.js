function starteMarketingBot() {
  const zielgruppe = document.getElementById("zielgruppe").value.trim();
  const statusText = document.getElementById("statusText");

  if (zielgruppe) {
    statusText.textContent = `Ghost.MarketingBot scannt jetzt das Netz nach Kunden aus der Zielgruppe: "${zielgruppe}" ...`;
    statusText.style.color = "#ffd700";

    // Hier später API oder Automation einsetzen
    setTimeout(() => {
      statusText.textContent += "\nErste Kontakte werden vorbereitet...";
    }, 3000);
  } else {
    statusText.textContent = "Bitte gib eine Zielgruppe ein.";
    statusText.style.color = "red";
  }
}
