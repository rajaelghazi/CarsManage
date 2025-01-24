export default [
  {
    id: 1,
    brand: "Dacia",
    fuelType: "Essence",
    transmission: "Manuelle",
    licencePlate: "15000|أ|33",
    color: "Blanc",
    year: 2020,
    mileage: 35000,
    numberOfSeats: 5,
    numberOfDoors: 5,
    photo: "car1.png",
    entryDate: "2024-05-10",
    status: "Disponible",
    registrationExpiryDate: "2026-05-10",
    insurance: {
      company: "AXA",
      expirationDate: "2025-01-15"
    },
    maintenanceHistory: [
      { date: "2022-06-20", description: "Changement d'huile" },
      { date: "2023-04-15", description: "Révision des freins" }
    ],
    reservationHistory: [
      { status: "Confirmée", cost: 1500, date: "2024-06-01" },
      { status: "Confirmée", cost: 1500, date: "2024-06-01" },
      { status: "Confirmée", cost: 1500, date: "2024-06-01" },
      { status: "Confirmée", cost: 1500, date: "2024-06-01" },
      { status: "Confirmée", cost: 1500, date: "2024-06-01" },
      { status: "Confirmée", cost: 1500, date: "2024-06-01" },
      { status: "Annulée", cost: 0, date: "2024-07-10" },
      { status: "Confirmée", cost: 1800, date: "2024-08-15" }
    ]
  },
  {
    id: 2,
    brand: "Volkswagen",
    fuelType: "Diesel",
    transmission: "Automatique",
    licencePlate: "20000|ب|44",
    color: "Gris",
    year: 2018,
    mileage: 75000,
    numberOfSeats: 5,
    numberOfDoors: 5,
    photo: "car1.png",
    entryDate: "2024-02-25",
    status: "Réservé",
    registrationExpiryDate: "2026-02-25",
    insurance: {
      company: "Allianz",
      expirationDate: "2024-08-20"
    },
    maintenanceHistory: [
      { date: "2021-05-10", description: "Changement de filtre à air" },
      { date: "2022-08-30", description: "Vidange du moteur" }
    ],
    reservationHistory: [
      { status: "Confirmée", cost: 2000, date: "2024-03-01" },
      { status: "Confirmée", cost: 1800, date: "2024-04-10" },
      { status: "Confirmée", cost: 1800, date: "2024-04-10" },
      { status: "Confirmée", cost: 1800, date: "2024-04-10" },
      { status: "Confirmée", cost: 1800, date: "2024-04-10" },
      { status: "Confirmée", cost: 1800, date: "2024-04-10" },
      { status: "Annulée", cost: 0, date: "2024-05-12" }
    ]
  },
  {
    id: 3,
    brand: "Renault",
    fuelType: "Essence",
    transmission: "Manuelle",
    licencePlate: "30000|ج|55",
    color: "Rouge",
    year: 2019,
    mileage: 45000,
    numberOfSeats: 5,
    numberOfDoors: 5,
    photo: "car1.png",
    entryDate: "2024-03-15",
    status: "En maintenance",
    registrationExpiryDate: "2026-03-15",
    insurance: {
      company: "Maroc Assurances",
      expirationDate: "2024-09-10"
    },
    maintenanceHistory: [
      { date: "2022-10-05", description: "Changement de pneus" },
      { date: "2023-07-12", description: "Réparation de la climatisation" }
    ],
    reservationHistory: [
      { status: "Confirmée", cost: 1700, date: "2024-04-05" },
      { status: "Confirmée", cost: 1600, date: "2024-05-20" },
      { status: "Confirmée", cost: 1600, date: "2024-05-20" },
      { status: "Confirmée", cost: 1600, date: "2024-05-20" },
      { status: "Confirmée", cost: 1600, date: "2024-05-20" },
      { status: "Annulée", cost: 0, date: "2024-06-15" }
    ]
  },
  {
    id: 4,
    brand: "Peugeot",
    fuelType: "Diesel",
    transmission: "Automatique",
    licencePlate: "40000|د|66",
    color: "Noir",
    year: 2017,
    mileage: 90000,
    numberOfSeats: 5,
    numberOfDoors: 5,
    photo: "car1.png",
    entryDate: "2024-01-10",
    status: "Disponible",
    registrationExpiryDate: "2026-01-10",
    insurance: {
      company: "Saham",
      expirationDate: "2025-02-20"
    },
    maintenanceHistory: [
      { date: "2021-11-20", description: "Réparation du système de suspension" },
      { date: "2023-03-18", description: "Vidange et révision complète" }
    ],
    reservationHistory: [
      { status: "Confirmée", cost: 2200, date: "2024-02-01" },
      { status: "Confirmée", cost: 2200, date: "2024-02-01" },
      { status: "Confirmée", cost: 2200, date: "2024-02-01" },
      { status: "Confirmée", cost: 2200, date: "2024-02-01" },
      { status: "Annulée", cost: 0, date: "2024-04-30" }
    ]
  }
];
