import { ACTION_TYPES } from '../actions/locales';

export const INITIAL_STATE = {
    currentLocale: "en",
}

export default function locales(state = INITIAL_STATE, { type, payload }) {
    if (type === ACTION_TYPES.updateLocale) {
        return {...state, ...{ currentLocale: payload.locale }}
    }
    return state;
}