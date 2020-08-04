import { Identity } from "./classes/Identity";

type ISuccess = { isSuccess: boolean; isFailure: boolean };

const checkSuccess = (a: ISuccess) => (b: ISuccess): boolean =>
    [a, b].filter(({ isFailure }) => isFailure == true).length == 0;

const isSuccess = Identity.of(checkSuccess)
    .ap({
        isSuccess: true,
        isFailure: false,
    })
    .ap({ isSuccess: false, isFailure: true })
    .value();

console.log(isSuccess); // false
