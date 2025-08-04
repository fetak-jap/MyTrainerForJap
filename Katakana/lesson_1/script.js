const kanaList = [
    //katakana characters with their romaji and hints
    { kana: "ア", romaji: "a", hint: "Look like an (A)xe" },
    { kana: "イ", romaji: "i", hint: "Incline" },
    { kana: "ウ", romaji: "u", hint: "Unicorn" },
    { kana: "エ", romaji: "e", hint: "the middle line of E has ran away or look like Elevator door" },
    { kana: "オ", romaji: "o", hint: "Octopus" },
    { kana: "カ", romaji: "ka", hint: "Car / Katana" },
    { kana: "キ", romaji: "ki", hint: "Key" },
    { kana: "ク", romaji: "ku", hint: "upside down cup" },
    { kana: "ケ", romaji: "ke", hint: "rotated k" },
    { kana: "コ", romaji: "ko", hint: "korner" },
    { kana: "サ", romaji: "sa", hint: "saddle" },
    { kana: "シ", romaji: "shi", hint: "Shark" },
    { kana: "ス", romaji: "su", hint: "Sushi" },
    { kana: "セ", romaji: "se", hint: "Sewing needle" },
    { kana: "ソ", romaji: "so", hint: "Sofa" },
    { kana: "タ", romaji: "ta", hint: "Taco" },
    { kana: "チ", romaji: "chi", hint: "Chimney" },
    { kana: "ツ", romaji: "tsu", hint: "Tsunami" },
    { kana: "テ", romaji: "te", hint: "Telescope" },
    { kana: "ト", romaji: "to", hint: "Tornado" },
    { kana: "ナ", romaji: "na", hint: "Nail" },
    { kana: "ニ", romaji: "ni", hint: "Ninja" },
    { kana: "ヌ", romaji: "nu", hint: "Noodle" },
    { kana: "ネ", romaji: "ne", hint: "Nest" },
    { kana: "ノ", romaji: "no", hint: "No" },
];

let currentKana = null;
let attempts = 0;

let shuffledKanaList = [];
let kanaIndex = 0;

function shuffleKanaList() {
    shuffledKanaList = [...kanaList].sort(() => Math.random() - 0.5);
    kanaIndex = 0;
}

function getRandomKana() {
    if (shuffledKanaList.length === 0 || kanaIndex >= shuffledKanaList.length) {
        shuffleKanaList();
    }
    return shuffledKanaList[kanaIndex++];
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

                
        setTimeout(() => {
            document.getElementById("next-btn").click();
        }, 1500); 

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

    document.getElementById("remaining-count").textContent =
    `Remaining: ${shuffledKanaList.length - kanaIndex}`;
});


