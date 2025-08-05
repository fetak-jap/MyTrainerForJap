const kanaList = [
    { kana: "キャ", romaji: "kya", hint: "ki + ya" },
    { kana: "キュ", romaji: "kyu", hint: "ki + yu" },
    { kana: "キョ", romaji: "kyo", hint: "ki + yo" },
    { kana: "シャ", romaji: "sha", hint: "shi + ya" },
    { kana: "シュ", romaji: "shu", hint: "shi + yu" },
    { kana: "ショ", romaji: "sho", hint: "shi + yo" },
    { kana: "チャ", romaji: "cha", hint: "chi + ya" },
    { kana: "チュ", romaji: "chu", hint: "chi + yu" },
    { kana: "チョ", romaji: "cho", hint: "chi + yo" },
    { kana: "ニャ", romaji: "nya", hint: "ni + ya" },
    { kana: "ニュ", romaji: "nyu", hint: "ni + yu" },
    { kana: "ニョ", romaji: "nyo", hint: "ni + yo" },
    { kana: "ヒャ", romaji: "hya", hint: "hi + ya" },
    { kana: "ヒュ", romaji: "hyu", hint: "hi + yu" },
    { kana: "ヒョ", romaji: "hyo", hint: "hi + yo" },
    { kana: "ミャ", romaji: "mya", hint: "mi + ya" },
    { kana: "ミュ", romaji: "myu", hint: "mi + yu" },
    { kana: "ミョ", romaji: "myo", hint: "mi + yo" },
    { kana: "リャ", romaji: "rya", hint: "ri + ya" },
    { kana: "リュ", romaji: "ryu", hint: "ri + yu" },
    { kana: "リョ", romaji: "ryo", hint: "ri + yo" },
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


