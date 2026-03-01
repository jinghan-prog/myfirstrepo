const data = window.portfolioData;

const focusList = document.querySelector('#focus-list');
const aboutText = document.querySelector('#about-text');
const strengthList = document.querySelector('#strength-list');
const projectGrid = document.querySelector('#project-grid');
const processList = document.querySelector('#process-list');
const emailLink = document.querySelector('#email-link');
const year = document.querySelector('#year');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

for (const item of data.focusAreas) {
  const li = document.createElement('li');
  li.textContent = item;
  focusList.appendChild(li);
}

aboutText.textContent = data.about;

for (const item of data.strengths) {
  const li = document.createElement('li');
  li.textContent = item;
  strengthList.appendChild(li);
}

for (const project of data.projects) {
  const card = document.createElement('article');
  card.className = 'project-card';
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.summary}</p>
    <div class="project-meta">
      <span>${project.role}</span>
      <span>${project.year}</span>
    </div>
  `;

  projectGrid.appendChild(card);
}

for (const step of data.process) {
  const li = document.createElement('li');
  li.textContent = step;
  processList.appendChild(li);
}

emailLink.href = `mailto:${data.contactEmail}`;
emailLink.textContent = `Email ${data.contactEmail}`;
year.textContent = new Date().getFullYear();

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

for (const link of nav.querySelectorAll('a')) {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
}
