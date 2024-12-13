Make sure you have Docker installed on your machine and run the docker engine.

To run the project, you need to install the dependencies and run the development client and LLM model in docker.

```bash
pnpm install
pnpm dev
```

Then to run the server, you need to the following steps:

```bash
cd server
cd fastapi
.\env\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```