export interface Order{
    id?: string,
    name: string,
    description?: string,
    deadline?: Date,
    quantity?:Number,
    date_issued?:Date
}