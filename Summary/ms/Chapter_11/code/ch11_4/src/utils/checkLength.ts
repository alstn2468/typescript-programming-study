import { Success, Failure } from "../classes/Validation";

export const checkLength = (
    o: { password?: string },
    minLength: number = 6
) => {
    const { password } = o;
    return !password || password.length < minLength
        ? new Failure([`Password must have more than ${minLength} characters`])
        : new Success(o);
};
