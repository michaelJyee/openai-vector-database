const { createEmbedding } = require('./lib/openai_api.js');
const { writeToDatabase } = require('./lib/database.js');

/* DEMO DATA - DESCRIPTIONS OF ANIMALS */
const DEMO_DATA = [
    "Dogs - Domesticated mammals, known for their loyalty and friendly nature.",
    "Cats - Domesticated mammals, known for their independent and playful nature.",
    "Elephants - Largest land animals, known for their intelligence and memory.",
    "Penguins - Flightless birds, known for their black and white feathers and waddling walk.",
    "Dolphins - Aquatic mammals, known for their playful behavior and intelligence.",
    "Lions - Large carnivorous cats, known for their impressive manes and hunting skills.",
    "Gorillas - Primates, known for their strength and intelligence.",
    "Snakes - Reptiles, known for their elongated bodies and ability to slither.",
    "Tigers - Large carnivorous cats, known for their distinctive stripes and strength.",
    "Sharks - Aquatic predators, known for their sharp teeth and powerful bodies."
];

main();

async function main() {
    for(let i = 0; i < DEMO_DATA?.length; i++){
        const value = DEMO_DATA[i];
        const embedding = await createEmbedding(value);
        await writeToDatabase(value, embedding);
    }

    console.log("✅ records created!");
    process.exit(0);
}