from utils.dbHelper import dbconnection as dbconn
import __variable__ as var

def insertTable(table_name,values):
    """insert user into database by value

        Params:
            value: (names,active,id,last_modified,register_time)
    """
    try:
        conn = dbconn.dbconnect(var.CONNSTRING)
        query_str = ''

        if table_name == var.GROUPS:
            query_str = 'insert into GROUPS(SIGN_IN_NAME,PASSWORDS,GMAIL) values(?,?,?);'
        if table_name == var.LISTS:
            query_str = 'insert into LIST(GROUP_NAME,NUMBER_NOTE) values(?,?);'
        if table_name == var.SMART_LISTS:
            query_str = 'insert into SMART_LIST(LIST_NAME,LIST_STATUS) values(?,?);'              
        if table_name == var.TASKS:
            query_str = 'insert into TASK(LIST_NAME,LIST_STATUS) values(?,?);'
        if table_name == var.USERS:
            query_str = 'insert into USERS(SIGN_IN_NAME,PASSWORDS,GMAIL) values(?,?,?);'
        
        dbconn.dbquery(conn,query_str,values)
        conn.close()
    except:
        return False
def selectTableAll(table_name):
    """select user from database by id
    
        Params:
            table_name:str
    """
    try:
        conn = dbconn.dbconnect(var.CONNSTRING)

        query_str = ""
        if table_name == var.GROUPS:
            query_str = "select * from GROUPS"
        if table_name == var.LISTS:
            query_str = "select * from LIST"
        if table_name == var.SMART_LISTS:
            query_str = "select * from SMART_LISTS"             
        if table_name == var.TASKS:
            query_str = "select * from TASK"
        if table_name == var.USERS:
            query_str = "select * from USERS"

        rows = dbconn.dbread(conn,query_str)
        return rows
    except :
        return False
def selectTableById(id,table_name):
    """select user from database by id
    
        Params:
            id:str
    """
    try:
        conn = dbconn.dbconnect(var.CONNSTRING)

        query_str = ""
        if table_name == var.GROUPS:
            query_str = "select * from GROUPS where id ="+id
        if table_name == var.LISTS:
            query_str = "select * from LIST where id ="+id
        if table_name == var.SMART_LISTS:
            query_str = "select * from SMART_LIST where id ="+id             
        if table_name == var.TASKS:
            query_str = "select * from TASK where id ="+id
        if table_name == var.USERS:
            query_str = "select * from USERS where id ="+id

        rows = dbconn.dbread(conn,query_str)
        for row in rows:
            conn.close()
            return [row[2],row[0]]
    except :
        return False

def updateTableById(id,table_name):
    """select user from database by id
    
        Params:
            id:str
    """
    try:
        conn = dbconn.dbconnect(var.CONNSTRING)

        query_str = ""
        if table_name == var.GROUPS:
            query_str = "update GROUPS set GROUP_NAME = '',NUMBER_NOTE = 1 where id ="+id
        if table_name == var.LISTS:
            query_str = "update LIST set LIST_NAME = '',LIST_STATUS = 1 where id ="+id
        if table_name == var.SMART_LISTS:
            query_str = "update SMART_LIST set LIST_NAME = '',LIST_STATUS = 1 where id ="+id              
        if table_name == var.TASKS:
            query_str = "update TASK"+"TASK_NAME = '',DETAIL='',STARTTIME='',ENDTIME='',TASK_STATUS=''"+" where id ="+id
        if table_name == var.USERS:
            query_str = "update USERS where id ="+id

        dbconn.dbquery(conn,query_str)
        conn.close()
    except :
        return False

def deleteTableById(id,table_name):
    """delete user from database by id
    
        Params:
            id:str
    """
    try:
        conn = dbconn.dbconnect(var.CONNSTRING)

        query_str = ""
        if table_name == var.GROUPS:
            query_str = "delete from GROUPS where id ="+id
        if table_name == var.LISTS:
            query_str = "delete from LIST where id ="+id
        if table_name == var.SMART_LISTS:
            query_str = "delete from SMART_LIST where id ="+id             
        if table_name == var.TASKS:
            query_str = "delete from TASK where id ="+id
        if table_name == var.USERS:
            query_str = "delete from USERS where id ="+id
        dbconn.dbquery(conn,query_str)
        conn.close()
        return True
    except:
        return False
