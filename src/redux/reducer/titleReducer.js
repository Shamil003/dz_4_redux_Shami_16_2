import {types} from "../../type";

const initialState = {
    title: "Cтарый текст"
}

export const titleReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_TITLE:
            return {...state,
                title: "Новый текст"}
        default:
            return state
    }
}