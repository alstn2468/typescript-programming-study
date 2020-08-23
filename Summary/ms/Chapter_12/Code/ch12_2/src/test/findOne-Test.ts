import { connect } from "../mongodb/connect";

const findOneTest = async () => {
    let connection, cursor;

    try {
        connection = await connect();
        const db = await connection.db("ch12-2");
        const personsCollection = db.collection("persons");

        cursor = personsCollection.find({});
        const foundPersons = await cursor.toArray();

        const _id = foundPersons[0]._id;
        const result = await personsCollection.findOne({ _id });
        console.log(result);
        // { _id: 5f3fc79fe9b60f19c230c63a, name: 'Jack', age: 32 }
    } catch (e) {
        console.log(e.message);
    } finally {
        connection.close();
    }
};

findOneTest();
