from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/avni")
async def avni():
    return {"message": "hi avni!"}