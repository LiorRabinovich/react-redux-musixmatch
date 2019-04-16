export const setModalActiveAction = (modal) => {
    return {
        type: "SET_MODAL_ACTIVE",
        payload: modal
    };
};

export const closeModalAction = () => {
    return {
        type: "CLOSE_MODAL",
        payload: null
    };
};

