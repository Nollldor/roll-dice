export function getRandomInt(max: number) {
    return Math.floor(Math.random() * max) + 1;
}

export const getRandomArrayOfInts = (max: number, lenght: number) => {
    const resultArr = []

    for (let i = 0; i < lenght; i++) {
        resultArr.push(getRandomInt(max))
    }

    return resultArr
}

export const sumOfArray = (arr: Array<number | null>):number => {
    return arr.map(el=>el===null? 0 : el).reduce((prev, current) => {
        return current === null ? prev + 0 : prev + current
    }, 0)
}