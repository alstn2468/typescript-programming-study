export const create = <T>(type: { new (...args): T }, ...args): T =>
    new type(...args);
