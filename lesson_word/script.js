const kanaList = [
    { japanese: "学生", translate: "Student", hint:"がく-せい"},
    { japanese: "日本人", translate: "Japanese person", hint:"に-ほん-じん"},
    { japanese: "アメリカ人", translate: "American person", hint:"アメリカ-じん"},
    { japanese: "あなた", translate: "you", hint:""},
    { japanese: "医者", translate: "doctor, physician", hint:"いしゃ"},
    { japanese: "忙しい", translate: "busy, occupied, hectic,", hint:"いそがしい"},
    { japanese: "車", translate: "car, automobile, vehicle", hint:"くるま"},
    { japanese: "高い", translate: "high, tall, expensive, high-priced, loud", hint:"たかい"},
    { japanese: "鉛筆", translate: "pencil", hint:"えんぴつ"},
    { japanese: "安い", translate: "cheap, inexpensive, calm, peaceful, quiet", hint:"やすい"},
    { japanese: "寿司", translate: "sushi", hint:"すし"},
    { japanese: "美味しい", translate: "delicious, tasty", hint:"おいしい"},
    { japanese: "今日", translate: "today", hint:"きょう"},
    { japanese: "暑い", translate: "hot, warm, passionate, on everybody's mind", hint:"あつい"},
    { japanese: "明日", translate: "tomorrow", hint:"あした"},
    { japanese: "土曜日", translate: "saturday", hint:"どようび"},
    { japanese: "試験", translate: "exam, test, experiment", hint:"しけん"},
    { japanese: "難しい", translate: "difficult, hard, complicated, impossible", hint:"むずかしい"},
    { japanese: "優しい", translate: "kind, gentle, nice, friendly", hint:"やさしい"},
    { japanese: "元気", translate: "lively, full of spirit, energetic, vigorous, healthy, well, fit, in good health", hint:"げんき"},
    { japanese: "暇", translate: "spare time, free time, leisure, time", hint:"ひま"},
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

    if (userInput === currentKana.translate) {
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
            resultText.textContent = `❌ Špatně. Správně bylo: "${currentKana.translate}"`;
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
    document.getElementById("kana-char").textContent = currentKana.japanese;
    document.getElementById("result-text").textContent = "";
    document.getElementById("hint").innerText = "";
    document.getElementById("user-input").value = "";
    attempts = 0;
    document.getElementById("user-input").focus();

    document.getElementById("remaining-count").textContent =
    `Remaining: ${shuffledKanaList.length - kanaIndex}`;
});


