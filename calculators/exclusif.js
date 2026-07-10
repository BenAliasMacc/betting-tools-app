function calculateExclusive(odds) {

    const probabilities = odds.map(odd => 1 / odd);

    const probabilityTotal = probabilities.reduce(
        (acc, probability) => acc + probability,
        0
    );

    const fairOdds = 1 / probabilityTotal;

    return {

        probability: probabilityTotal,

        fairOdds: fairOdds

    };
    
}