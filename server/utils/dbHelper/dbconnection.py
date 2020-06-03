##DATABASE SQL SERVER 2017
import pyodbc

def dbconnect(connstr):
    """Connecting into database

    Params:
        connstrn: str
    """
    return pyodbc.connect(connstr)

def dbread(conn,querystr):
    """Read Database
    
    Params:
        conn: str
        querystr: str
    """
    cursor = conn.cursor()
    cursor.execute(querystr)
    raws = cursor.fetchall()
    return raws

def dbquery(conn,querystr,invalues = ()):
    """Query data
    
    Params:
        conn: str
        querystr: str
        invalues: obj
    """
    try:
        cursor  = conn.cursor()
        cursor.execute(querystr,invalues)
        conn.commit()
        return True
    except:
        return False
