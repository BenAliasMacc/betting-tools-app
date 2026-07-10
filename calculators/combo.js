function calculateCombo(odds) {

    const probabilities = odds.map(odd => 1 / odd);

    const probabilityNone = probabilities.reduce(
        (acc, probability) => acc * (1 - probability),
        1
    );

    const probabilityCombo = 1 - probabilityNone;

    const fairOdds = 1 / probabilityCombo;

    return {
        probability: probabilityCombo,
        fairOdds: fairOdds
    };
}