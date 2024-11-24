// Select the toggle button and navbar
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

// Toggle the active class on the navbar
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// document.addEventListener('DOMContentLoaded', () => {
// Recipes content
const recipes = {
  pasta: `
      <h2>Creamy Garlic Pasta</h2>
      <p><strong>Ingredients:</strong> Pasta, garlic, cream, butter, cheese, salt, pepper.</p>
      <p><strong>Steps:</strong> Boil pasta. Sauté garlic. Mix with cream and cheese. Combine with pasta.</p>
    `,
  brownie: `
      <h2>Chocolate Brownie</h2>
      <p><strong>Ingredients:</strong> Flour, cocoa powder, sugar, eggs, butter.</p>
      <p><strong>Steps:</strong> Mix ingredients. Bake at 180°C for 25 minutes. Cool and serve.</p>
    `,
  salad: `
      <h2>Fresh Garden Salad</h2>
      <p><strong>Ingredients:</strong> Lettuce, tomatoes, cucumbers, olive oil, salt, lemon juice.</p>
      <p><strong>Steps:</strong> Chop veggies. Mix with olive oil, salt, and lemon juice.</p>
    `,
};

// Modal elements
const modal = document.getElementById("recipe-modal");
const modalContent = document.getElementById("modal-recipe-content");
const closeModalButton = document.querySelector(".close-btn");

// Show modal when "View Recipe" button is clicked
document.querySelectorAll(".view-recipe-btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    const recipeKey = e.target.dataset.recipe;
    modalContent.innerHTML = recipes[recipeKey]; // Insert recipe details
    modal.classList.add("visible");
  });
});

// Close modal when close button is clicked
closeModalButton.addEventListener("click", () => {
  modal.classList.remove("visible");
});

// Close modal when clicking outside the modal content
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("visible");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Elements for each category
  const sections = {
    vegetarian: {
      button: document.getElementById("vegetarian-btn"),
      section: document.getElementById("vegetarian-section"),
      recipeImage: document.getElementById("recipe-image"),
      recipeList: document.querySelectorAll(".recipe-list li"),
      closeButton: document.getElementById("veg-close"),
      images: {
        paneer: { src: "paneer.png", alt: "Paneer Butter Masala" },
        rajma: { src: "rajma.png", alt: "Rajma Masala" },
        missi: { src: "missi.png", alt: "Missi Roti" },
        bhindi: { src: "bhindi.png", alt: "Bhindi Masala (Okra Masala)" },
        palak: {
          src: "palak.png",
          alt: "Palak Paneer (Spinach and Cottage Cheese)",
        },
      },
    },
    nonVegetarian: {
      button: document.getElementById("non-veg-btn"),
      section: document.getElementById("non-veg-section"),
      recipeImage: document.getElementById("non-veg-image"),
      recipeList: document.querySelectorAll(".non-veg-list li"),
      closeButton: document.getElementById("non-veg-close"),
      images: {
        chicken: { src: "butter chicken.png", alt: "Butter Chicken" },
        fish: { src: "fish curry.png", alt: "Fish Curry" },
        mutton: { src: "mutton.png", alt: "Mutton Rogan Josh" },
        egg: { src: "egg curry.png", alt: "Egg Curry" },
        prawns: { src: "prawns.png", alt: "Prawns Masala" },
      },
    },
    desserts: {
      button: document.getElementById("desserts-btn"),
      section: document.getElementById("desserts-section"),
      recipeImage: document.getElementById("desserts-image"),
      recipeList: document.querySelectorAll(".desserts-list li"),
      closeButton: document.getElementById("desserts-close"),
      images: {
        cake: { src: "cake.jpg", alt: "Chocolate Fudge Cake" },
        icecream: { src: "vanilla.png", alt: "Vanilla Ice Cream" },
        gulabJamun: { src: "gulab jamun.png", alt: "Gulab Jamun" },
        pudding: { src: "strawberry.png", alt: "Strawberry Cake" },
        pastry: { src: "cookies.png", alt: "Chocolate cookies" },
      },
    },
    healthy: {
      button: document.getElementById("healthy-btn"),
      section: document.getElementById("healthy-section"),
      recipeImage: document.getElementById("healthy-image"),
      recipeList: document.querySelectorAll(".healthy-list li"),
      closeButton: document.getElementById("healthy-close"),
      images: {
        salad: { src: "fresh summer2.png", alt: "Fresh Summer Salad" },
        smoothie: { src: "bluberry.png", alt: "Bluberry Smoothie" },
        oats: { src: "oats.png", alt: "Oats Porridge" },
        soup: { src: "soup.png", alt: "Vegetable Soup" },
        quinoa: { src: "quinoa.png", alt: "Quinoa Bowl" },
      },
    },
    starters: {
      button: document.getElementById("starters-btn"),
      section: document.getElementById("starters-section"),
      recipeImage: document.getElementById("starters-image"),
      recipeList: document.querySelectorAll(".starters-list li"),
      closeButton: document.getElementById("starters-close"),
      images: {
        samosa: { src: "samosa2.png", alt: "Samosa" },
        springRoll: { src: "spring.png", alt: "Spring Roll" },
        kebab: { src: "kebab.png", alt: "Kebab" },
        bruschetta: { src: "bruschetta.png", alt: "Bruschetta" },
        nachos: { src: "cheeseball.png", alt: "Cheese Ball" },
      },
    },
    mainCourse: {
      button: document.getElementById("main-course-btn"),
      section: document.getElementById("main-course-section"),
      recipeImage: document.getElementById("main-course-image"),
      recipeList: document.querySelectorAll(".main-course-list li"),
      closeButton: document.getElementById("main-course-close"),
      images: {
        biryani: { src: "biryani.png", alt: "Chicken Biryani" },
        pizza: { src: "pizza.png", alt: "Pizza" },
        lasagna: { src: "lasgna.png", alt: "Lasagna" },
        curry: { src: "vegetable curry.png", alt: "Vegetable Curry" },
      },
    },
  };

  // Attach functionality for each section
  Object.keys(sections).forEach((key) => {
    const { button, section, recipeImage, recipeList, closeButton, images } =
      sections[key];

    // Show the section
    button?.addEventListener("click", () => {
      section.style.display = "flex";
    });

    // Hide the section
    closeButton?.addEventListener("click", () => {
      section.style.display = "none";
    });

    // Update the recipe image on item click
    recipeList.forEach((item) => {
      item.addEventListener("click", () => {
        const recipeKey = item.dataset.recipe;
        if (images[recipeKey]) {
          recipeImage.src = images[recipeKey].src;
          recipeImage.alt = images[recipeKey].alt;
        }
      });
    });
  });
});
