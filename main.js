const data = [
    {
      year: "2022",
      text: "End of my general secondary studies."
    },
    {
      year: "2023",
      text: "First year in computer science at HE2B in Brussels, where the basics were introduced."
    },
    {
      year: "2024",
      text: "Second year in college with a deeper focus on Python, Java, and CSS."
    },
    {
      year: "2025",
      text: "MolenGeek training in web development + internship."
    }
  ];
  
  
  let currentIndex = 0;
  
  const timelineContent = document.getElementById("timelineContent");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  
  function updateContent(index) {
    timelineContent.innerHTML = `
      <h2>${data[index].year}</h2>
      <p>${data[index].text}</p>
    `;
  }
  
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + data.length) % data.length;
    updateContent(currentIndex);
  });
  
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % data.length;
    updateContent(currentIndex);
  });
  const projets = [
    {
      titre: "CBIENBON",
      description: "Site de restaurant avec modale vidéo, menu filtrable, carrousel d’événements et galerie interactive."
    },
    {
      titre: "Todolist",
      description: "Projet personnel pour pratiquer HTML/CSS/JS et apprendre le responsive design. Structure propre, flexbox, media queries."
    },
    {
      titre: "ROMYK",
      description: "Site professionel pour présenter un commerce de glace avec plusieurs options js."
    }
  ];
  
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const closeBtn = document.querySelector(".close");
  const cards = document.querySelectorAll(".pro-card");
  
  // ouvrir modale
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      modalTitle.textContent = projets[id].titre;
      modalDescription.textContent = projets[id].description;
      modal.style.display = "flex";
    });
  });
  
  // fermer modale
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
  const scrollTopBtn = document.getElementById("scrollTopBtn");

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
function updateContent(index) {
    // Ajouter animation
    timelineContent.classList.remove("fade-in");
    timelineContent.classList.add("fade");
  
    setTimeout(() => {
      timelineContent.innerHTML = `
        <h2>${data[index].year}</h2>
        <p>${data[index].text}</p>
      `;
      timelineContent.classList.remove("fade");
      timelineContent.classList.add("fade-in");
    }, 300); // le temps que le fade-out se fasse
  }
  