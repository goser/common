export const pickWeightedRandomItem = <T,>(items: T[], weightCalculator: (item: T) => number): T => {
    // calculate percentages

    const percentages: number[] = [];
    let sum: number = 0;
    for (const item of items) {
        const weight = weightCalculator(item);
        percentages.push(weight);
        sum += weight;
    }
    for (let i = 0; i < percentages.length; i++) {
        percentages[i] = percentages[i] / sum;
        if (i > 0) {
            percentages[i] += percentages[i - 1];
        }
    }

    // binary search
    const random = Math.random();
    let left = 0;
    let right = percentages.length - 1;

    while (left < right) {
        const middle = Math.floor((left + right) / 2);
        if (random > percentages[middle]) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }
    return items[left];
};
