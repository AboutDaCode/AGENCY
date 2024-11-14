# backend/run.py

from app import create_app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)  # Ejecuta la aplicación en modo debug.