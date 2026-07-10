function calculateKelly(oddsBook, oddsSharp) {

    const probability = 1 / oddsSharp;

    const b = oddsBook - 1;

    const q = 1 - probability;

    const kelly = ((probability * b) - q) / b;

    return {

        full: kelly,

        half: kelly / 2,

        third: kelly / 3,

        quarter: kelly / 4,

        sixth: kelly / 6

    };
}