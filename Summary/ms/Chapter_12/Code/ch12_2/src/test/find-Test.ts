import { connect } from "../mongodb/connect";

const insertDocumentTest = async () => {
    let connection, cursor;

    try {
        connection = await connect();
        const db = await connection.db("ch12-2");
        const personsCollection = db.collection("persons");
        const addressesCollection = db.collection("addresses");

        cursor = personsCollection.find({ name: "Jack" });
        const foundPersons = await cursor.toArray();
        console.log(foundPersons);
        // [ { _id: 5f3fc79fe9b60f19c230c63a, name: 'Jack', age: 32 } ]

        cursor = addressesCollection.find({});
        const foundAddresses = await cursor.toArray();
        console.log(foundAddresses);
        // [ { _id: 5f3fc79fe9b60f19c230c63b, country: 'korea', city: 'seoul' } ]
    } catch (e) {
        console.log(e.message);
    } finally {
        connection.close();
    }
};

insertDocumentTest();
