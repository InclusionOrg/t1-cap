const fetchReservations = async() => {
    return fetch('/reservations')
        .then(res => res.json())
        .then(reservations => {
            return reservations
        });
}

module.exports = {fetchReservations};