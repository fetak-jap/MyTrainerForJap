const kanaList = [
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

