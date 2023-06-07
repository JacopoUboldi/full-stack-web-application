import pymssql

class Wrapper:
    #192.168.40.16
    #5.172.64.20
    def __init__(self, server="192.168.40.16\SQLEXPRESS", db="CRD2122", usr="CRD2122", psw="xxx123##"):
        self._server = server
        self._db = db
        self._usr = usr
        self._psw = psw
    
    #connessione
    def connect(self):
        try:
            con = pymssql.connect(self._server, self._usr, self._psw, self._db)
            print("Connessione Riuscita")
            return con
        except Exception as e:
            print("Errore Durante La Connesione")
            print(e)
    
    #disconnessione
    def disconnect(self, con):
        try:
            con.close()
        except Exception as e:
            print("Errore Disconnessione")
            print(e)
        
    def insert(self, tabella,dati):
        con = self.connect()
        try:
            cur = con.cursor(as_dict=True)
            if dati["tabella"] == "V_Sale":
                query = "insert INTO V_Sale Values(%d,%s)"
                cur.execute(query, dati["IDAcquario"],dati["Tema"])
            elif dati["tabella"] == "V_Vasca":
                query = "insert INTO V_Vasca Values(%d,%d)"
                cur.execute(query, dati["IDSale"],dati["IDAcquario"])
            elif dati["tabella"] == "V_Esemplari" :
                query = "insert INTO V_Esemplari Values(%d,%s)"
                cur.execute(query, dati["IDVasca"],dati["NomeSpecie"])   
            con.commit()
            return 1
        except Exception as e:
            print(e)
        self.disconnect(con)

    def visua(self,tabella):
        con = self.connect()
        try:
            cur = con.cursor(as_dict=True)
            if tabella == "V_Acquario":
                query = "SELECT * FROM V_Acquario"
            elif tabella == "V_Sale":
                query = "SELECT * FROM V_Sale"
            elif tabella == "V_Vasca":
                query = "SELECT * FROM V_Vasca"
            elif tabella == "V_Esemplari" :
                query = "SELECT * FROM V_Esemplari"   
            else: 
                return 0
            cur.execute(query)
            res1 = cur.fetchall()
            return res1
        except Exception as e:
            print(e)
        self.disconnect(con)




