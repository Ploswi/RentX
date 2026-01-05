export class Rental {
  constructor(
    public id: string,
    public userId: string,
    public carId: string,
    public startDate: Date,
    public expectedReturnDate: Date,
    public endDate?: Date
  ) {}
}