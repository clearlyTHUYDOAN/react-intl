export const ACTION_TYPES = {
    updateLocale: "UPDATE_LOCALE"
}

export function updateLocale(locale) {
    localStorage.setItem('testLocale', locale)
    window.location.reload();
    return {
        type: ACTION_TYPES.updateLocale,
        payload: locale,
    };
}
