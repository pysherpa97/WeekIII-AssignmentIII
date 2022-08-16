const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",

  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lwandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],

  score: "4.0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5,
  },
};

// #1:
for (let Counter = 0; Counter < game.scored.length - 1; Counter++) {
  console.log(`Game ${Counter + 1}: ${game.scored[Counter]}`);
}

// #2:
const oddValue = Object.values(game.odds);
sum = 0;
for (let Counter1 = 0; Counter1 < game.scored.length-1; Counter1++) {
  sum = sum + oddValue[Counter1];
}
console.log("Average of Odd is: " + sum / oddValue.length);

// #3:
for (const kv in game.odds) {
  if (game[kv]) {
    console.log(`Odd of victory ${game[kv]}: ${game.odds[kv]}`);
  } else {
    console.log(`Odd of draw: ${game.odds[kv]}`);
  }
}

// #4:
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++: (scorers[player] = 1);
}
console.log(scorers);
