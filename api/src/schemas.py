from uuid import uuid4
import init_db
from psycopg2.extensions import cursor as cursor_type
from hashlib import sha256
from database import db_connencion 
# from models import Product

@db_connencion
def update_role(id: int, role: str, cursor: cursor_type) -> None:
    cursor.execute("UPDATE users SET role=%s WHERE id=%s;",
            (role, id)
    )
        
    return ('updated', cursor.statusmessage)

@db_connencion
def reg_user_old(firstname: str, lastname: str, email: str, password: str, cursor: cursor_type) -> None:
    cursor.execute(f"SELECT * FROM users WHERE email='{email}'")
    if cursor.fetchone() != None:
        return {'data':'emailExisting', 'type':'error'}
    
    hashed_password = sha256(password.encode()).hexdigest()

    cursor.execute('INSERT INTO users \
            ( firstname, lastname, email, password )'
            'VALUES (%s, %s, %s, %s);',
            (
                firstname, 
                lastname, 
                email,  
                hashed_password
            )
    )
    
    return {'data': 'reged'}

def init_database():
    init_db.init()


def string_formaterFor_sql(str: str):
    return str.replace('"', '\"')


################################## переписал
    
""" Products """
@db_connencion
def get_products(page: int, cursor: cursor_type ) -> list:
    cursor.execute(f'SELECT id, name, price, is_active FROM products WHERE is_active=true ORDER BY id LIMIT 12 OFFSET {(page - 1) * 12};')
    
    res = [dict((cursor.description[i][0], value) \
        for i, value in enumerate(row)) for row in cursor.fetchall()]
    
    return res

@db_connencion
def get_all_products(_start: int, end: int, order: str, sort: str, cursor: cursor_type ) -> list:
    cursor.execute(f'SELECT id, name, price, count, is_active FROM products ORDER BY id LIMIT 10 OFFSET {(_start)};')
    
    res = [dict((cursor.description[i][0], value) \
        for i, value in enumerate(row)) for row in cursor.fetchall()]
    
    return res

def errconn() -> object:    
    return {'data':'connection lost', 'type': 'error'}

@db_connencion
def delete_product(uuid: str, product_id: int, cursor: cursor_type):
    cursor.execute("UPDATE products SET is_active=%s WHERE id=%s;",
            (False, product_id)
    )
    exe_status = cursor.statusmessage

    return uuid, 

@db_connencion
def activate_product(uuid: str, product_id: int, cursor: cursor_type):
    cursor.execute("UPDATE products SET is_active=%s WHERE id=%s;",
            (True, product_id)
    )
    exe_status = cursor.statusmessage

    return uuid, exe_status

@db_connencion
def get_products_count(cursor: cursor_type) -> int:
    cursor.execute('SELECT COUNT(*) FROM products;')
    print('type: ', type(cursor))
    return cursor.fetchone()[0]


@db_connencion
def get_products_by_category(category: str, page: int, cursor: cursor_type):
    cursor.execute(f"SELECT id, name, category, price FROM products WHERE category @@ '{category}' ORDER BY id LIMIT 12 OFFSET {(page - 1) * 12};")
    
    res = [dict((cursor.description[i][0], value) \
        for i, value in enumerate(row)) for row in cursor.fetchall()]
    
    return res

@db_connencion
def get_one_product(id: int, cursor: cursor_type):
    cursor.execute(f"SELECT id, name, price, count, is_active FROM products WHERE id = '{id}';")
    
    res = [dict((cursor.description[i][0], value) \
        for i, value in enumerate(row)) for row in cursor.fetchall()][0]
    
    return res

@db_connencion
def put_one_product(id: int, name: str, count: int, is_active: bool, price: int, cursor: cursor_type):
    cursor.execute("UPDATE products SET name=%s, price=%s, count=%s, is_active=%s WHERE id=%s;",
                   (name, count, is_active, price, id))
    return {'status': cursor.statusmessage}

@db_connencion
def search_product(request: str, page: int, cursor: cursor_type):
    cursor.execute(f"SELECT id, name, is_active, price FROM products WHERE name @@ '{request}' AND is_active=true  ORDER BY id LIMIT 12 OFFSET {(page - 1) * 12};")
    
    return [dict((cursor.description[i][0], value) \
        for i, value in enumerate(row)) for row in cursor.fetchall()]

""" Cart """
@db_connencion
def add_to_cart(uuid: str, product_id: int, count: int, cursor: cursor_type):
    if uuid == '':
        uuid = uuid4().__str__()

    if count <= 0:
        count = 1

    cursor.execute(f"SELECT * FROM carts WHERE uuid='{uuid}' AND product_id='{product_id}'")
        
    if cursor.fetchone() == None:
        cursor.execute('INSERT INTO carts \
            ( uuid, product_id, count )'
            'VALUES (%s, %s, %s);',
            (
                uuid, 
                product_id, 
                count, 
            )
        )
    else:
        cursor.execute('UPDATE carts \
            SET count=%s WHERE uuid=%s and product_id=%s',
            (
                count,
                uuid, 
                product_id
            )
        )
    
    exe_status = cursor.statusmessage

    return uuid, exe_status

@db_connencion
def delete_from_cart(uuid: str, product_id: int,  cursor: cursor_type):
    if uuid == '':
        return 'failed delete from none'
    
    cursor.execute('DELETE FROM carts \
                   WHERE uuid=%s and product_id=%s',
            (
                uuid, 
                product_id
            )
    )

    exe_status = cursor.statusmessage

    return uuid, exe_status

