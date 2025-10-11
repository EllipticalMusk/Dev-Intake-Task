const projects = [
  {
    name: "Task 1 - Calculator",
    image: "projects/task1/screenshot.png",
    link: "projects/task1/index.html",
    description: "A simple calculator built with HTML, CSS, and JavaScript."
  },
  {
    name: "Task 2 - To-Do App",
    image: "projects/task2/screenshot.png",
    link: "projects/task2/index.html",
    description: "A clean and simple To-Do list app with local storage."
  },
  {
    name: "Task 3 - Weather App",
    image: "projects/task3/screenshot.png",
    link: "projects/task3/index.html",
    description: "A weather forecast app using an open API."
  }
];

const container = document.getElementById("projects-container");

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
