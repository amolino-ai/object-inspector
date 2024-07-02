from fastapi import FastAPI

app = FastAPI()

mock_items = [
    {"id": 1, "name": "Item 1", "value": 5},
    {"id": 2, "name": "Item 2", "value": 121},
    {"id": 3, "name": "Item 3", "value": 4},
]

mock_users = [
    {"id": 1, "username": "user1", "email": "user1@example.com"},
    {"id": 2, "username": "user2", "email": "user2@example.com"},
    {"id": 3, "username": "user3", "email": "user3@example.com"},
]

@app.get("/")
async def root():
    return {"message": "hey"}

@app.get("/items")
async def get_items():
    return mock_items

@app.get("/items/{item_id}")
async def get_item(item_id: int):
    item = None
    for i in mock_items:
        if i["id"] == item_id:
            item = i; 
            break
    return item

@app.get("/users")
async def get_users():
    return mock_users

@app.get("/users/{user_id}")
async def get_user(user_id: int):
    user = None
    for u in mock_users:
        if u["id"] == user_id:
            user = u
            break
    return user