@db_connencion
def get_from_cart(uuid: str, cursor: cursor_type):
    cursor.execute(
        f"SELECT p.name, p.id, p.price, c.count \
        FROM products p, carts c \
        WHERE p.id = c.product_id AND c.uuid = '{uuid}';"
    )

    res = [dict((cursor.description[i][0], value) \
        for i, value in enumerate(row)) for row in cursor.fetchall()]
    
    return res


""" Auth """
@db_connencion
def admin_auth(email: str, password: str, cursor: cursor_type) -> dict:
    hashed_password = sha256(password.encode()).hexdigest()

    cursor.execute(f"SELECT id, email FROM users where email='{email}' AND password='{hashed_password}' AND role='admin';")
    publisher_records = cursor.fetchone()
    
    if publisher_records == None:
        return {'data': 'incorrectPassword', 'type': 'error'}
    
    print("publisher_records:", publisher_records)

    _uuid = uuid4().__str__()
    cursor.execute("UPDATE users SET uuid=%s WHERE id=%s;",
            (_uuid, publisher_records[0])
    )

    if publisher_records.__len__() < 1:
        return {'data': 'notAllowed', 'type': 'error'}
    else:
        return {'data': _uuid, 'type': 'successful'}

@db_connencion
def user_register(first_name: str, last_name: str, email: str, cursor: cursor_type):
    cursor.execute(f"SELECT * FROM users WHERE email='{email}'")
    if cursor.fetchone() != None:
        return {'data':'emailExisting', 'type':'error'}

    _uuid = uuid4().__str__()
    cursor.execute('INSERT INTO users \
            ( firstname, lastname, email, uuid )'
            'VALUES (%s, %s, %s, %s);',
            (
                first_name, 
                last_name, 
                email,
                _uuid 
            )
    )
    
    if cursor.statusmessage == "INSERT 0 1":
        return {'data':_uuid, 'type':'successful'}
    else:
        return {'data':'unnamed error', 'type':'error'}

@db_connencion
def get_token():
    pass


""" Orders """
@db_connencion
def get_orders_by_user(user_uuid: str, cursor: cursor_type):
    cursor.execute(
        f"SELECT * FROM orders \
        WHERE user_uuid = '{user_uuid}';"
    )

    res = [dict((cursor.description[i][0], value) \
        for i, value in enumerate(row)) for row in cursor.fetchall()]
    
    return res

@db_connencion
def get_order_items_by_order(order_uuid: str, cursor: cursor_type):
    cursor.execute(
        f"SELECT p.name, p.id, p.price, o.count \
        FROM products p, order_items o \
        WHERE p.id = o.product_id AND o.order_uuid = '{order_uuid}';"
    )

    res = [dict((cursor.description[i][0], value) \
        for i, value in enumerate(row)) for row in cursor.fetchall()]
    
    return res

@db_connencion
def get_orders_by_id(id: int, cursor: cursor_type):
    cursor.execute(
        f"SELECT order_uuid, user_uuid FROM orders \
        WHERE id = '{id}';"
    )
    order_info = cursor.fetchone()

    # print('order_info:', order_info)
    cursor.execute(
        f"SELECT p.name, p.id, p.price, o.count \
        FROM products p, order_items o \
        WHERE p.id = o.product_id AND o.order_uuid = '{order_info[0]}';"
    )

    res = [dict((cursor.description[i][0], value) \
        for i, value in enumerate(row)) for row in cursor.fetchall()]
    
    return res

@db_connencion
def create_order(user_uuid: str, products_in_cart: list[dict], cursor: cursor_type) -> tuple:
    """create order and return order uuid"""
    order_uuid = uuid4().__str__()

    for product in products_in_cart:
        cursor.execute('INSERT INTO order_items \
                ( order_uuid, product_id, count )'
                'VALUES (%s, %s, %s);',
                (
                    order_uuid, 
                    product['id'], 
                    product['count'], 
                )
            )
    
    cursor.execute('INSERT INTO orders \
        ( order_uuid, user_uuid, status )'
        'VALUES (%s, %s, %s);',
        (
            order_uuid, 
            user_uuid, 
            'created', 
        )
    )
    
    exe_status = cursor.statusmessage

    return order_uuid, exe_status

@db_connencion
def get_all_orders(order: str, _start: int, cursor: cursor_type ) -> list:
    cursor.execute(
        f"SELECT * FROM orders ORDER BY id LIMIT 10 OFFSET {(_start)};"
    )
    
    res = [dict((cursor.description[i][0], value) \
        for i, value in enumerate(row)) for row in cursor.fetchall()]
    
    return res

if __name__ == "__main__":
    data = {'id': 1, 'name': 'Книга учета А4 160 л. глянцевая ламинация', 'price': 210, 'count': 14, 'is_active': True} # await request.json()
    print(put_one_product(data['id'], data['name'], data['price'], data['count'], data['is_active']))

    # ro = user_register('lddads', 'asdddafsd', 'named@nk.ru')
    # print(ro)
    # print(type(ro))
    # print(
    #     'res:', 
    #     get_from_cart('c11589f2-ce86-4691-8953-111a33c4c3e8')
    # )

    # print(add_to_cart('uuid-asd', 12, 2))
    # print(get_orders_by_id(1))

    # SELECT title || ' ' ||  author || ' ' ||  abstract || ' ' || body AS document
    # FROM messages
    # WHERE mid = 12;

    # SELECT m.title || ' ' || m.author || ' ' || m.abstract || ' ' || d.body AS document
    # FROM messages m, docs d
    # WHERE m.mid = d.did AND m.mid = 12;