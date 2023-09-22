# -*- coding: utf-8 -*-
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from fastapi.responses import RedirectResponse, JSONResponse

import schemas as db


app = FastAPI(debug=True)

origins = ['*']

# origins = [
#     'http://localhost',
#     'http://localhost:80',
#     'http://localhost:8000',
#     'http://localhost:8888',
#     'http://localhost:3000',

#     'http://karina-plus.ru',
#     'http://karina-plus.ru:80',
#     'http://karina-plus.ru:8000',
#     'http://karina-plus.ru:8888',
#     'http://karina-plus.ru:3000',

#     'http://185.221.162.85',
#     'http://185.221.162.85:80',
#     'http://185.221.162.85:8000',
#     'http://185.221.162.85:8888',
#     'http://185.221.162.85:3000',

#     'http://185.195.25.186',
#     'http://185.195.25.186:80',
#     'http://185.195.25.186:8000',
#     'http://185.195.25.186:8888',
#     'http://185.195.25.186:3000',
# ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type", "Access-Control-Request-Headers", "Access-Control-Expose-Headers", "Access-Control-Allow-Methods", "Access-Control-Allow-Origin", "Authorization", "X-Total-Count"],
    expose_headers=['X-Total-Count'],
)

headers = {'X-Total-Count': str(db.get_products_count()), 'Content-Language': 'ru-RU'}

@app.get('/')
def read_root():
    return RedirectResponse('/docs')

@app.get('/errconn')
def errconn():
    return  db.errconn()

@app.get('/products_count')
def products_count():
    content: int = db.get_products_count()
    
    return JSONResponse(content=content, headers=headers)

@app.get('/products')
def products(page: int = 1):
    page = 1 if page <= 0 else page
    content: list = db.get_products(page)
    return JSONResponse(content=content, headers=headers)

@app.get('/get_all_products')
def get_all_products(_order: str = 'ASC', _start: int = 0):
    _start = 0 if _start < 0 else _start
    content: list = db.get_all_products(_order, _start)
    return JSONResponse(content=content, headers=headers)

@app.get('/search')
def search(request: str, page: int = 1):
    page = 1 if page <= 0 else page
    content: list = db.search(request, page)
    return JSONResponse(content=content, headers=headers)

# @app.get('/products/{category}')
# def products_category(category: str, page: int = 1):
#     page = 1 if page <= 0 else page
#     return  db.get_products_by_category(category, page)

@app.get('/product/{id}')
def get_one_product(id: int):
    return  db.get_one_product(id)

@app.get('/cart/')
def cart(uuid: str):
    return  db.get_from_cart(uuid)

@app.post('/add_to_cart')
def add_to_cart(uuid: str, product_id: int, count: int):
    return  db.add_to_cart(uuid, product_id, count)

@app.post('/delete_from_cart')
def delete_from_cart(uuid: str, product_id: int):
    return  db.delete_from_cart(uuid, product_id)

@app.post('/login_user')
def login_user(login: str, password: str):
    if login == 'admin' and password == 'admin':
        return {'data': 'uuid_user_lol'}
    else:
        return {'data': 'failed'}
