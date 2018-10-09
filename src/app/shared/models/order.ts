export interface Order {
    id: number;
    coffee: string; //ENUM
    brew_method: string; //ENUM
    number_of_cases: number;
    packets_per_case: number;
    ship_date: Date;
    priority: boolean;
    order_number:number;
    notes: string;
}