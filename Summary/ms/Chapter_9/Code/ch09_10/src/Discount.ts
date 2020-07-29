import * as R from "ramda";

type NubmertoNumFunc = (n: number) => number;

const applyDiscount = (minimun: number, discount: number): NubmertoNumFunc =>
    R.pipe(
        R.ifElse(
            R.flip(R.gte)(minimun),
            R.flip(R.subtract)(discount),
            R.identity
        ),
        R.tap((amount) => console.log(amount))
    );

const calcPrice = applyDiscount(5000, 500);
const discountedPrice = calcPrice(6000); // 5500
const notDiscountedPrice = calcPrice(4500); // 4500
