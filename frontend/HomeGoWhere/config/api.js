export const API_BASE_URL = 'http://192.168.1.1:8080';

export const ENDPOINTS = {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
    LISTINGS: "/api/listings",
    RENTALS: '/api/rentals',
    PAYMENTS: '/api/payment',
    PAYMENTS_BY_RENTAL: (rentalId) => `/api/payment/paymentsList/${rentalId}`,
    OUTSTANDING_PAYMENTS: (rentalId) => `/api/payment/outstandingPayments/${rentalId}`,
    TENANT_PAYMENTS: (listingId, tenantId) => `/api/payment/tenant-payments/${listingId}/${tenantId}`,
    REVIEWS: '/api/reviews',
    REVIEW_BY_ID: (id) => `/api/reviews/${id}`,
    // Add other endpoints here as needed
};
