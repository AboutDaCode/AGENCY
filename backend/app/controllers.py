# backend/app/controllers.py

def search_flights(origin, destination, departure_date, passengers):
    # Simular respuesta con datos ficticios por ahora.
    mock_flights = [
        {
            'airline': 'AeroLine',
            'flightNumber': 'AL123',
            'departureTime': '10:00',
            'arrivalTime': '12:00',
            'duration': '2h',
            'price': 150,
            'availableSeats': 20,
        },
        {
            'airline': 'SkyHigh',
            'flightNumber': 'SH456',
            'departureTime': '14:30',
            'arrivalTime': '16:45',
            'duration': '2h 15m',
            'price': 180,
            'availableSeats': 15,
        }
    ]
    return mock_flights

def get_offers():
    # Simular respuesta con datos ficticios por ahora.
    mock_offers = [
        {'destination': 'París', 'origin': 'Madrid', 'price': 150},
        {'destination': 'Nueva York', 'origin': 'Barcelona', 'price': 450},
        {'destination': 'Tokio', 'origin': 'Londres', 'price': 700},
        {'destination': 'Roma', 'origin': 'Berlín', 'price': 120},
    ]
    return mock_offers