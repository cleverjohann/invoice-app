import { Invoice } from "../models/invoice";

export const invoiceData: any ={
    id : 1,
    name: "Componentes de PC",
    client :{
        name: 'Andres',
        lastname: 'Doe',
        address:{
            country :'USA',
            city :'Los angeles',
            street:'One Street',
            number :15,
        }
    },
    company:{
        name:'New age',
        fiscalNumber: 12312312,
    },
    items :[
        {
            id:1,
            product: 'cpu intel i9',
            price: 599,
            quantity: 1,
        },
        {
            id:2,
            product: 'cpu intel i7',
            price: 499,
            quantity: 2,
        },
        {
            id:3,
            product: 'cpu intel i5',
            price: 399,
            quantity: 3,
        }
    ]
}