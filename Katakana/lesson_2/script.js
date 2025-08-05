const kanaList = [
{ kana: "ガ", romaji: "ga", hint: "カ with two dots" },
{ kana: "ギ", romaji: "gi", hint: "キ with two dots" },
{ kana: "グ", romaji: "gu", hint: "ク with two dots" },
{ kana: "ゲ", romaji: "ge", hint: "ケ with two dots" },
{ kana: "ゴ", romaji: "go", hint: "コ with two dots" },
{ kana: "ザ", romaji: "za", hint: "サ with two dots" },
{ kana: "ジ", romaji: "ji", hint: "シ with two dots" },
{ kana: "ズ", romaji: "zu", hint: "ス with two dots" },
{ kana: "ゼ", romaji: "ze", hint: "セ with two dots" },
{ kana: "ゾ", romaji: "zo", hint: "ソ with two dots" },
{ kana: "ダ", romaji: "da", hint: "タ with two dots" },
{ kana: "ヂ", romaji: "ji", hint: "チ with two dots" },
{ kana: "ヅ", romaji: "zu", hint: "ツ with two dots" },
{ kana: "デ", romaji: "de", hint: "テ with two dots" },
{ kana: "ド", romaji: "do", hint: "ト with two dots" },
{ kana: "バ", romaji: "ba", hint: "ハ with two dots" },
{ kana: "ビ", romaji: "bi", hint: "ヒ with two dots" },
{ kana: "ブ", romaji: "bu", hint: "フ with two dots" },
{ kana: "ベ", romaji: "be", hint: "ヘ with two dots" },
{ kana: "ボ", romaji: "bo", hint: "ホ with two dots" },
{ kana: "パ", romaji: "pa", hint: "ハ with a circle" },
{ kana: "ピ", romaji: "pi", hint: "ヒ with a circle" },
{ kana: "プ", romaji: "pu", hint: "フ with a circle" },
{ kana: "ペ", romaji: "pe", hint: "ヘ with a circle" },
{ kana: "ポ", romaji: "po", hint: "ホ with a circle" },

    

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
