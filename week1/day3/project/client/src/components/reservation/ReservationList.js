import React, {Component} from 'react';

class ReservationList extends Component {
    state = {
        reservations: []
    }

    componentDidMount() {
        fetch('/reservations')
            .then(res => res.json())
            .then(reservations => this.setState({ reservations }));
    }

    render() {
        return (
            <div className="App">
                <h1>Reservations</h1>
                {this.state.reservations.map(reservation =>
                    <div key={reservation.id}>{reservation.name}</div>
                )}
            </div>
        );
    }
}
    
export default ReservationList;