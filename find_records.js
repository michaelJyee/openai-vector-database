const { createEmbedding } = require('./lib/openai_api.js');
const { database } = require('./lib/database.js');

main();

async function main () {
    const searchFor = "a bird that cannot fly";
    console.log("Searching for something like:", searchFor);
    const vector = await createEmbedding(searchFor);

    let result = await _searchByVector(vector);
    console.log("closest result:", result.rows);
}

async function _searchByVector (vector) {
    vector = JSON.stringify(vector);
    const query = `
        /* Find Record By Cosine Distance */
        SELECT "description",  "embedding" <=> '${vector}' as cosine_distance FROM items
        ORDER BY "embedding" <=> '${vector}'
        LIMIT 1;
    `;
    
    return database.raw(query);
}