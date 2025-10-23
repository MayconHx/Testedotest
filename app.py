from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World, O back tá on BB!'

@app.route('/projeto')
def api():
    data = {
        'projeto': 'API Flask',
        'versao': '1.0',
        'descricao': 'Uma API simples usando Flask'
    }

    return jsonify(data)
if __name__ == '__main__':
    app.run(debug=True)