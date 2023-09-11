from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, Float, String, DateTime, BigInteger, Boolean
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.dialects.postgresql import JSONB
import datetime, json, random

DeclBase = declarative_base()

class User(DeclBase):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True)
    password = Column(String)
    created = Column(DateTime, default=datetime.datetime.utcnow)

class Products(DeclBase):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(Integer)
    count = Column(Integer)
    price = Column(Float)
    created = Column(DateTime, default=datetime.datetime.utcnow)