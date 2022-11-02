export function getRandomInt(max: number) {
    return Math.floor(Math.random() * max) + 1;
}

export const getRandomArrayOfInts = (max: number, length: number) => {
    const resultArr = []
    for (let i = 0; i < length; i++) {
        resultArr.push(getRandomInt(max))
    }

    return resultArr
}

export const sumOfArray = (arr: (number)[]) => {
    return arr.reduce((acc, el) => acc + el)
}
