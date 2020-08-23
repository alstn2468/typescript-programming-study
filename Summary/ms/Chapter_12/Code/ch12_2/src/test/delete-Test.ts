import { connect } from "../mongodb/connect";

const deleteTest = async () => {
    let connection;

    try {
        connection = await connect();
        const db = await connection.db("ch12-2");
        const personsCollection = db.collection("persons");
        await personsCollection.insertMany([
            { name: "Jack" },
            { name: "Tom" },
            { name: "Jane" },
        ]);

        let result = await personsCollection.deleteOne({ name: "Tom" });
        console.log(result); // { deletedCount: 1 }
        result = await personsCollection.deleteMany({});
        console.log(result); // { deletedCount: 2 }
    } catch (e) {
        console.log(e.message);
    } finally {
        connection.close();
    }
};

deleteTest();
