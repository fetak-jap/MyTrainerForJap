const kanaList = [
    { kana: "あ", romaji: "a", hint: "When the fish got stabbed by the sword, it went 'a!'"},
    { kana: "い", romaji: "i", hint: "2 I next to each other" },
    { kana: "う", romaji: "u", hint: "just latin U tilting to the left with the a line on top" },
    { kana: "え", romaji: "e", hint: "looks like a guy proposing but he got interrupted half way and only could say e" },
    { kana: "お", romaji: "o", hint: "the upper right is the hand holding a sword and writing an unfinished O at the sand" },
    { kana: "か", romaji: "ka", hint: "the arm of the k is falling down  " },
    { kana: "き", romaji: "ki", hint: "looks like a house key " },
    { kana: "く", romaji: "ku", hint: "coo coo bird mouth making a ku sound " },
    { kana: "け", romaji: "ke", hint: " XXXX " },
    { kana: "こ", romaji: "ko", hint: "two koi fish swimming in the pond " },
    { kana: "さ", romaji: "sa", hint: "smiling monkey (saru) " },
    { kana: "し", romaji: "shi", hint: "fiSHIng hook " },
    { kana: "す", romaji: "su", hint: "suuuuuu slurping up a big loopy noodle " },
    { kana: "せ", romaji: "se", hint: "setting a baby on a lap " },
    { kana: "そ", romaji: "so", hint: "SOap the motion youd wash your belly with " },
    { kana: "た", romaji: "ta", hint: "TA and KO " },
    { kana: "ち", romaji: "chi", hint: "looks like a number 5 " },
    { kana: "つ", romaji: "tsu", hint: "tsunami wave " },
    { kana: "て", romaji: "te", hint: "it looks like a t thats it tea :) " },
    { kana: "と", romaji: "to", hint: "your tooth touching a tongue " },
    { kana: "な", romaji: "na", hint: "left person throwing something away saying na i dont need this " },
    { kana: "に", romaji: "ni", hint: "ni means two so theres two little brothers " },
    { kana: "ぬ", romaji: "nu", hint: "noodles (nu) and chopsticks " },
    { kana: "ね", romaji: "ne", hint: "fisherman throwing out his Net " },
    { kana: "の", romaji: "no", hint: "it looks like a no " },
    { kana: "は", romaji: "ha", hint: "the top part looks like a H and the bottom part looks like a squished A " },
    { kana: "ひ", romaji: "hi", hint: "(hi)ll " },
    { kana: "ふ", romaji: "fu", hint: "mouth blowing wind: Fuuuu " },
    { kana: "へ", romaji: "he", hint: "big arrow pointing up HEre " },
    { kana: "ほ", romaji: "ho", hint: "inverted look like a HO " },
    { kana: "ま", romaji: "ma", hint: "you can see the small circle below like a small a and if its rotated 90 degrees you can se M" },
    { kana: "み", romaji: "mi", hint: "hunting meat (mi) with a bow and arrow" },
    { kana: "む", romaji: "mu", hint: "looks like a cow's face or nose (moo)" },
    { kana: "め", romaji: "me", hint: "raMEn" },
    { kana: "も", romaji: "mo", hint: "looks like a proper fishing hook you'll get more fishes" },
    { kana: "や", romaji: "ya", hint: "i love ya" },
    { kana: "ゆ", romaji: "yu", hint: "looks like a U-turn" },
    { kana: "よ", romaji: "yo", hint: "looks like a yoga pose" },
    { kana: "ら", romaji: "ra", hint: "looks like a rabbit's head" },
    { kana: "り", romaji: "ri", hint: "Rounder い " },
    { kana: "る", romaji: "ru", hint: "looks like a loop (ru)" },
    { kana: "れ", romaji: "re", hint: "looks like a R with Extra details" },
    { kana: "ろ", romaji: "ro", hint: "a road" },
    { kana: "わ", romaji: "wa", hint: "warios big ass" },
    { kana: "を", romaji: "wo", hint: "stickman sitting on a worm (wo)" },
    { kana: "ん", romaji: "n", hint: "looks like an 'n' with a tail and lowercase" },
];

let currentKana = null;
let attempts = 0;

function getRandomKana() {
    const randomIndex = Math.floor(Math.random() * kanaList.length);
    return kanaList[randomIndex];
}

function checkAnswer() {
    const userInput = document.getElementById("user-input").value.trim().toLowerCase();
    const resultText = document.getElementById("result-text");
    const hintText = document.getElementById("hint");

    if (!currentKana) {
        resultText.textContent = "Nejdřív klikni na 'Další znak'!";
        return;
    }

    if (userInput === currentKana.romaji) {
        resultText.textContent = "✅ Správně! Good boy!";
        resultText.style.color = "lightgreen";
        hintText.innerText = currentKana.hint;
    } else {
        attempts++;

        if (attempts === 1) {
            resultText.textContent = "❌ Špatně. Zkus znovu.";
            resultText.style.color = "orange";
            hintText.innerText = currentKana.hint;  // ← zobrazit hint už po první chybě
        } else {
            resultText.textContent = `❌ Špatně. Správně bylo: "${currentKana.romaji}"`;
            resultText.style.color = "red";
        }
    }
}

// Kliknutí na tlačítko "Zkontrolovat"
document.getElementById("check-btn").addEventListener("click", checkAnswer);

document.getElementById("user-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        if (!currentKana) {
            document.getElementById("next-btn").click();
        } else {
            checkAnswer();
        }
    }
});

// Další znak
document.getElementById("next-btn").addEventListener("click", () => {
    currentKana = getRandomKana();
    document.getElementById("kana-char").textContent = currentKana.kana;
    document.getElementById("result-text").textContent = "";
    document.getElementById("hint").innerText = "";
    document.getElementById("user-input").value = "";
    attempts = 0;
    document.getElementById("user-input").focus();
});

