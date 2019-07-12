import {fetchReservations} from '../../components/reservation/reservation-service';

test('fetchReservations returns valid json', () => {
    return fetchReservations().then(result => {
        console.log(result);
        expect(result).not.toBeNull();
    });
});
