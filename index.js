/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function randomOrganizer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;

  return { occupation, name, rate };
}

const FreeLancers = Array.from({ length: NUM_FREELANCERS }, randomOrganizer);

function averageRate() {
  if (!FreeLancers.length) return 0;

  const total = FreeLancers.reduce(
    (sum, freelancer) => sum + freelancer.rate,
    0
  );
  return total / FreeLancers.length;
}
function FreelancerCard(freelancer) {
  const { name, occupation, rate } = freelancer;

  const card = document.createElement("div");
  card.classList.add("freelancer-card");

  card.innerHTML = `
    <h3>${name}</h3>
    <p>${occupation}</p>
    <p>Rate: $${rate}</p>
  `;

  return card;
}
function FreelancersList(freelancers) {
  const container = document.createElement("div");
  container.classList.add("freelancers-list");

  freelancers.forEach((freelancer) => {
    const card = FreelancerCard(freelancer);
    container.appendChild(card);
  });

  return container;
}
function AverageRateComponent(rate) {
  const element = document.createElement("div");
  element.classList.add("average-rate");
  element.textContent = `Average Rate: $${rate.toFixed(2)}`;
  return element;
}
function AverageRateComponent(averageRate) {
  const element = document.createElement("div");
  element.classList.add("average-rate");
  element.textContent = `Average Rate: $${averageRate.toFixed(2)}`;
  return element;
}
function renderApp(freelancers) {
  const app = document.createElement("div");
  app.id = "app";

  const average = calculateAverageRate(freelancers);
  const avgComponent = AverageRateComponent(average);
  const listComponent = FreelancersList(freelancers);

  app.appendChild(avgComponent);
  app.appendChild(listComponent);

  document.body.appendChild(app);
}
renderApp(FreeLancers);
