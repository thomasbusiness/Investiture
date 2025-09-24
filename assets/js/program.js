const sessions = [
  {
    titre: "Ouverture officielle",
    heure: "09h00",
    theme: "Général",
    salle: "Salle A",
    description: "Présentation de la journée et des intervenants."
  },
  {
    titre: "Atelier UX pour apps locales",
    heure: "10h30",
    theme: "UX",
    salle: "Salle B",
    description: "Méthodes UX adaptées aux contextes africains."
  },
  {
    titre: "Démo Flutter & mobile banking",
    heure: "11h30",
    theme: "Mobile",
    salle: "Salle A",
    description: "Cas pratique d’intégration mobile pour fintech."
  },
  {
    titre: "Pause déjeuner & networking",
    heure: "13h00",
    theme: "Général",
    salle: "Espace libre",
    description: "Rencontres informelles entre participants."
  },
  {
    titre: "Cash management & design",
    heure: "14h30",
    theme: "UX",
    salle: "Salle A",
    description: "Optimisation des workflows de caisse."
  }
];

function renderProgram(filter = "all") {
  const container = document.getElementById("programList");
  container.innerHTML = "";

  const filtered = sessions.filter(s =>
    filter === "all" ||
    s.theme === filter ||
    s.salle === filter
  );

  filtered.forEach(s => {
    const col = document.createElement("div");
    col.className = "col-md-6 mb-4";

    const card = document.createElement("div");
    card.className = "card shadow-sm";

    const body = document.createElement("div");
    body.className = "card-body";

    body.innerHTML = `
      <h5 class="card-title">${s.heure} – ${s.titre}</h5>
      <p class="card-text">${s.description}</p>
      <span class="badge bg-info me-2">${s.theme}</span>
      <span class="badge bg-secondary">${s.salle}</span>
    `;

    card.appendChild(body);
    col.appendChild(card);
    container.appendChild(col);
  });
}

function filterProgram(tag) {
  renderProgram(tag);
}

renderProgram();
