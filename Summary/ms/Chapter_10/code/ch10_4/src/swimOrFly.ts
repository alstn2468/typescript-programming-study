import { Bird, Fish } from "./BirdAndFish";
import { isSwimmable } from "./isSwimmable";
import { isFlyable } from "./isFlyable";

export const swimOrFly = (o: Bird | Fish): void => {
    if (isSwimmable(o)) {
        o.swim();
    } else if (isFlyable(o)) {
        o.fly();
    }
};
