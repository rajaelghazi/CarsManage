export const paiements = [
  {
    id: 1,
    amount: 1000,
    remainingAmount: 0,
    status: 'Payé',
    paymentType: 'Carte de crédit',
    reservationId: 12345,
    comment: 'Paiement effectué pour la réservation',
    paymentDate: '2024-01-01',
  },
  {
    id: 2,
    amount: 500,
    remainingAmount: 200,
    status: 'Partiellement Payé',
    paymentType: 'Virement bancaire',
    reservationId: 12346,
    comment: 'Premier paiement reçu, restant à payer : 200',
    paymentDate: '2024-01-02',
  },
  {
    id: 3,
    amount: 200,
    remainingAmount: 0,
    status: 'Payé',
    paymentType: 'PayPal',
    reservationId: 12347,
    comment: 'Paiement complet pour la réservation',
    paymentDate: '2024-01-03',
  },
  {
    id: 4,
    amount: 800,
    remainingAmount: 800,
    status: 'En attente',
    paymentType: 'Virement bancaire',
    reservationId: 12348,
    comment: 'Paiement en attente de traitement',
    paymentDate: '2024-01-04',
  },
  {
    id: 5,
    amount: 300,
    remainingAmount: 0,
    status: 'Annulé',
    paymentType: 'Carte de crédit',
    reservationId: 12349,
    comment: 'Paiement annulé pour la réservation',
    paymentDate: '2024-01-05',
  }
];


export const statutsPaiement = [
  { label: "Payé", value: "Payé" },
  { label: "Partiellement Payé", value: "Partiellement Payé" },
  { label: "En Attente", value: "En Attente" },
  { label: "Annulé", value: "Annulé" },
];

export const typesPaiement = [
  { label: "Carte de Crédit", value: "Carte de Crédit" },
  { label: "PayPal", value: "PayPal" },
  { label: "Virement Bancaire", value: "Virement Bancaire" },
  { label: "Espèces", value: "Espèces" },
  { label: "Carte Bancaire", value: "Carte Bancaire" },
];
