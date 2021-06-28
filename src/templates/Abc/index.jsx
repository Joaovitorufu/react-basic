import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const Abc = () => {
    const history = useHistory();

    useEffect(() => {
        setTimeout(function () {
            history.push('/');
        }, 5000);
    }, [history]);

    return(
        <div>
            <h1>ABC</h1>
        </div>
    );
}