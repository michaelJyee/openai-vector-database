const { createEmbedding } = require('./lib/openai_api.js');
const { searchByVector } = require('./lib/database.js');

main();

async function main () {
    const searchFor = "a bird that cannot fly";
    console.log("Searching for something like:", searchFor);
    const vector = await createEmbedding(searchFor);

    let result = await searchByVector(vector);
    console.log("closest result:", result.rows);
}