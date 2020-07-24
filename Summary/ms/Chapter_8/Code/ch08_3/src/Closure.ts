function add(x: number): (number) => number {
    return function (y: number): number {
        return x + y;
    };
}

const add1 = add(1);
const result = add1(2);

const makeNames = (): (() => string) => {
    const names: string[] = ["Jack", "Jane", "Smith"];
    let index = 0;

    return (): string => {
        if (index == names.length) {
            index = 0;
        }

        return names[index++];
    };
};

const makeName: () => string = makeNames();
console.log([1, 2, 3, 4, 5, 6].map(() => makeName())); // [ 'Jack', 'Jane', 'Smith', 'Jack', 'Jane', 'Smith' ]
