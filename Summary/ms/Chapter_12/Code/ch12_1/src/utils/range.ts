export function* range(max: number, min: number = 0) {
    while (min < max) {
        yield min++;
    }
}
