from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient

# Connect to the MongoDB server
client = MongoClient('mongodb://localhost:27017/')

# Select the database you want to use
db = client['admin']

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "hey"}

@app.get("/emails")
async def get_emails():
     # Select the collection within the database
    collection = db['email_documents']

    # Query the collection for documents
    users = []
    for document in collection.find():
        users.append(document)

    return users

@app.get("/emails/{email_id}")
async def get_email(email_id: str):
    collection = db['email_documents']

    # Query the collection for documents
    user = collection.find_one({'_id' : email_id})
    
    return user


@app.get("/users")
async def get_users():
    # Select the collection within the database
    collection = db['users']

    # Query the collection for documents
    users = []
    for document in collection.find():
        users.append(document)

    return users


@app.get("/users/{user_id}")
async def get_user(user_id: str):
    collection = db['users']

    # Query the collection for documents
    user = collection.find_one({'_id' : user_id})
    
    return user



# find_one