export class Timing {
    static debounce<T extends (...args: any) => any>(func: T, seconds: number) {
        let callbackTimeout: number | NodeJS.Timeout;

        return (...args: any) => {
            clearTimeout(callbackTimeout);
            callbackTimeout = setTimeout(() => func.apply(func, args), seconds);
        }
    }

    static throttle<T extends (...args: any) => any>(func: T, limit: number): ThrottledFunction<T> {
        let inThrottle: boolean;
        let lastResult: ReturnType<(...args: any) => any>;

        return function (this: any, ...args): ReturnType<T> {
            if (!inThrottle) {
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);

                lastResult = func.apply(this, args);
            }
            return lastResult;
        };
    }
}

export type ThrottledFunction<T extends (...args: any) => any> = (...args: Parameters<T>) => ReturnType<T>;
