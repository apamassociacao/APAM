/**
 * Async function constructor.
 * Use `instanceof` to check if a function is asynchronous.
 *
 * `(async () => {}) instanceof AsyncFunction` is true
 */
export const AsyncFunction = (async () => {}).constructor;
