# backend/app/routes.py

from flask import Blueprint, request, jsonify
from .controllers import search_flights, get_offers

api = Blueprint('api', __name__)

@api.route('/api/vuelos', methods=['POST'])
def vuelos():
    data = request.json  # Obtener datos JSON del cuerpo de la solicitud.
    results = search_flights(data['origin'], data['destination'], data['departureDate'], data['passengers'])
    return jsonify(results)

@api.route('/api/ofertas', methods=['GET'])
def ofertas():
    results = get_offers()
    return jsonify(results)