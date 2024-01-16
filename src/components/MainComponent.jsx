import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFirstState } from "../redux/reducers/StateReducer";

const MainComponent = () => {
    /* dispatch per fare il setState dello stato */
    const dispatch = useDispatch();
    const primoStato = useSelector((state) => state.State.firstState);
    console.log(primoStato);

    return (
        <div>
            <button onClick={() => dispatch(setFirstState("ma stiamo scherziamo! "))}> cliccami</button>
        </div>
    );
};

export default MainComponent;
