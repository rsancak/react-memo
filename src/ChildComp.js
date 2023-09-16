import {memo} from "react";

const ChildComp = () => {
    console.log("children rendered!");
    return (
        <>
            <h2>Child Component</h2>
        </>
    );
}

export default memo(ChildComp);
