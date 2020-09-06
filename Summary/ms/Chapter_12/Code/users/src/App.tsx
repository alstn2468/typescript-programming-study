import React from "react";

const App: React.FC = () => {
    const user = { name: "Jack", age: 32 };

    return <div className="App">{JSON.stringify(user)}</div>;
};

export default App;
