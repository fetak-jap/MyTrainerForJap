const kanaList = [
    { kana: "ア", romaji: "a", hint: "Look like an (A)xe" },
    { kana: "イ", romaji: "i", hint: "Incline" },
    { kana: "ウ", romaji: "u", hint: "Unicorn" },
    { kana: "エ", romaji: "e", hint: "The middle line of E has ran away or look like Elevator door" },
    { kana: "オ", romaji: "o", hint: "Octopus" },
    { kana: "カ", romaji: "ka", hint: "Car / Katana" },
    { kana: "キ", romaji: "ki", hint: "Key" },
    { kana: "ク", romaji: "ku", hint: "Upside down cup" },
    { kana: "ケ", romaji: "ke", hint: "Rotated k" },
    { kana: "コ", romaji: "ko", hint: "Korner" },
    { kana: "サ", romaji: "sa", hint: "Saddle" },
    { kana: "シ", romaji: "shi", hint: "Traces the shape of し " },
    { kana: "ス", romaji: "su", hint: "Super speed" },
    { kana: "セ", romaji: "se", hint: "Look like se in hiragana so setting up a baby" },
    { kana: "ソ", romaji: "so", hint: "Sofa" },
    { kana: "タ", romaji: "ta", hint: "there's a little T on the left and if you slightly turn your head you can see a big A" },
    { kana: "チ", romaji: "chi", hint: "Chimney" },
    { kana: "ツ", romaji: "tsu", hint: "Tsunami" },
    { kana: "テ", romaji: "te", hint: "Telephone pole" },
    { kana: "ト", romaji: "to", hint: "look like a lowercase t but pointing TO the right" },
    { kana: "ナ", romaji: "na", hint: "T? nah almost" },
    { kana: "ニ", romaji: "ni", hint: "There's Two line in japanase 2 is ni" },
    { kana: "ヌ", romaji: "nu", hint: "Number 7" },
    { kana: "ネ", romaji: "ne", hint: "Necktie" },
    { kana: "ノ", romaji: "no", hint: "No it look like a no" },
    { kana: "ハ", romaji: "ha", hint: "Two hands clapping "},
    { kana: "ヒ", romaji: "hi", hint: "Sitting person waving his hand and saying HI. "},
    { kana: "フ", romaji: "fu", hint: "Mt FUji "},
    { kana: "ヘ", romaji: "he", hint: "Here "},
    { kana: "ホ", romaji: "ho", hint: "Holy cross"},
    { kana: "マ", romaji: "ma", hint: "Female breast side view a mother you might called MAma "},
    { kana: "ミ", romaji: "mi", hint: "Do re mi. 3 notes 3 lines "},
    { kana: "ム", romaji: "mu", hint: "Arm flexing his MUscles "},
    { kana: "メ", romaji: "me", hint: "When i see something is MEh i just cross it out "},
    { kana: "モ", romaji: "mo", hint: "Hiragana MO "},
    { kana: "ヤ", romaji: "ya", hint: "Hiragana YA "},
    { kana: "ユ", romaji: "yu", hint: "Looks like both Y and U "},
    { kana: "ヨ", romaji: "yo", hint: "YO why is this E backwards? "},
    { kana: "ラ", romaji: "ra", hint: "Bowl of ramen with pork on top "},
    { kana: "リ", romaji: "ri", hint: "Hiragana RI "},
    { kana: "ル", romaji: "ru", hint: "Someone explaing RUles "},
    { kana: "レ", romaji: "re", hint: "REmon is lemon in japanese"},
    { kana: "ロ", romaji: "ro", hint: "Robot's head "},
    { kana: "ワ", romaji: "wa", hint: "Faucet for WAter "},
    { kana: "ヲ", romaji: "wo", hint: "Upside down W - WOah"},
    { kana: "ン", romaji: "n", hint: "A man about to take a Nap" },
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