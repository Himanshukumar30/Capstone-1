const base_url = "https://api.spoonacular.com/";
let apiKey = "ac0e17f073af4388a91d75452dfa1051";

/** Search for Recipes on homepage **/
// Show nutrients form when "Nutrients" option is selected
let searchCriteria = document.getElementById("search_criteria");
let nutrientsForm = document.getElementById("nutrients_form");
let searchForm = document.getElementById("search_recipe_form");

if (searchCriteria) {
  searchCriteria.addEventListener("change", function () {
    if (searchCriteria.value === "nutrients") {
      nutrientsForm.style.display = "block";
      searchForm.style.display = "none";
      document.getElementById("search_query").required = false;
      // Add required attribute to nutrients fields when they are shown
      document.getElementById("min_carbs").required = true;
      document.getElementById("max_carbs").required = true;
      document.getElementById("min_protein").required = true;
    } else {
      nutrientsForm.style.display = "none";
      searchForm.style.display = "block";

      // Remove required attribute from nutrients fields when they are hidden
      document.getElementById("min_carbs").required = false;
      document.getElementById("max_carbs").required = false;
      document.getElementById("min_protein").required = false;
    }
  });
}

// Navbar

const navbarToggle = document.getElementById("nav-btn");
const navbarMenu = document.getElementById("navel");

navbarToggle.addEventListener("click", function () {
  if (navbarMenu.style.display === "none") {
    navbarMenu.style.display = "block";
  } else {
    navbarMenu.style.display = "none";
  }
});

// Meal Planner UI

