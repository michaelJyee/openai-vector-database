const { Configuration, OpenAIApi } = require('openai');

const OPENAI_API_KEY = '<OPENAI API KEY>';

const configuration = new Configuration({
    apiKey: OPENAI_API_KEY
});

const model = "text-embedding-ada-002";
const openai = new OpenAIApi(configuration);

/* Takes String And Returns Embedding Value */
async function _createEmbedding(text){
    try{
        let response = await openai.createEmbedding({model, input: text })
        let embedding = response?.data?.data?.[0]?.embedding;
        console.log(`✅ Creating embedding for: "${text}"`);

        return embedding;
    }
    catch(e){
        console.error("Error creating embedding!", e);
    }
}

module.exports.createEmbedding = _createEmbedding;