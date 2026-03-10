const probabilities = {
  2: 2.78,
  3: 5.56,
  4: 8.33,
  5: 11.11,
  6: 13.89,
  7: 16.67,
  8: 13.89,
  9: 11.11,
  10: 8.33,
  11: 5.56,
  12: 2.78,
};

const bestNumbers = [6, 8];

const table = document.getElementById("probabilityTable");
const chart = document.getElementById("chart");
const bestSpots = document.getElementById("bestSpots");

bestSpots.innerHTML =
  "<p><strong>Best numbers to build near:</strong> 6 and 8</p>";

for (let number in probabilities) {
  let row = table.insertRow();

  if (bestNumbers.includes(Number(number))) {
    row.classList.add("best-number");
  }

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);

  cell1.innerHTML = number;
  cell2.innerHTML = probabilities[number] + "%";
}

for (let number in probabilities) {
  const row = document.createElement("div");
  row.className = "bar-row";

  const label = document.createElement("div");
  label.className = "bar-label";
  label.textContent = "Number " + number;

  const bar = document.createElement("div");
  bar.className = "bar";
  bar.style.width = probabilities[number] * 4 + "%";
  bar.textContent = probabilities[number] + "%";

  row.appendChild(label);
  row.appendChild(bar);

  chart.appendChild(row);
}

function simulateDice() {
  let counts = {};

  for (let i = 2; i <= 12; i++) {
    counts[i] = 0;
  }

  for (let i = 0; i < 1000; i++) {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    let sum = dice1 + dice2;

    counts[sum]++;
  }

  let output = "";

  for (let i = 2; i <= 12; i++) {
    output += "Number " + i + " appeared " + counts[i] + " times <br>";
  }

  document.getElementById("results").innerHTML = output;
}
function rollDiceOnce() {

  const die1El = document.getElementById("die1");
  const die2El = document.getElementById("die2");

  die1El.classList.add("roll");
  die2El.classList.add("roll");

  setTimeout(() => {

    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;

    die1El.textContent = die1;
    die2El.textContent = die2;

    let total = die1 + die2;

    document.getElementById("rollResult").textContent =
      "You rolled " + die1 + " + " + die2 + " = " + total;

    die1El.classList.remove("roll");
    die2El.classList.remove("roll");

  }, 200);
}
