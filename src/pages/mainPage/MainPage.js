import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {titleAction} from "../../redux/actions/actions";

function MainPage () {
    const dispatch = useDispatch()

    const title = useSelector(state => state.title)

    const changeTitle = () => {
            setTimeout(() => {
                dispatch(titleAction())
            },3000)
    }
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={changeTitle}>change title</button>
        </div>
    );
}

export default MainPage;