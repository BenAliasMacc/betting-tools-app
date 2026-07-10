function parseOdd(value) {

    return Number(
        value.replace(",", ".")
    );

}

function isValidOdd(odd) {

    return (
        !isNaN(odd)
        &&
        odd > 1
    );

}

function getCleanOdds(values) {

    return values

        .filter(value => value !== "")

        .map(parseOdd)

        .filter(isValidOdd);

}

function clearFields(inputIds, resultId) {

    inputIds.forEach(id => {
        document.getElementById(id).value = "";
    });

    document.getElementById(resultId).innerHTML = "";

}

async function copyToClipboard(text) {

    try {

        await navigator.clipboard.writeText(text);

        showToast("✅ Résultat copié !");

    } catch (error) {

        showToast("❌ Impossible de copier.");

    }

}

function showToast(message) {

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.innerText = message;

    document.body.appendChild(toast);


    setTimeout(() => {

        toast.remove();

    }, 2500);

}