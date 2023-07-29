// This is a JavaScript code that filters a list of cards based on the filter buttons clicked by the user. Here’s a brief explanation of what the code does:

// The code selects all the filter buttons and filterable cards using querySelectorAll and stores them in filterButtons and filterableCards respectively.
// The filterCards function is defined to filter the cards based on the filter button clicked by the user.
// When a filter button is clicked, the function removes the active class from the previously active button and adds it to the clicked button.
// The function then iterates over all the filterable cards and checks if the card’s data-name attribute matches the clicked filter button’s data-filter attribute or if the clicked filter button’s data-filter attribute is "all".
// If either of these conditions is true, the card is shown by replacing its "hide" class with "show". Otherwise, the card is hidden by adding the "hide" class.
// Finally, an event listener is added to each filter button to call the filterCards function when clicked.


// Select relevant HTML elements
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");

// console.log(filterButtons,filterableCards);

// Function to filter cards based on filter buttons
const filterCards = (e) => {
  document.querySelector("#filter-buttons .active").classList.remove("active");
  e.target.classList.add("active");

  filterableCards.forEach((card) => {
    // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
    if (
      card.dataset.name === e.target.dataset.filter ||
      e.target.dataset.filter === "all"
    ) {
      return card.classList.replace("hide", "show");
    }
    card.classList.add("hide");
  });
};

filterButtons.forEach((button) =>
  button.addEventListener("click", filterCards)
);