// Function to generate week header (Monday - Sunday)
function generateWeekHeader() {
  let weekdaysHead = $("#weekdays");
  let weekdaysRow = $("<tr>");

  // Define days of week
  let weekdays = [
    "",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // Loop through the weekdays array and add each day as a table header cell
  for (let day = 0; day < weekdays.length; day++) {
    let dayCell = $("<th>").text(weekdays[day]);
    dayCell.attr("class", "p-3 m-1");
    weekdaysRow.append(dayCell);
  }

  // Add the completed weekdays row to the table header
  weekdaysHead.append(weekdaysRow);
}

// Function to generate BreakFast row
function generateBreakfastWeek() {
  let recipeArea = $("#recipe-area");
  let breakfastRow = $("<tr>");
  let firstCell = $("<td>").text("Breakfast");
  firstCell.css({
    transform: "rotate(-90deg)",
  });

  breakfastRow.append(firstCell);
  for (let day = 0; day < 7; day++) {
    let breakfastCell = $("<td>").attr("id", `b-${day}`);
    breakfastCell.html("&#x2795;").attr("class", "h1  border border-secondary");
    breakfastRow.append(breakfastCell);
  }
  recipeArea.append(breakfastRow);
}

// Function to generate Lunch row
function generateLunchWeek() {
  let recipeArea = $("#recipe-area");
  let lunchRow = $("<tr>");
  let firstCell = $("<td>").text("Lunch");
  firstCell.css({
    transform: "rotate(-90deg)",
  });

  lunchRow.append(firstCell);
  for (let day = 0; day < 7; day++) {
    let lunchCell = $("<td>").attr("id", `l-${day}`);
    lunchCell.html("&#x2795;").attr("class", "h1  border border-secondary");
    lunchRow.append(lunchCell);
  }
  recipeArea.append(lunchRow);
}

// Function to generate Dinner row
function generateDinnerWeek() {
  let recipeArea = $("#recipe-area");
  let dinnerRow = $("<tr>");
  let firstCell = $("<td>").text("Dinner");
  firstCell.css({
    transform: "rotate(-90deg)",
  });

  dinnerRow.append(firstCell);
  for (let day = 0; day < 7; day++) {
    let dinnerCell = $("<td>").attr("id", `d-${day}`);
    dinnerCell.html("&#x2795;").attr("class", "h1  border border-secondary");
    dinnerRow.append(dinnerCell);
  }
  recipeArea.append(dinnerRow);
}

// Function to generate Snack row
function generateSnack1Week() {
  let recipeArea = $("#recipe-area");
  let snackRow = $("<tr>");
  let firstCell = $("<td>").text("Snack1");
  firstCell.css({
    transform: "rotate(-90deg)",
  });

  snackRow.append(firstCell);
  for (let day = 0; day < 7; day++) {
    let snackCell = $("<td>").attr("id", `s1-${day}`);
    snackCell.html("&#x2795;").attr("class", "h1  border border-secondary");
    snackRow.append(snackCell);
  }
  recipeArea.append(snackRow);
}

// Function to generate Snack row
function generateSnack2Week() {
  let recipeArea = $("#recipe-area");
  let snackRow = $("<tr>");
  let firstCell = $("<td>").text("Snack2");
  firstCell.css({
    transform: "rotate(-90deg)",
  });

  snackRow.append(firstCell);
  for (let day = 0; day < 7; day++) {
    let snackCell = $("<td>").attr("id", `s2-${day}`);
    snackCell.html("&#x2795;").attr("class", "h1  border border-secondary");
    snackRow.append(snackCell);
  }
  recipeArea.append(snackRow);
}

// Handle button click to start building meal plan
const thead = document.querySelector("thead");

// Handle second click and so on
$("#new-meal-plan").on("click", function () {
  if (thead.children.length > 0) {
    thead.innerHTML = "";
  }
  // show weekdays
  generateWeekHeader();

  // Show reset button
  $("#reset-btn").css("display", "block");

  // Show meal plan name input
  $("#meal_plan_name").css("display", "block");

  // show meal plan row buttons
  $("#Meal-buttons").css("display", "block");

  // Show meal plan save button
  $("#save-meal-plan").css("display", "block");
});

$("#breakfast-button").on("click", function () {
  generateBreakfastWeek();
});

$("#snack1-button").on("click", function () {
  generateSnack1Week();
});

$("#lunch-button").on("click", function () {
  generateLunchWeek();
});

$("#snack2-button").on("click", function () {
  generateSnack2Week();
});

$("#dinner-button").on("click", function () {
  generateDinnerWeek();
});

/*
===============================
Handle click in meal plan table
===============================
*/

let targetCellId;

const recipeArea = document.getElementById("recipe-area");
const recipeWindow = document.getElementById("recipeWindow");

if (recipeArea) {
  function recipeAreaEventListener(event) {
    const clickedCell = event.target;
    if (clickedCell.tagName === "TD") {
      targetCellId = clickedCell.id;
      console.log("clicked", targetCellId);
    }
    recipeWindow.style.display = "block";
  }

  recipeArea.addEventListener("click", recipeAreaEventListener);
}

/*
=================================================
Handle Recipe Search Window on meal planner page
=================================================
*/

// Get the close button element
let closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the close button, close the Window
if (closeBtn) {
  closeBtn.onclick = function () {
    recipeWindow.style.display = "none";
  };
}

// When the user clicks anywhere outside of the Window, close it
if (window) {
  window.onclick = function (event) {
    if (event.target == recipeWindow) {
      recipeWindow.style.display = "none";
    }
  };
}

let recipeForm = document.getElementById("recipeForm");

/**** Recipe search in meal planner window ****/
// When the user submits the recipe search form, fetch the search results
if (recipeForm) {
  recipeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let searchQuery = document.getElementById("searchQuery").value;
    let apiUrl = `${base_url}recipes/complexSearch?query=${searchQuery}&diet=vegetarian&apiKey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        let recipeResults = document.getElementById("recipeResults");
        recipeResults.innerHTML = "";
        let data = response.data;
        if (data.results.length > 0) {
          for (let i = 0; i < data.results.length; i++) {
            let recipe = data.results[i];
            let recipeHtml = `<div class="col-sm-6 col-md-4 p-3">
              <div class="card border-primary">
              <img class="card-img-top" src="${recipe.image}" alt="${recipe.title}">
              <div class="card-body">
                <h5 class="card-title">${recipe.title}</h5>
              </div>
              <button type="button" class="btn btn-primary p-3" data-recipeid="${recipe.id}">Add</button>
              </div>
            </div>`;
            recipeResults.insertAdjacentHTML("beforeend", recipeHtml);
          }

          // Handle add recipe button in recipe search window

          // Get the Add button element
          const addButton = document.querySelector(".btn-primary");

          // Updated event listener for addButton

          /*
          ===============================
          Handle click in search results
          ===============================
          */

          let targetButtonId;

          const recipeResultsArea = document.getElementById("recipeResults");

          if (recipeResultsArea) {
            function recipeResultsEventListener(event) {
              const clickedButton = event.target;
              if (clickedButton.tagName === "BUTTON") {
                targetButtonId = clickedButton.dataset.recipeid;
                console.log("clicked", targetButtonId);

                const recipeInfoUrl = `${base_url}recipes/${targetButtonId}/information?apiKey=${apiKey}`;
                console.log("url", recipeInfoUrl);

                axios.get(recipeInfoUrl).then((response) => {
                  const targetCell = document.getElementById(targetCellId);
                  let recipe = response.data;
                  console.log("data", recipe);
                  if (recipe) {
                    let recipeHtml = `<div>
                <input type="hidden" name="${targetCellId}" value="${recipe.id}">
                    <img class="card-img-top" src="${recipe.image}" alt="${recipe.title}">
                    <div class="card-body">
                      <h5 class="card-title" data-recipeid="${recipe.id}">${recipe.title}</h5>
                  </div>
                </div>`;
                    console.log("recipehtml", recipeHtml);

                    // remove plus sign and previous styling once the recipe is added
                    targetCell.innerHTML = "";

                    // Append the recipe card HTML to the targeted cell
                    targetCell.insertAdjacentHTML("beforeend", recipeHtml);

                    // Remove event listener once the recipe is added
                    targetCell.removeEventListener(
                      "click",
                      recipeAreaEventListener
                    );

                    // Clear the form after adding recipe
                    recipeForm.reset();

                    // Close window after adding recipe
                    recipeWindow.style.display = "none";
                  }
                });
              }
            }

            console.log("targetButtonId", targetButtonId);

            recipeResultsArea.addEventListener(
              "click",
              recipeResultsEventListener
            );
          }
        } else {
          recipeResults.innerHTML = "No recipes found";
        }
      })
      .catch((error) => {
        console.error("Error fetching recipe search results:", error);
      });
  });
}
