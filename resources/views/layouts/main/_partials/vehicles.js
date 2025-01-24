export const vehicles = [
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
    photo: "/assets/car1.png",
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
    // add reservation history here
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
    photo: "/assets/car1.png",
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
    photo: "/assets/car1.png",
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
    photo: "/assets/car1.png",
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
    ]
  },
  {
    id: 5,
    brand: "Toyota",
    fuelType: "Hybride",
    transmission: "Manuelle",
    licencePlate: "50000|هـ|77",
    color: "Bleu",
    year: 2021,
    mileage: 25000,
    numberOfSeats: 5,
    numberOfDoors: 5,
    photo: "/assets/car1.png",
    entryDate: "2024-06-20",
    status: "En panne",
    registrationExpiryDate: "2026-06-20",
    insurance: {
      company: "Wafa Assurances",
      expirationDate: "2025-06-20"
    },
    maintenanceHistory: [
      { date: "2022-01-15", description: "Changement des plaquettes de frein" },
      { date: "2023-05-25", description: "Réparation de la batterie hybride" }
    ]
  }
];
