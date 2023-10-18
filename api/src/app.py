# -*- coding: utf-8 -*-
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from fastapi.responses import RedirectResponse, JSONResponse

import schemas as db

tags_metadata = [
    {
        "name": "products",
        "description": "Products page and activites",
    },
    {
        "name": "cart",
        "description": "Cart page and activites",
        # "externalDocs": {
        #     "description": "Items external docs",
        #     "url": "https://fastapi.tiangolo.com/",
        # },
    },
    {
        "name": "orders",
        "description": "Orders page and activites",
    },
]

app = FastAPI(debug=True, openapi_tags=tags_metadata)

# app = FastAPI(debug=True)

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
    return JSONResponse(content=db.errconn(), headers=headers)


"""Products API"""
@app.get('/products_count', tags=['products'])
def products_count():
    content: int = db.get_products_count()
    
    return JSONResponse(content=content, headers=headers)

@app.get('/products', tags=['products'])
def products(page: int = 1):
    page = 1 if page <= 0 else page
    content: list = db.get_products(page)
    return JSONResponse(content=content, headers=headers)

@app.get('/get_all_products/{id}', tags=['products'])
def get_one_product(id: int):
    content = db.get_one_product(id)
    return JSONResponse(content=content, headers=headers)

@app.get('/get_all_products', tags=['products'])
def get_all_products(_order: str = 'ASC', _start: int = 0):
    """For api admin"""
    _start = 0 if _start < 0 else _start
    content: list = db.get_all_products(_order, _start)
    return JSONResponse(content=content, headers=headers)

# @app.get('/get_all_products', tags=['products'])
# def get_one_product(id: int):
#     content = db.get_one_product(id)
#     return JSONResponse(content=content, headers=headers)


@app.get('/search', tags=['products'])
def search(request: str, page: int = 1):
    page = 1 if page <= 0 else page
    content: list = db.search(request, page)
    return JSONResponse(content=content, headers=headers)

@app.post('/delete_product', tags=['products'])
def delete_product(uuid: str, product_id: int):
    content = db.delete_product(uuid, product_id)
    return JSONResponse(content=content, headers=headers)

@app.post('/activate_product', tags=['products'])
def activate_product(uuid: str, product_id: int):
    content = db.activate_product(uuid, product_id)
    return JSONResponse(content=content, headers=headers)


"""Cart page and activites"""
@app.get('/cart/', tags=['cart'])
def cart(uuid: str):
    content = db.get_from_cart(uuid)
    return JSONResponse(content=content, headers=headers)

@app.post('/add_to_cart', tags=['cart'])
def add_to_cart(uuid: str, product_id: int, count: int):
    content = db.add_to_cart(uuid, product_id, count)
    return JSONResponse(content=content, headers=headers)

@app.post('/delete_from_cart', tags=['cart'])
def delete_from_cart(uuid: str, product_id: int):
    content = db.delete_from_cart(uuid, product_id)
    return JSONResponse(content=content, headers=headers)


"""Orders page and activites"""
@app.get('/get_all_orders', tags=['orders'])
def get_all_orders(_order: str = 'ASC', _start: int = 0):
    """For api admin"""
    _start = 0 if _start < 0 else _start
    content: list = db.get_all_orders(_order, _start)
    return JSONResponse(content=content, headers=headers)

@app.get('/get_all_orders/{id}', tags=['orders'])
def get_orders_by_id(id: int):
    content: list = db.get_orders_by_id(id)
    content: list = db.get_all_orders('ASC', 0)
    return JSONResponse(content=content, headers=headers)

@app.get('/get_orders_by_user', tags=['orders'])
def get_orders_by_user(user_uuid: str):
    content: list = db.get_orders_by_user(user_uuid)
    return JSONResponse(content=content, headers=headers)

@app.get('/get_order_items_by_order', tags=['orders'])
def get_order_items_by_order(order_uuid: str):
    content = db.get_order_items_by_order(order_uuid)
    return JSONResponse(content=content, headers=headers)

@app.post('/create_order', tags=['orders'])
def create_order(user_uuid: str, products_in_cart: list[dict]):
    content = db.create_order(user_uuid, products_in_cart)
    return JSONResponse(content=content, headers=headers)


"""In dev"""
@app.post('/login_user')
def login_user(login: str, password: str):
    if login == 'admin' and password == 'admin':
        return {'data': 'uuid_user_lol'}
    else:
        return {'data': 'failed'}
