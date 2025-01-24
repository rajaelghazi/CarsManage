const reservations = [
    {
        id: 1,
        customer: { fullname: 'Khadija', cin: 'JB471784' },
        total: 24200.0,
        pickup_date: '01/12/2024',
        return_date: '15/12/2024',
        vehicle: { name: 'Dacia Sandero', number: '15000|أ|33' },
        created_at: '03/12/2024',
        status: 'Confirmée',
        source: "Facebook",
        location: { pickup: "Casablanca", dropoff: "Rabat" }
    },
    {
        id: 2,
        customer: { fullname: 'Jane Doe', cin: 'E00012365' },
        total: 11500.0,
        pickup_date: '01/12/2024',
        return_date: '10/12/2024',
        vehicle: { name: 'Toyota', number: '1256|أ|33' },
        created_at: '03/12/2024',
        status: 'Confirmée',
        source: "Instagram",
        location: { pickup: "Marrakech", dropoff: "Agadir" }
    },
    {
        id: 4,
        customer: { fullname: 'Ali', cin: 'A123456' },
        total: 1400.0,
        pickup_date: '02/12/2024',
        return_date: '07/12/2024',
        vehicle: { name: 'Renault Clio', number: '1000|ب|22' },
        created_at: '05/12/2024',
        status: 'Annulée',
        source: "Google",
        location: { pickup: "Rabat", dropoff: "Meknes" }
    },
    {
        id: 5,
        customer: { fullname: 'Fatima', cin: 'F456789' },
        total: 4370.0,
        pickup_date: '02/12/2024',
        return_date: '07/12/2024',
        vehicle: { name: 'Peugeot 208', number: '2000|ج|11' },
        created_at: '05/12/2024',
        status: 'Confirmée',
        source: "Autres",
        location: { pickup: "Tangier", dropoff: "Casablanca" }
    },
    {
        id: 6,
        customer: { fullname: 'Sara', cin: 'S890123' },
        total: 650.0,
        pickup_date: '03/12/2024',
        return_date: '10/12/2024',
        vehicle: { name: 'Ford Fiesta', number: '5678|ب|12' },
        created_at: '03/12/2024',
        status: 'Confirmée',
        source: "Facebook",
        location: { pickup: "Marrakech", dropoff: "Agadir" }
    },
    {
        id: 7,
        customer: { fullname: 'Ahmed', cin: 'A456321' },
        total: 350.0,
        pickup_date: '03/12/2024',
        return_date: '09/12/2024',
        vehicle: { name: 'Volkswagen Golf', number: '9101|د|23' },
        created_at: '05/12/2024',
        status: 'Confirmée',
        source: "Instagram",
        location: { pickup: "Casablanca", dropoff: "Meknes" }
    },
    {
        id: 8,
        customer: { fullname: 'Youssef', cin: 'Y654789' },
        total: 850.0,
        pickup_date: '04/12/2024',
        return_date: '10/12/2024',
        vehicle: { name: 'BMW X5', number: '4321|أ|45' },
        created_at: '04/12/2024',
        status: 'En attente',
        source: "Site Web",
        location: { pickup: "Tangier", dropoff: "Rabat" }
    },
    {
        id: 9,
        customer: { fullname: 'Noor', cin: 'N321654' },
        total: 600.0,
        pickup_date: '04/12/2024',
        return_date: '10/12/2024',
        vehicle: { name: 'Hyundai Tucson', number: '1234|ب|56' },
        created_at: '04/12/2024',
        status: 'Confirmée',
        source: "Google",
        location: { pickup: "Marrakech", dropoff: "Tangier" }
    },
    {
        id: 10,
        customer: { fullname: 'Amal', cin: 'A987654' },
        total: 500.0,
        pickup_date: '05/12/2024',
        return_date: '08/12/2024',
        vehicle: { name: 'Nissan Qashqai', number: '5678|ج|34' },
        created_at: '05/12/2024',
        status: 'En attente',
        source: "Autres",
        location: { pickup: "Rabat", dropoff: "Agadir" }
    },
    {
        id: 11,
        customer: { fullname: 'Ibrahim', cin: 'I789321' },
        total: 14000.0,
        pickup_date: '06/12/2024',
        return_date: '14/12/2024',
        vehicle: { name: 'Chevrolet Spark', number: '9101|أ|22' },
        created_at: '04/12/2024',
        status: 'Confirmée',
        source: "Facebook",
        location: { pickup: "Meknes", dropoff: "Fes" }
    },
    {
        id: 12,
        customer: { fullname: 'Lina', cin: 'L456789' },
        total: 450.0,
        pickup_date: '06/12/2024',
        return_date: '12/12/2024',
        vehicle: { name: 'Mercedes A-Class', number: '7894|د|11' },
        created_at: '04/12/2024',
        status: 'Confirmée',
        source: "Instagram",
        location: { pickup: "Casablanca", dropoff: "Rabat" }
    },
    {
        id: 13,
        customer: { fullname: 'Omar', cin: 'O123987' },
        total: 600.0,
        pickup_date: '07/12/2024',
        return_date: '10/12/2024',
        vehicle: { name: 'Kia Sportage', number: '4567|ج|33' },
        created_at: '03/12/2024',
        status: 'Annulée',
        source: "Site Web",
        location: { pickup: "Tangier", dropoff: "Marrakech" }
    },
    {
        id: 14,
        customer: { fullname: 'Hanae', cin: 'H321987' },
        total: 600.0,
        pickup_date: '08/12/2024',
        return_date: '12/12/2024',
        vehicle: { name: 'Opel Astra', number: '1234|ب|44' },
        created_at: '05/12/2024',
        status: 'Confirmée',
        source: "Google",
        location: { pickup: "Meknes", dropoff: "Casablanca" }
    },
    {
        id: 15,
        customer: { fullname: 'Salma', cin: 'S654123' },
        total: 900.0,
        pickup_date: '09/12/2024',
        return_date: '20/12/2024',
        vehicle: { name: 'Audi Q3', number: '5678|أ|55' },
        created_at: '03/12/2024',
        status: 'En attente',
        source: "Facebook",
        location: { pickup: "Agadir", dropoff: "Casablanca" }
    },
    {
        id: 16,
        customer: { fullname: 'Rami', cin: 'R321987' },
        total: 500.0,
        pickup_date: '10/12/2024',
        return_date: '16/12/2024',
        vehicle: { name: 'Skoda Octavia', number: '4567|د|12' },
        created_at: '05/12/2024',
        status: 'Confirmée',
        source: "Instagram",
        location: { pickup: "Meknes", dropoff: "Tangier" }
    },
    {
        id: 17,
        customer: { fullname: 'Zainab', cin: 'Z654321' },
        total: 520.0,
        pickup_date: '10/12/2024',
        return_date: '15/12/2024',
        vehicle: { name: 'Honda Civic', number: '9876|أ|23' },
        created_at: '04/12/2024',
        status: 'Confirmée',
        source: "Facebook",
        location: { pickup: "Marrakech", dropoff: "Rabat" }
    },
    {
        id: 18,
        customer: { fullname: 'Khalid', cin: 'K321654' },
        total: 680.0,
        pickup_date: '12/12/2024',
        return_date: '15/12/2024',
        vehicle: { name: 'Peugeot 3008', number: '9101|د|66' },
        created_at: '06/12/2024',
        status: 'Confirmée',
        source: "Autres",
        location: { pickup: "Tangier", dropoff: "Marrakech" }
    },
];


const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split('/');
    return new Date(`${year}-${month}-${day}`);
};

reservations.forEach((reservation) => {
    reservation.pickup_date = parseDate(reservation.pickup_date);
    reservation.return_date = parseDate(reservation.return_date);
    reservation.created_at = parseDate(reservation.created_at);
});

export default reservations;
