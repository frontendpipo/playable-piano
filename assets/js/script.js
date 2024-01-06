// Selects the container for the piano keys.
let pianoContainer = document.getElementsByClassName("piano-container");
// Sets a base path for audio files.
const base = "./assets/audio/";

// Waits for the page to load.
window.onload = () => {
  // This is a loop that repeats 24 times, it creates 24 div elements, representing piano keys.
  for (let index = 1; index <= 24; index++) {
    let div = document.createElement("div");
    // Styles the keys as black or white based on their position.
    div.classList.add("key", index <= 10 ? "black-key" : "white-key");
    // For playing audio on click.
    const number = index <= 9 ? "0" + index : index;
    div.addEventListener("click", () => {
      new Audio(`${base}key${number}.mp3`).play();
    });
    //Effectively adds a visual piano key to the displayed piano interface.
    pianoContainer[0].appendChild(div);
  }
};
