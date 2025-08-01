const kanaList = [

    { kana: "が", romaji: "ga", hint: "ka with two dots" },
    { kana: "ぎ", romaji: "gi", hint: "ki with two dots" },
    { kana: "ぐ", romaji: "gu", hint: "ku with two dots" },
    { kana: "げ", romaji: "ge", hint: "ke with two dots" },

    { kana: "ご", romaji: "go", hint: "ko with two dots" },
    { kana: "ざ", romaji: "za", hint: "sa with two dots" },
    { kana: "じ", romaji: "ji", hint: "shi with two dots" },
    { kana: "ず", romaji: "zu", hint: "su with two dots" },
    { kana: "ぜ", romaji: "ze", hint: "se with two dots" },
    { kana: "ぞ", romaji: "zo", hint: "so with two dots" },
    { kana: "だ", romaji: "da", hint: "ta with two dots" },
    { kana: "ぢ", romaji: "ji", hint: "chi with two dots"},
    { kana: "づ", romaji: "zu", hint: "tsu with two dots"},
    { kana: "で", romaji: "de", hint: "te with two dots" },
    { kana: "ど", romaji: "do", hint: "to with two dots" },
    { kana: "ば", romaji: "ba", hint: "ha with two dots" },
    { kana: "び", romaji: "bi", hint: "hi with two dots" },
    { kana: "ぶ", romaji: "bu", hint: "hu with two dots" },
    { kana: "べ", romaji: "be", hint: "he with two dots" },
    { kana: "ぼ", romaji: "bo", hint: "ho with two dots" },
    { kana: "ぱ", romaji: "pa", hint: "ha with a circle" },
    { kana: "ぴ", romaji: "pi", hint: "hi with a circle" },
    { kana: "ぷ", romaji: "pu", hint: "hu with a circle" },
    { kana: "ぺ", romaji: "pe", hint: "he with a circle" },
    { kana: "ぽ", romaji: "po", hint: "ho with a circle" },
    

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
    `Zbývá: ${shuffledKanaList.length - kanaIndex}`;
});
