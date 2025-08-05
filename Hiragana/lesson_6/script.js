const kanaList = [
    { kana: "きゃ", romaji: "kya", hint: "ki + ya" },
    { kana: "きゅ", romaji: "kyu", hint: "ki + yu" },
    { kana: "きょ", romaji: "kyo", hint: "ki + yo" },
    { kana: "しゃ", romaji: "sha", hint: "shi + ya" },
    { kana: "しゅ", romaji: "shu", hint: "shi + yu" },
    { kana: "しょ", romaji: "sho", hint: "shi + yo" },
    { kana: "ちゃ", romaji: "cha", hint: "chi + ya" },
    { kana: "ちゅ", romaji: "chu", hint: "chi + yu" },
    { kana: "ちょ", romaji: "cho", hint: "chi + yo" },
    { kana: "にゃ", romaji: "nya", hint: "ni + ya" },
    { kana: "にゅ", romaji: "nyu", hint: "ni + yu" },
    { kana: "にょ", romaji: "nyo", hint: "ni + yo" },
    { kana: "ひゃ", romaji: "hya", hint: "hi + ya" },
    { kana: "ひゅ", romaji: "hyu", hint: "hi + yu" },
    { kana: "ひょ", romaji: "hyo", hint: "hi + yo" },
    { kana: "みゃ", romaji: "mya", hint: "mi + ya" },
    { kana: "みゅ", romaji: "myu", hint: "mi + yu" },
    { kana: "みょ", romaji: "myo", hint: "mi + yo" },
    { kana: "りゃ", romaji: "rya", hint: "ri + ya" },
    { kana: "りゅ", romaji: "ryu", hint: "ri + yu" },
    { kana: "りょ", romaji: "ryo", hint: "ri + yo" },
    { kana: "ぎゃ", romaji: "gya", hint: "gi + ya" },
    { kana: "ぎゅ", romaji: "gyu", hint: "gi + yu" },
    { kana: "ぎょ", romaji: "gyo", hint: "gi + yo" },
    { kana: "じゃ", romaji: "ja", hint: "ji + ya" },
    { kana: "じゅ", romaji: "ju", hint: "ji + yu" },
    { kana: "じょ", romaji: "jo", hint: "ji + yo" },
    { kana: "びゃ", romaji: "bya", hint: "bi + ya" },
    { kana: "びゅ", romaji: "byu", hint: "bi + yu" },
    { kana: "びょ", romaji: "byo", hint: "bi + yo" },
    { kana: "ぴゃ", romaji: "pya", hint: "pi + ya" },
    { kana: "ぴゅ", romaji: "pyu", hint: "pi + yu" },
    { kana: "ぴょ", romaji: "pyo", hint: "pi + yo" },
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


