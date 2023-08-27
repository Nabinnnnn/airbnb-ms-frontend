export class Booking {
    id!: number;
    checkInDate?: Date;
    checkOutDate?: Date;
    guestCount?: number;
    payment?: Payment;
    propertyId?:number;
}

export class Payment {
    id!: number;
    amountPaid!: number;
    paymentTime?: Date;
}
