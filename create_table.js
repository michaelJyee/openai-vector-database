const { database } = require('./lib/database.js');

main();

async function main () {
    const setupQuery = `
        /* 1. Add Vector Extension To Database */
        CREATE EXTENSION IF NOT EXISTS Vector;

        /* 2. Create Table With Vector Column */
        CREATE TABLE IF NOT EXISTS "items" (
            description  varchar,
            embedding    vector(1536) /* openAi vector's have 1536 demensions */
        );
    `;
    
    try{
        console.log("🤖 Running query:", setupQuery);
        await database.raw(setupQuery);
        console.log("✅ Success!");
        process.exit(0);
    }
    catch(e) {
        console.error("❌ Failed to setup table", e);
    }
}