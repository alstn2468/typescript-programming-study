export const pick = (obj, keys) =>
    keys
        .map((key) => ({ [key]: obj[key] }))
        .reduce((result, value) => ({ ...result, ...value }), {});
