import React from "react";
import { IUser } from "./IUser";
import { getDataPromise } from "./getDataPromise";

const App: React.FC = () => {
    getDataPromise((users: IUser[]) => console.log("users", users))(0, 1);

    return <div className="App">Please open console window!</div>;
};

export default App;
