import {getNullArray, getRandomArrayOfInts, sumOfArray} from "../common/utils";

export type StateType = {
    dicesValues: Array<number | null>
    sum: number
    rollingMode: boolean
    maxDiceValue: number
}

const InitialState: StateType = {
    dicesValues: [null],
    sum: 0,
    rollingMode: false,
    maxDiceValue: 20
}

export type ActionType = ReturnType<typeof setRollingMode>
    | ReturnType<typeof setDicesValues>
    | ReturnType<typeof addDice>
    | ReturnType<typeof removeDice>
    | ReturnType<typeof setMaxDiceValue>

export const reducer = (state: StateType = InitialState, action: ActionType) => {
    switch (action.type) {
        case 'SET-DICES-VALUES':
            const newValues = getRandomArrayOfInts(state.maxDiceValue, state.dicesValues.length)
            return {...state, dicesValues: newValues, sum: sumOfArray(newValues)}
        case 'SET-ROLLING-MODE':
            return {...state, rollingMode: action.mode}
        case 'ADD-DICE':
            return {...state, dicesValues: [...state.dicesValues, null]}
        case 'REMOVE-DICE':
            const copyDicesValues = [...state.dicesValues]
            copyDicesValues.pop()
            return {...state, dicesValues: copyDicesValues, sum: sumOfArray(copyDicesValues)}
        case 'SET-MAX-DICE-VALUE':
            return {
                ...state,
                maxDiceValue: action.value,
                sum: 0,
                dicesValues: getNullArray(state.dicesValues.length)
            }
        default:
            return state
    }
}

export const setRollingMode = (mode: boolean) => ({
    type: 'SET-ROLLING-MODE',
    mode
} as const)

export const setDicesValues = () => ({
    type: 'SET-DICES-VALUES'
} as const)

export const addDice = () => ({
    type: 'ADD-DICE'
} as const)

export const removeDice = () => ({
    type: 'REMOVE-DICE'
} as const)

export const setMaxDiceValue = (value: number) => ({
    type: 'SET-MAX-DICE-VALUE',
    value
}as const)