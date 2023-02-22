import { useDispatch } from "react-redux";

export const ActionTypes = {
    ADDDATA: 'ADDDATA',
    SETDATA: 'SETDATA',
};

export function adddata(newFood) {

    return (dispatch) =>
    {dispatch ({
        type: ActionTypes.ADDDATA,
        payload: newFood
    })};
}

export function setFoods(foodList) {
    return (dispatch) =>
    {dispatch ({
        type: ActionTypes.SETDATA,
        payload: foodList
    })};
}