# 🧑🏻‍💻 Tabs Or Spaces
## openAi embeddings + vector database

Basic example of how to use OpenAI's embeddings API to generate text embeddings and save them to a Postgres vector database. 

The repository includes code that demonstrates how to search the database for similar text data based on cosine similarity scores between the input query and the stored embeddings.

The repository also includes documentation on how to set up and configure the Postgres database and PostgreSQL Vector extension.

This repository can be used as a starting point for building more complex applications that require text data search and analysis using OpenAI's embeddings API and Postgres vector database.


## Requires
**pgvector:** https://github.com/pgvector/pgvector

**postgreql** https://www.postgresql.org/download/

## Quickstart

Clone the project
```bash
  git clone https://github.com/michaelJyee/openai-vector-database
```

Go to the project directory

```bash
  cd openai-vector-database
```

Install dependencies

```bash
  npm install
```

configure .env file

```
# .env

POSTGRESQL_CONNECTION = "<POSTGRES STRING CONNECTION>"
OPENAI_API_KEY        = "<OPENAI API KEY>";
```

Create Table

```bash
node create_table.js
```

Create Records

```bash
node create_records.js
```

Search Records

```bash
node find_records.js
```