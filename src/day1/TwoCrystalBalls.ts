export default function two_crystal_balls(breaks: boolean[]): number {
    const { length } = breaks;
    const jumpAmount = Math.floor(Math.sqrt(length));

    let i = jumpAmount;
    for (; i < length; i += jumpAmount) {
        if (breaks[i]) break;
    }

    i -= jumpAmount;

    for (let j = 0; j < jumpAmount && i < length; ++j, ++i) {
        if (breaks[i]) return i;
    }

    return -1;
}
