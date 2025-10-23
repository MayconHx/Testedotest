# Importe as novas bibliotecas
from flask import Flask, jsonify
from flask_cors import CORS # Importe o CORS

app = Flask(__name__)
CORS(app) # <<< Adicione esta linha para habilitar o CORS para toda a aplicação

# Rota principal
@app.route("/")
def home():
    return "Olá, mundo! Meu backend está funcionando!"

# Nova rota para os dados do seu projeto
@app.route("/api/meuprojeto")
def dados_do_projeto():
    dados = {
        "nomeDoProjeto": "Hackathon Vencedor",
        "status": "Em desenvolvimento",
        "dia": 1,
        "tecnologia": "Python (Flask) + JS" # Mudei aqui pra gente ver a atualização!
    }
    return jsonify(dados)

if __name__ == '__main__':
    app.run(debug=True)