export interface Order {
    id: number;
    coffee: string; //ENUM
    brewMethod: string; //ENUM
    numberOfCases: number;
    packetsPerCase: number;
    shipDate: Date;
    priority: boolean;
    notes: string;
}