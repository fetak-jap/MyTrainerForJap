let kanaItems = document.querySelectorAll(".kana");

export let selectedKana = [];

kanaItems.forEach(function(oneKana){
    oneKana.addEventListener("click", function(){
        let character = oneKana.textContent.trim();

        selectedKana.push(character);

        localStorage.setItem("selectedKana", JSON.stringify(selectedKana));
    })
})

