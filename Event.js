const events = [
  {
    name: "Tech Conference 2025",
    date: "July 20, 2025",
    time: "10:00 AM",
    location: "Lahore Expo Center",
    description: "Explore the latest in tech with keynote speakers from around the world.",
    image: "./tech.jpeg"
  },
  {
    name: "Food Carnival",
    date: "August 5, 2025",
    time: "12:00 PM",
    location: "Gulberg Park",
    description: "Enjoy food from top vendors and live music all day long.",
    image: "./food.jpeg"
  },
  {
    name: "Startup Pitch Night",
    date: "September 10, 2025",
    time: "6:00 PM",
    location: "NEST I/O",
    description: "Watch startups pitch their ideas to a panel of investors.",
    image: "./startup.jpeg"
  },
  {
    name: "Art Exhibition",
    date: "July 15, 2025",
    time: "3:00 PM",
    location: "Art Museum Hall",
    description: "A showcase of modern art by emerging local artists.",
    image: "./art.jpeg"
  },
  {
    name: "Health & Wellness Fair",
    date: "August 25, 2025",
    time: "9:00 AM",
    location: "City Sports Complex",
    description: "Discover health services, free check-ups, and wellness products.",
    image: "./health.jpeg"
  }
];

const eventsContainer = document.getElementById("eventsContainer");
const searchBar = document.getElementById("searchBar");

function displayEvents(filteredEvents) {
  eventsContainer.innerHTML = "";
  filteredEvents.forEach(event => {
    const card = document.createElement("div");
    card.classList.add("event-card");
    card.innerHTML = `
      <img src="${event.image}" alt="${event.name}" class="event-img" />
      <h3>${event.name}</h3>
      <p><strong>Date:</strong> ${event.date}</p>
      <p><strong>Time:</strong> ${event.time}</p>
      <p><strong>Location:</strong> ${event.location}</p>
      <p>${event.description}</p>
      <button class="register-btn">Register</button>
    `;
    eventsContainer.appendChild(card);
  });
}

displayEvents(events);

searchBar.addEventListener("input", () => {
  const searchTerm = searchBar.value.toLowerCase();
  const filtered = events.filter(event => event.name.toLowerCase().includes(searchTerm));
  displayEvents(filtered);
});