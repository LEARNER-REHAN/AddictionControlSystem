from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pymongo import MongoClient
import bcrypt
import os
from dotenv import load_dotenv

# ================= LOAD ENV =================
load_dotenv()

app = FastAPI()

# ================= CORS =================
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ================= DATABASE =================
client = MongoClient(os.getenv("MONGO_URI"))
db = client[os.getenv("DATABASE_NAME")]
users_collection = db["users"]

# ================= MODELS =================

class RegisterModel(BaseModel):
    fullName: str
    username: str
    email: str
    password: str
    addictionType: str

class LoginModel(BaseModel):
    username: str
    password: str

class ChatRequest(BaseModel):
    message: str

# ================= REGISTER =================

@app.post("/api/register")
def register(user: RegisterModel):
    existing_user = users_collection.find_one({"username": user.username})

    if existing_user:
        raise HTTPException(status_code=400, detail="Username already exists")

    hashed_password = bcrypt.hashpw(
        user.password.encode("utf-8"),
        bcrypt.gensalt()
    )

    users_collection.insert_one({
        "fullName": user.fullName,
        "username": user.username,
        "email": user.email,
        "password": hashed_password,
        "addictionType": user.addictionType
    })

    return {"message": "User registered successfully"}

# ================= LOGIN =================

@app.post("/api/login")
def login(user: LoginModel):
    db_user = users_collection.find_one({"username": user.username})

    if not db_user:
        raise HTTPException(status_code=401, detail="Invalid username or password")

    if not bcrypt.checkpw(user.password.encode("utf-8"), db_user["password"]):
        raise HTTPException(status_code=401, detail="Invalid username or password")

    return {
        "message": "Login successful",
        "username": db_user["username"],
        "fullName": db_user.get("fullName"),
        "addictionType": db_user.get("addictionType")
    }