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

export const sumOfArray = (arr: (number | null)[]) => {
    return arr.reduce((acc: number, el) => el===null? acc + 0: acc + el, 0)
}

export const getNullArray = (length: number) => {
    const resultArr = []
    for (let i = 0; i < length; i++) {
        resultArr.push(null)
    }

    return resultArr
}