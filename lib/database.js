const knex = require('knex');
const POSTGRESQL_CONNECTION = "<POSTGRES CONNECTION>";
/* 
    example: postgresql://<DATABASE_USER>:<DATBASE_PASSWORD>@localhost:5432/<DATABASE_NAME>
*/

module.exports.database;

const database = knex({
    client: 'pg',
    connection: POSTGRESQL_CONNECTION
});


module.exports.writeToDatabase = _writeToDatabase;

async function _writeToDatabase(description, embedding){
    embedding = JSON.stringify(embedding);

    const createQuery = `
        /* Raw query to insert record */
        INSERT INTO "items" ("description", "embedding")
        VALUES ('${description}', '${embedding}');
    `;

    try{
        await database.raw(createQuery);
        console.log("✅ Record inserted");
    }
    catch(e) {
        console.error("❌ Failed to insert", e);
    }
}


module.exports.searchByVector = _searchByVector;

async function _searchByVector (vector) {
    vector = JSON.stringify(vector);
    const query = `
        /* Find Record By Cosine Distance */
        SELECT "description" FROM items
        ORDER BY "embedding" <=> '${vector}'
        LIMIT 1;
    `;
    
    return database.raw(query);
}