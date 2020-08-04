import { Success, Failure } from "../classes/Validation";

export const checkNull = <S, F>(o: { password?: string }) => {
    const { password } = o;

    return password == undefined || typeof password != "string"
        ? new Failure(["Password can not be null"])
        : new Success(o);
};
