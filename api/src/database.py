import psycopg2
from settings import SERVER_DATABASE, SERVER_USER, SERVER_PASSWORD, SERVER_HOSTNAME


def get_db_connection():
    try:
        connection = psycopg2.connect(
            database=SERVER_DATABASE,
            user=SERVER_USER,
            password=SERVER_PASSWORD,
            host=SERVER_HOSTNAME,
        )
        return connection

    except psycopg2.OperationalError as e:
        print("Help me, I'm falled!!")
        print(f"The error '{e}' occurred")

        return None

    
def db_connencion(func):
    def wraper(*args):
        conn = get_db_connection()

        if conn == None:
            return {'data':'connection lost', 'type': 'error'}
        
        cursor = conn.cursor()

        try:
            function_resault = func(*args, cursor)

        except Exception as ex:
            function_resault = {'data':ex, 'type': 'error'}
        
        conn.commit()

        cursor.close()
        conn.close()

        return function_resault
    
    return wraper

if __name__ == "__main__":
    get_db_connection()