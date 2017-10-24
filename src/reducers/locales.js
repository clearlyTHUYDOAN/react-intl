import { ACTION_TYPES } from '../actions/locales';
import { setLocale } from '../index';

export const INITIAL_STATE = {
    currentLocale: setLocale(),
}

export default function locales(state = INITIAL_STATE, { type, payload }) {
    if (type === ACTION_TYPES.updateLocale) {
        return {...state, ...{ currentLocale: payload }}
    }
    return state;
}