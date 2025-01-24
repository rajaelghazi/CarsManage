export default [
  {
    id: 1,
    fullname: 'Ahmed Benjelloun',
    gender: 'Homme',
    email: 'ahmed.benjelloun@example.com',
    phone: '+212612345678',
    notes: 'Client intéressé par la location de voitures pour un voyage à Casablanca.',
    documents: {
      CIN: 'A12345678',
      password: ''
    },
    adresse: '12 Rue Hassan II, Casablanca, Maroc',
    ville: 'Casablanca',
    date_de_naissance: '1990-04-15',
    created_at: '2023-05-15',
    reservations: [
      {
        total: 1400.0,
        pickup_date: '02/12/2024',
        return_date: '07/12/2024',
        vehicle: { name: 'Renault Clio', number: '1000|ب|22' },
        created_at: '05/12/2024',
        status: 'Annulée',
        source: 'Google',
        location: { pickup: 'Rabat', dropoff: 'Meknes' }
      },
      {
        total: 2000.0,
        pickup_date: '15/01/2025',
        return_date: '20/01/2025',
        vehicle: { name: 'Peugeot 208', number: '2000|ج|33' },
        created_at: '10/01/2025',
        status: 'Confirmée',
        source: 'Facebook',
        location: { pickup: 'Casablanca', dropoff: 'Tanger' }
      }
    ]
  },
  {
    id: 2,
    fullname: 'Fatima El Amrani',
    gender: 'Femme',
    email: 'fatima.elamrani@example.com',
    phone: '+212634567890',
    notes: 'Demande une location de voiture pour une période de deux semaines à Rabat.',
    documents: {
      CIN: 'B98765432',
      password: ''
    },
    adresse: '7 Avenue Mohamed V, Rabat, Maroc',
    ville: 'Rabat',
    date_de_naissance: '1992-03-22',
    created_at: '2023-07-22',
    reservations: [
      {
        total: 1800.0,
        pickup_date: '10/02/2024',
        return_date: '17/02/2024',
        vehicle: { name: 'Dacia Logan', number: '3000|ح|44' },
        created_at: '05/02/2024',
        status: 'Confirmée',
        source: 'Instagram',
        location: { pickup: 'Rabat', dropoff: 'Casablanca' }
      },
      {
        total: 2500.0,
        pickup_date: '25/06/2024',
        return_date: '30/06/2024',
        vehicle: { name: 'Toyota Corolla', number: '4000|و|55' },
        created_at: '20/06/2024',
        status: 'En attente',
        source: 'Google',
        location: { pickup: 'Rabat', dropoff: 'Agadir' }
      }
    ]
  },
  {
    id: 3,
    fullname: 'Yassir El Hachimi',
    gender: 'Homme',
    email: 'yassir.hachimi@example.com',
    phone: '+212612345679',
    notes: 'Client avec un besoin de location de voiture pour un mariage à Marrakech.',
    documents: {
      CIN: 'C34567890',
      password: ''
    },
    adresse: '45 Boulevard Zerktouni, Marrakech, Maroc',
    ville: 'Marrakech',
    date_de_naissance: '1995-06-10',
    created_at: '2023-06-10',
    reservations: [
      {
        total: 3000.0,
        pickup_date: '01/05/2024',
        return_date: '10/05/2024',
        vehicle: { name: 'Hyundai Tucson', number: '5000|ط|66' },
        created_at: '28/04/2024',
        status: 'Confirmée',
        source: 'LinkedIn',
        location: { pickup: 'Marrakech', dropoff: 'Fes' }
      },
      {
        total: 2200.0,
        pickup_date: '15/09/2024',
        return_date: '20/09/2024',
        vehicle: { name: 'Ford Fiesta', number: '6000|ز|77' },
        created_at: '10/09/2024',
        status: 'Annulée',
        source: 'Google',
        location: { pickup: 'Marrakech', dropoff: 'Casablanca' }
      }
    ]
  },
  {
    id: 4,
    fullname: 'Salma Oulad Ali',
    gender: 'Femme',
    email: 'salma.oualali@example.com',
    phone: '+212655678901',
    notes: 'Souhaite louer une voiture pendant une semaine pour un déplacement professionnel à Fès.',
    documents: {
      CIN: 'D12398765',
      password: ''
    },
    adresse: '3 Rue Tarik Ibn Ziad, Fes, Maroc',
    ville: 'Fes',
    date_de_naissance: '1994-08-15',
    created_at: '2023-08-30',
    reservations: [
      {
        total: 1200.0,
        pickup_date: '10/03/2024',
        return_date: '15/03/2024',
        vehicle: { name: 'Volkswagen Polo', number: '7000|ك|88' },
        created_at: '05/03/2024',
        status: 'En attente',
        source: 'Facebook',
        location: { pickup: 'Fes', dropoff: 'Rabat' }
      },
      {
        total: 2100.0,
        pickup_date: '20/07/2024',
        return_date: '30/07/2024',
        vehicle: { name: 'Nissan Qashqai', number: '8000|ل|99' },
        created_at: '15/07/2024',
        status: 'Confirmée',
        source: 'Google',
        location: { pickup: 'Fes', dropoff: 'Meknes' }
      }
    ]
  },
  {
    id: 5,
    fullname: 'Omar Fassi',
    gender: 'Homme',
    email: 'omar.fassi@example.com',
    phone: '+212612345680',
    notes: 'Location de voiture prévue pour un séjour touristique à Tanger.',
    documents: {
      CIN: 'E56743210',
      password: ''
    },
    adresse: '8 Rue Al Fassi, Tangier, Maroc',
    ville: 'Tangier',
    date_de_naissance: '1991-09-05',
    created_at: '2023-09-05',
    reservations: [
      {
        total: 1900.0,
        pickup_date: '01/04/2024',
        return_date: '05/04/2024',
        vehicle: { name: 'Kia Picanto', number: '9000|م|11' },
        created_at: '28/03/2024',
        status: 'Confirmée',
        source: 'Instagram',
        location: { pickup: 'Tangier', dropoff: 'Tetouan' }
      },
      {
        total: 2300.0,
        pickup_date: '10/10/2024',
        return_date: '15/10/2024',
        vehicle: { name: 'Audi A3', number: '10000|ن|22' },
        created_at: '05/10/2024',
        status: 'Annulée',
        source: 'Google',
        location: { pickup: 'Tangier', dropoff: 'Rabat' }
      }
    ]
  }
];
