# -*- coding: utf-8 -*-
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from fastapi.responses import RedirectResponse

import schemas as db
from uuid import uuid4


app = FastAPI(debug=True)

# origins = ["*"]

origins = [
    "http://localhost",
    "http://localhost:80",
    "http://localhost:8888",
    "http://localhost:3000",
    
    "http://185.221.162.85",
    "http://185.221.162.85:80",
    "http://185.221.162.85:8888",
    "http://185.221.162.85:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type", "Access-Control-Request-Headers", "Access-Control-Allow-Methods", "Access-Control-Allow-Origin", "Authorization", "x-total-count"],
)


@app.get("/")
def read_root():
    return RedirectResponse("/docs")

@app.get("/products_count")
def products_count():
    return db.get_products_count()

@app.get("/products")
def products(page: int = 1):
    page = 1 if page <= 0 else page
    return db.get_products(page)

@app.get("/errconn")
def errconn():
    return db.errconn()

@app.get("/search")
def search(request: str, page: int = 1):
    page = 1 if page <= 0 else page
    return db.search(request, page)

@app.get("/products/{category}")
def products_category(category: str, page: int = 1):
    page = 1 if page <= 0 else page
    return db.get_products_by_category(category, page)

@app.get("/product/{id}")
def get_one_product(id: int):
    return db.get_one_product(id)

@app.get("/cart/")
def cart(uuid: str):
    return db.get_from_cart(uuid)

@app.post("/add_to_cart")
def add_to_cart(uuid: str, product_id: int, count: int):
    return db.add_to_cart(uuid, product_id, count)

@app.post("/delete_from_cart")
def delete_from_cart(uuid: str, product_id: int):
    return db.delete_from_cart(uuid, product_id)
