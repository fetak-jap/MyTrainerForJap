const kanaList = [
    { kanji: "学", japanese: "がく", hint: "ga + ku" },
    
    { kanji: "生", japanese: "せい", hint: "life, student" },
    { kanji: "日", japanese: "に / び", hint: "sun, day" },
    { kanji: "本", japanese: "ほん", hint: "origin, book" },
    { kanji: "人", japanese: "じん / ひと", hint: "person" },
    { kanji: "医", japanese: "い", hint: "medicine (start of doctor)" },
    { kanji: "者", japanese: "しゃ", hint: "person (suffix, like doctor)" },
    { kanji: "忙", japanese: "いそが", hint: "busy (part of isogashii)" },
    { kanji: "車", japanese: "くるま", hint: "car" },
    { kanji: "高", japanese: "たか", hint: "high, tall" },
    { kanji: "鉛", japanese: "えん", hint: "lead (as in pencil)" },
    { kanji: "筆", japanese: "ぴつ", hint: "writing brush (used in pencil)" },
    { kanji: "安", japanese: "やす", hint: "cheap, peaceful" },
    { kanji: "寿", japanese: "す", hint: "longevity (used in sushi)" },
    { kanji: "司", japanese: "し", hint: "administer (used in sushi)" },
    { kanji: "美", japanese: "び", hint: "beautiful (used in oishii)" },
    { kanji: "味", japanese: "あじ / み", hint: "taste (used in oishii)" },
    { kanji: "今", japanese: "いま", hint: "now (used in today)" },
    { kanji: "明", japanese: "あ", hint: "bright (used in ashita)" },
    { kanji: "土", japanese: "ど", hint: "earth, Saturday" },
    { kanji: "曜", japanese: "よう", hint: "weekday" },
    { kanji: "試", japanese: "し", hint: "test, try" },
    { kanji: "験", japanese: "けん", hint: "verification, experiment" },
    { kanji: "難", japanese: "むずか", hint: "difficult" },
    { kanji: "優", japanese: "やさ", hint: "kind, gentle" },
    { kanji: "元", japanese: "げん", hint: "origin, health" },
    { kanji: "気", japanese: "き", hint: "spirit, energy" },
    { kanji: "暇", japanese: "ひま", hint: "free time" },
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

    if (userInput === currentKana.japanese) {
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
            resultText.textContent = `❌ Špatně. Správně bylo: "${currentKana.japanese}"`;
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
    document.getElementById("kana-char").textContent = currentKana.kanji;
    document.getElementById("result-text").textContent = "";
    document.getElementById("hint").innerText = "";
    document.getElementById("user-input").value = "";
    attempts = 0;
    document.getElementById("user-input").focus();

    document.getElementById("remaining-count").textContent =
    `Remaining: ${shuffledKanaList.length - kanaIndex}`;
});