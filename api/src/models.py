from pydantic import BaseModel
import datetime, json, random


class User(BaseModel):
    id: int  
    name: str = 'John Doe'  
    signup_ts: str | None  
    tastes: dict[str]  

class Product(BaseModel):
    id: int  
    name: str
    price: str | None  
    is_active: bool