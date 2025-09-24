const speakers = [
  {
    nom: "Aïcha Traoré",
    photo: "assets/img/aicha.jpg",
    bio: "Designer UX spécialisée en accessibilité numérique.",
    details: "Aïcha travaille depuis 10 ans sur des projets inclusifs en Afrique de l’Ouest. Elle collabore avec des ONG et des startups tech.",
    twitter: "https://twitter.com/aichatraore",
    linkedin: "https://linkedin.com/in/aichatraore"
  },
  {
    nom: "Moussa Diallo",
    photo: "assets/img/moussa.jpg",
    bio: "Développeur Flutter & architecte mobile.",
    details: "Moussa a lancé plusieurs apps fintech et forme des jeunes développeurs à Ouagadougou.",
    twitter: "",
    linkedin: "https://linkedin.com/in/moussadiallo"
  },
  {
    nom: "Fatou Bamba",
    photo: "assets/img/fatou.jpg",
    bio: "Consultante en cash management et UX bancaire.",
    details: "Fatou accompagne les institutions financières dans la digitalisation des processus de caisse.",
    twitter: "https://twitter.com/fatoubamba",
    linkedin: ""
  }
];

function renderSpeakers() {
  const grid = document.getElementById("speakersGrid");
  grid.innerHTML = "";

  speakers.forEach((s, index) => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    const card = document.createElement("div");
    card.className = "card h-100 shadow-sm";

    const img = document.createElement("img");
    img.src = s.photo;
    img.className = "card-img-top";
    img.alt = s.nom;

    const body = document.createElement("div");
    body.className = "card-body";

    body.innerHTML = `
      <h5 class="card-title">${s.nom}</h5>
      <p class="card-text">${s.bio}</p>
      <div class="mb-2">
        ${s.twitter ? `<a href="${s.twitter}" target="_blank" class="me-2"><i class="bi bi-twitter"></i></a>` : ""}
        ${s.linkedin ? `<a href="${s.linkedin}" target="_blank"><i class="bi bi-linkedin"></i></a>` : ""}
      </div>
      <button class="btn btn-outline-primary btn-sm" onclick="showDetails(${index})">Voir plus</button>
    `;

    card.appendChild(img);
    card.appendChild(body);
    col.appendChild(card);
    grid.appendChild(col);
  });
}

function showDetails(index) {
  const s = speakers[index];
  const modalContent = document.getElementById("modalContent");
  modalContent.innerHTML = `
    <div class="d-flex flex-column align-items-center text-center">
      <img src="${s.photo}" alt="${s.nom}" class="rounded-circle mb-3" width="120">
      <h4>${s.nom}</h4>
      <p>${s.details}</p>
      <div>
        ${s.twitter ? `<a href="${s.twitter}" target="_blank" class="me-2"><i class="bi bi-twitter"></i></a>` : ""}
        ${s.linkedin ? `<a href="${s.linkedin}" target="_blank"><i class="bi bi-linkedin"></i></a>` : ""}
      </div>
    </div>
  `;
  const modal = new bootstrap.Modal(document.getElementById("speakerModal"));
  modal.show();
}

renderSpeakers();
