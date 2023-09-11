from database import get_db_connection
import random


cat = ['phones', 'cases', 'charger', 'notebooks']
def struct_prod(prod):
    product: list[str] = prod.replace('\n', '').split(';')

    try:
        count = int(
                product[1]
                .replace(' ', '')
                .replace(' ', '')
                .replace(',', '.')
            )
    except:
        # print('Failed count: ', product[1])
        count = 0

    try:
        price = float(
                product[3]
                .replace(' ', '')
                .replace(' ', '')
                .replace(',', '.')
            )
    except:
        # print('Failed price: ', product[3])
        price = 0
    return product[0], count, price

def main():
    con = get_db_connection()
    cursor = con.cursor()
    
    cursor.execute('SELECT * FROM products')
    
    print(cursor.fetchone())
    
    try:
        # cursor.execute('SELECT * FROM products')

        # print('cur:\n', cursor.fetchall(), '\n')

        with open('db.csv', 'r+', encoding='utf-8') as f:
            i = 1
            headers = f.readline()
            print(headers)
            
            while (line := f.readline()): # and i < 10:
                name, count, price = struct_prod(line)

                cursor.execute('INSERT INTO products \
                    ( name, category, count, price )'
                    'VALUES (%s, %s, %s, %s);',
                    (
                        name, 
                        random.sample(cat, 1), 
                        count, 
                        price,
                    )
                )
                
                con.commit()
                print(i, end=';')
                i += 1
    except Exception as ex:
        print('Exception: ', ex)

    finally:
        cursor.close()
        con.close()


if __name__ == '__main__':
    main()