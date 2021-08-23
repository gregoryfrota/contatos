"# Lista de Contatos" 

Utilizado:

- Python 3.9.6
- pip e venv
- Node.js 6+ ***necessário
- npm 5.2
- django-cors-headers
- React
- Bootstrap
- Axios
- Database Postgres

Para esse projeto necessário instalar virtualenv, segue script abaixo:
 ```
	sudo pip install virtualenv
 ```
Navegue até o diretório contato(pasta do projeto):
 ```
	cd contato
```
Ative o ambiente virtual env:

```
	Windows
		env\Scripts\activate
	Linux
 		source env/bin/activate
 ```
Para esse projeto é necessário django, django rest framework, django-cors-headers e postgres
segue comando abaixo para instalar todos;
 
 ```
	pip install django djangorestframework django-cors-headers psycopg2
 ```

Abra o arquivo contatos/contatoapi/settings.py e altere as configurações de conexão ao banco
** as configurações abaixo já estão de acordo com as que estavam rodando no localhost.

```
 DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'lista_contatos',
        'USER': 'myuser',
        'PASSWORD': 'root',
        'HOST': 'localhost',
        'PORT': '5432',
    }
 }
 ```
************Segue anexo os scripts das tabelas para rodar no postgres


Execute o servidor para rodar, va para a pasta raiz do projeto contato e execute o comando:
 ```
 python manage.py runserver
 ```

*****Endereços da api*******:
 ```
	http://127.0.0.1:8000/contatoapi/pessoa/ #retorna todas as pessoas cadastradas.
	http://127.0.0.1:8000/contatoapi/pessoa/5 #retorna uma pessoa específica passando um id no final
	http://127.0.0.1:8000/contatoapi/telefone/ #retorna todos os telefones cadastrados
	http://127.0.0.1:8000/contatoapi/telefone/32 #retorna um telefone específico passando um id no final
	http://127.0.0.1:8000/contatoapi/telefone/pessoa/1 #retorna todos os telefones cadastrados da pessoa de id = 1
 ```


***Importante foi utilizado Axios, cliente HTTP que faz chamadas na API, caso não tenha instalado segue script abaixo:

 ```
 	Navegue a até a pasta frontend: cd contatos/frontend
	***Necessário instalar npm
 	E execute o comando: npm install axios --save
 ```

****Foi utilizado React Router caso não tenha instalado segue abaixo
```
	Navegue a até a pasta frontend: cd contatos/frontend
	npm install --save react-router-dom
```

Para rodar o react abra outro prompt de comando e deixe a env rodando conforme foi informado anteriormente, 
e nesse outro prompt que foi aberto execute estes comandos:
 ```
	Navegue a até a pasta frontend: cd contatos/frontend
	npm start
 ```
Endereço do frontend com react:
 ```
	http://localhost:3000/
```
