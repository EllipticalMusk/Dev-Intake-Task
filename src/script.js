const container = document.getElementById("projects-container");

fetch("projects.json")
  .then(response => response.json())
  .then(projects => {
    projects.forEach(project => {
      const card = document.createElement("div");
      card.className = "col-md-4 mb-4";

      card.innerHTML = `
        <div class="card project-card h-100 shadow-sm border-0">
          <img src="${project.image}" class="card-img-top" alt="${project.name}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title fw-bold">${project.name}</h5>
            <p class="card-text text-muted flex-grow-1">${project.description}</p>
            <a href="${project.link}" target="_blank" class="modern-btn mt-auto">View Project</a>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error loading projects:", error);
    container.innerHTML = `
      <div class="text-center text-danger">
        <p>⚠️ Failed to load projects. Please check your projects.json file.</p>
      </div>
    `;
  });
