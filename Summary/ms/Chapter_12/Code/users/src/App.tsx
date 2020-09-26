import React, { useState, useEffect } from "react";
import { IUser } from "./IUser";
import { getDataPromise } from "./getDataPromise";

const App: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getDataPromise((receivedUsers: IUser[]) =>
            setUsers([...users, ...receivedUsers])
        )(0, 1);
    }, [])

    return <div className="App">{JSON.stringify(users)}</div>;
};

export default App;
