import cherrypy 
from Wrapper import Wrapper
@cherrypy.expose 
class Page : 
    

    @cherrypy.expose
    @cherrypy.tools.json_out()
    def GET (self,tabella):
        w= Wrapper()
        if tabella == "V_Acquario":
            pass
        elif tabella == "V_Sale":
            pass
        elif tabella == "V_Vasca":
            pass
        elif tabella == "V_Esemplari" :
            pass  
        else: 
            return {"esito" : 0}
        return w.visua(tabella)
    
    @cherrypy.expose
    @cherrypy.tools.json_out()
    @cherrypy.tools.json_in()
    def POST(self) : 
        data = cherrypy.request.json
        w= Wrapper()
        if data["tabella"] == "V_Acquario":
            pass
        elif data["tabella"] == "V_Sale":
            pass
        elif data["tabella"] == "V_Vasca":
            pass
        elif data["tabella"] == "V_Esemplari" :
            pass  
        else: 
            return {"esito" : 0}
        return w.insert(data)
        


conf = {
    '/': {
        'request.dispatch': cherrypy.dispatch.MethodDispatcher(),
        'tools.sessions.on': True,
        'tools.response_headers.on': True,
        #'tools.response_headers.headers': [('Content-Type', 'application/json')]
        #devo aggiungere l'header "Access-Control-Allow-Origin" per abilitare le richieste da un dominio differente
        'tools.response_headers.headers': [
            #('Content-Type', 'application/json'), 
            ('Access-Control-Allow-Origin', '*'), 
            #("Access-Control-Allow-Headers", "*")
            #("Access-Control-Allow-Headers", "X-Requested-With")
            ("Access-Control-Allow-Headers", "ngrok-skip-browser-warning")
        ],
        #tolgo l'autenticazione per il momento
        #'tools.auth_basic.on': True,
        #'tools.auth_basic.realm': MyController.RLM,
        #'tools.auth_basic.checkpassword': MyController.validate_password
    }
}  
    
cherrypy.quickstart(Page(),config=conf)


    

