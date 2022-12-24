const d = document;

export default function draw(btn, selector) {
  const getWinner = (selector) => {
    const $players = d.querySelectorAll(selector),
      random = Math.floor(Math.random() * $players.length),
      winner = $players[random];

    // console.log($players, random, winner);

    $players.forEach((el) => {
      // console.log(el.children[0].nodeName === "SPAN");
      if (el.children[0].nodeName === "SPAN") {
        let winnerBefore = d.querySelector("#winner");
        el.removeChild(winnerBefore);
      }
    });

    const $newWinner = document.createElement("span");

    $newWinner.textContent = "🥳Ganador!!🏆";

    $newWinner.id = "winner";

    // console.log(winner.children);

    winner.children[0].insertAdjacentElement("beforebegin", $newWinner);

    // console.log(winner);

    return `El ganador es: ${winner.firstChild.textContent}`;
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
      // console.log(result);
    }
  });
}
