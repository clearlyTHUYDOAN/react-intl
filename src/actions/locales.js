export const ACTION_TYPES = {
    updateLocale: "UPDATE_LOCALE"
}

export function updateLocale(locale) {
    return {
        type: ACTION_TYPES.updateLocale,
        payload: locale,
    };
}
