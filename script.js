const button = document.getElementById("calculateCombo");

// =====================
// TEXTES À COPIER
// =====================

let comboCopyText = "";
let exclusiveCopyText = "";
let kellyCopyText = "";

function parseOdd(value){

    return Number(
        value.replace(",", ".")
    );

}

button.addEventListener("click", () => {


    const odds = [

        document.getElementById("odd1").value,
        document.getElementById("odd2").value,
        document.getElementById("odd3").value,
        document.getElementById("odd4").value

    ];

    const cleanOdds = getCleanOdds(odds);

    if (cleanOdds.length < 2) {

        document.getElementById("result").innerHTML =
            "❌ Il faut au moins 2 cotes";

        return;

    }

    const result = calculateCombo(cleanOdds);

    const comboType =
        cleanOdds.length === 2
        ? "Double chance buteur"
        : cleanOdds.length === 3
        ? "Triple chance buteur"
        : "Combo 4 buteurs";

    comboCopyText =
    `⚽ Combo buteur

    Cotes : ${cleanOdds.join(" + ")}

    Probabilité : ${(result.probability * 100).toFixed(2)} %

    Fair Odds : ${result.fairOdds.toFixed(2)}`;

    document.getElementById("result").innerHTML =

    `
    <strong>📊 Résultat</strong>

    <br><br>

    Type détecté :
    <strong>${comboType}</strong>

    <br><br>

    Sélections :
    ${cleanOdds.join(" + ")}

    <br><br>

    Probabilité :
    <strong>${(result.probability * 100).toFixed(2)} %</strong>

    <br><br>

    Fair Odds :
    <strong>${result.fairOdds.toFixed(2)}</strong>

    `;

});

document.getElementById("clearCombo").addEventListener("click", () => {

    clearFields(
        ["odd1", "odd2", "odd3", "odd4"],
        "result"
    );

    comboCopyText = "";

});

document.getElementById("copyCombo").addEventListener("click", () => {

    if (!comboCopyText) {

        alert("❌ Aucun résultat à copier.");

        return;

    }

    copyToClipboard(comboCopyText);

});

const tabs = document.querySelectorAll(".tab");

const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));

        tab.classList.add("active");

        contents.forEach(content => {

            content.classList.add("hidden");

        });

        const selected = tab.dataset.tab;

        document
            .getElementById(selected)
            .classList.remove("hidden");

    });

});

const kellyButton = document.getElementById("calculateKelly");

kellyButton.addEventListener("click", () => {

    const oddsBook = parseOdd(
        document.getElementById("kellyBook").value
    );

    const oddsSharp = parseOdd(
        document.getElementById("kellySharp").value
    );

    if (
        !oddsBook ||
        !oddsSharp ||
        oddsBook <= 1 ||
        oddsSharp <= 1
    ) {

        document.getElementById("kellyResult").innerHTML =
            "❌ Cotes invalides";

        return;

    }

    const result = calculateKelly(
        oddsBook,
        oddsSharp
    );

    document.getElementById("kellyResult").innerHTML =

    `
    📊 Résultat Kelly

    <br><br>

    Kelly Full :
    <strong>${(result.full * 100).toFixed(2)} %</strong>

    <br><br>

    Kelly /2 :
    <strong>${(result.half * 100).toFixed(2)} %</strong>

    <br><br>

    Kelly /3 :
    <strong>${(result.third * 100).toFixed(2)} %</strong>

    <br><br>

    Kelly /4 :
    <strong>${(result.quarter * 100).toFixed(2)} %</strong>

    <br><br>

    Kelly /6 :
    <strong>${(result.sixth * 100).toFixed(2)} %</strong>

    `;

    kellyCopyText =
    `📈 Kelly

    Bookmaker : ${oddsBook}
    Fair Odds : ${oddsSharp}

    Kelly Full : ${(result.full * 100).toFixed(2)} %
    Kelly /2 : ${(result.half * 100).toFixed(2)} %
    Kelly /3 : ${(result.third * 100).toFixed(2)} %
    Kelly /4 : ${(result.quarter * 100).toFixed(2)} %
    Kelly /6 : ${(result.sixth * 100).toFixed(2)} %`;

});

document.getElementById("clearKelly").addEventListener("click", () => {

    clearFields(
        ["kellyBook", "kellySharp"],
        "kellyResult"
    );

    kellyCopyText = "";

});

document.getElementById("copyKelly").addEventListener("click", () => {

    if (!kellyCopyText) {

        alert("❌ Aucun résultat à copier.");

        return;

    }

    copyToClipboard(kellyCopyText);

});

const exclusiveButton = document.getElementById("calculateExclusive");

exclusiveButton.addEventListener("click", () => {

    const odds = [

        document.getElementById("exclusive1").value,
        document.getElementById("exclusive2").value,
        document.getElementById("exclusive3").value,
        document.getElementById("exclusive4").value

    ];

    const cleanOdds = getCleanOdds(odds);

    if (cleanOdds.length < 2) {

        document.getElementById("exclusiveResult").innerHTML =

        "❌ Il faut au moins 2 cotes";

        return;

    }

    const result = calculateExclusive(cleanOdds);

    const comboType =

        cleanOdds.length === 2

        ? "Double issue exclusive"

        : cleanOdds.length === 3

        ? "Triple issue exclusive"

        : "Combo 4 issues";

    exclusiveCopyText =
    `🎯 Combo exclusif

    Cotes : ${cleanOdds.join(" + ")}

    Probabilité : ${(result.probability * 100).toFixed(2)} %

    Fair Odds : ${result.fairOdds.toFixed(2)}`;

    document.getElementById("exclusiveResult").innerHTML =

    `
    <strong>📊 Résultat</strong>

    <br><br>

    Type détecté :

    <strong>${comboType}</strong>

    <br><br>

    Sélections :

    ${cleanOdds.join(" + ")}

    <br><br>

    Probabilité :

    <strong>${(result.probability * 100).toFixed(2)} %</strong>

    <br><br>

    Fair Odds :

    <strong>${result.fairOdds.toFixed(2)}</strong>

    `;

});

document.getElementById("clearExclusive").addEventListener("click", () => {

    clearFields(
        [
            "exclusive1",
            "exclusive2",
            "exclusive3",
            "exclusive4"
        ],
        "exclusiveResult"
    );

    exclusiveCopyText = "";

});

document.getElementById("copyExclusive").addEventListener("click", () => {

    if (!exclusiveCopyText) {

        alert("❌ Aucun résultat à copier.");

        return;

    }

    copyToClipboard(exclusiveCopyText);

});