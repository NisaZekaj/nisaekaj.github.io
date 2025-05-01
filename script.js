function starteBot() {
    const zielgruppe = document.getElementById("zielgruppe").value;
    const status = document.getElementById("status");
    const formular = document.getElementById("kontaktformular");

    if (zielgruppe.trim() === "") {
        status.textContent = "Bitte gib eine Zielgruppe ein.";
        return;
    }

    status.textContent = `Ghost.MarketingBot scannt das Netz nach: "${zielgruppe}" ... Erste qualifizierte Leads entdeckt!`;
    formular.style.display = "block";
}
