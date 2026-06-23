const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const inventorySearch = document.getElementById("inventorySearch");
const carCards = document.querySelectorAll(".car-card[data-car]");

if (inventorySearch && carCards.length) {
  inventorySearch.addEventListener("input", () => {
    const query = inventorySearch.value.trim().toLowerCase();

    carCards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      card.hidden = query.length > 0 && !text.includes(query);
    });
  });
}

const carFeatures = {
  "BMW 3 Series": [
    "Engine: 2.0L Turbocharged 4-cylinder",
    "Horsepower: 255 hp",
    "Fuel Economy: 26 MPG city / 36 MPG highway",
    "Transmission: 8-speed automatic",
    "Seats: 5",
    "Safety: Advanced driver assistance features"
  ],
  "BMW X5": [
    "Engine: 3.0L Turbocharged inline-6",
    "Horsepower: 335 hp",
    "Fuel Economy: 21 MPG city / 26 MPG highway",
    "Transmission: 8-speed automatic",
    "Seats: 5",
    "All-Wheel Drive"
  ],
  "BMW i8": [
    "Engine: Plug-in hybrid 1.5L 3-cylinder + electric motor",
    "Horsepower: 369 hp combined",
    "Fuel Economy: 69 MPGe combined",
    "Transmission: 6-speed automatic",
    "Seats: 2",
    "Carbon-fiber reinforced plastic body"
  ],
  "BMW M4": [
    "Engine: 3.0L Twin-Turbo inline-6",
    "Horsepower: 473 hp",
    "Fuel Economy: 16 MPG city / 23 MPG highway",
    "Transmission: 6-speed manual or 8-speed automatic",
    "Seats: 4",
    "Sport-tuned suspension"
  ],
  "Subaru Outback": [
    "Engine: 2.5L 4-cylinder Boxer",
    "Horsepower: 182 hp",
    "Fuel Economy: 26 MPG city / 33 MPG highway",
    "Transmission: CVT automatic",
    "Seats: 5",
    "Standard all-wheel drive"
  ],
  "Subaru WRX": [
    "Engine: 2.0L Turbocharged Boxer 4-cylinder",
    "Horsepower: 268 hp",
    "Fuel Economy: 21 MPG city / 27 MPG highway",
    "Transmission: 6-speed manual or CVT",
    "Seats: 5",
    "Performance-tuned suspension"
  ],
  "Subaru Forester": [
    "Engine: 2.5L 4-cylinder Boxer",
    "Horsepower: 182 hp",
    "Fuel Economy: 26 MPG city / 33 MPG highway",
    "Transmission: CVT automatic",
    "Seats: 5",
    "Spacious interior and cargo space"
  ],
  "Subaru BRZ": [
    "Engine: 2.0L Boxer 4-cylinder",
    "Horsepower: 228 hp",
    "Fuel Economy: 21 MPG city / 30 MPG highway",
    "Transmission: 6-speed manual or automatic",
    "Seats: 4",
    "Rear-wheel drive sports car"
  ],
  "Mazda 3": [
    "Engine: 2.5L 4-cylinder",
    "Horsepower: 186 hp",
    "Fuel Economy: 28 MPG city / 36 MPG highway",
    "Transmission: 6-speed automatic",
    "Seats: 5",
    "Advanced safety features"
  ],
  "Mazda CX-5": [
    "Engine: 2.5L 4-cylinder",
    "Horsepower: 187 hp",
    "Fuel Economy: 24 MPG city / 30 MPG highway",
    "Transmission: 6-speed automatic",
    "Seats: 5",
    "Premium interior with touchscreen"
  ],
  "Mazda 6": [
    "Engine: 2.5L 4-cylinder Turbo",
    "Horsepower: 250 hp",
    "Fuel Economy: 26 MPG city / 35 MPG highway",
    "Transmission: 6-speed automatic",
    "Seats: 5",
    "Sporty handling and luxury interior"
  ],
  "Mazda MX-5": [
    "Engine: 2.0L 4-cylinder",
    "Horsepower: 181 hp",
    "Fuel Economy: 26 MPG city / 35 MPG highway",
    "Transmission: 6-speed manual or automatic",
    "Seats: 2",
    "Lightweight roadster with agile handling"
  ],
  "Toyota Corolla": [
    "Engine: 1.8L 4-cylinder",
    "Horsepower: 139 hp",
    "Fuel Economy: 30 MPG city / 38 MPG highway",
    "Transmission: CVT automatic",
    "Seats: 5",
    "Reliable and fuel-efficient"
  ],
  "Toyota Camry": [
    "Engine: 2.5L 4-cylinder",
    "Horsepower: 203 hp",
    "Fuel Economy: 28 MPG city / 39 MPG highway",
    "Transmission: 8-speed automatic",
    "Seats: 5",
    "Spacious and comfortable interior"
  ],
  "Toyota RAV4": [
    "Engine: 2.5L 4-cylinder",
    "Horsepower: 203 hp",
    "Fuel Economy: 27 MPG city / 35 MPG highway",
    "Transmission: 8-speed automatic",
    "Seats: 5",
    "Standard safety suite and AWD option"
  ],
  "Toyota Prado": [
    "Engine: 2.8L Turbo Diesel",
    "Horsepower: 201 hp",
    "Fuel Economy: 22 MPG combined",
    "Transmission: 6-speed automatic",
    "Seats: 7",
    "Off-road capability and luxury interior"
  ]
};

const modal = document.getElementById("carModal");
const modalTitle = document.getElementById("modalTitle");
const modalFeatures = document.getElementById("modalFeatures");
const closeModalBtn = document.getElementById("closeModal");

function closeModal() {
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

function showModal(carName) {
  if (!modal || !modalTitle || !modalFeatures) return;

  modalTitle.textContent = carName;
  modalFeatures.innerHTML = "";

  const features = carFeatures[carName] || ["No details available."];
  features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    modalFeatures.appendChild(li);
  });

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  closeModalBtn?.focus();
}

document.querySelectorAll(".view-details-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const carItem = button.closest("[data-car]");
    if (carItem) showModal(carItem.getAttribute("data-car"));
  });
});

closeModalBtn?.addEventListener("click", closeModal);

modal?.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

async function handleFormSubmit(form, successMessage, errorMessage) {
  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      alert(successMessage);
      form.reset();
    } else {
      alert(errorMessage);
    }
  } catch (error) {
    alert(errorMessage);
  }
}

const orderForm = document.getElementById("orderForm");
orderForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  handleFormSubmit(orderForm, "Order placed successfully!", "Something went wrong. Please try again.");
});

const contactForm = document.getElementById("contactForm");
contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  handleFormSubmit(contactForm, "Message sent successfully!", "Error submitting the form.");
});
