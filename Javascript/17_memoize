function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

const add = (a, b) => a + b;

const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2)); // 3, computed and cached
console.log(memoizedAdd(1, 2)); // 3, returned from cache
console.log(memoizedAdd(2, 3)); // 5, computed and cached
console.log(memoizedAdd(2, 3)); // 5, returned from cache