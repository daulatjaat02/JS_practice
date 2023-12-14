///////////////////////////////////////////////////////
// 1. Data Structures, Modern operators and strings

// Challange NO : 1
// Given Data
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
      "Lewandowski",
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
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// ////
// // 1.
// let players1 = game.players[0];
// let players2 = game.players[1];
// console.log(players1, players2);

// // 2.
// let [gk, ...fieldPlayer] = players1;
// console.log(gk, fieldPlayer);

// // 3.
// let allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// let palyers1final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(palyers1final);

// // 5.
// let { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// // 6.
// let printGoals = (...players) => {
//   console.log(...players);
//   console.log(`${players.length} goals were scored`);
// };
// printGoals(...game.scored);

// // 7.
// team1 > team2 && console.log(` Team 2 is more likely to win `);
// team1 < team2 && console.log(` Team 1 is more likely to win `);
// /////////////////////////////////
