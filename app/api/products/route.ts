import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";
import { headers } from "next/headers";

interface Product {
    id: number;
    name: string;
    price: number;
}

let products = [
    { id: 1, name: 'Headphone', price: 100000 },
]

export async function GET(request: Request){
    return new Response(JSON.stringify(products), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
};

export async function POST(request: Request) {
    const body = await request.json();
    const { name } = body;
    const { price } = body;

    const newProducts = { id: Date.now(), name, price };
    products.push(newProducts);

    return new Response(JSON.stringify(newProducts), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
    })
}

export async function PATCH(request: Request) {
    const body = await request.json();
    const { id, name, price } = body;

    const existingProducts = products.find(products => products.id === id );

    if(!existingProducts){
        return new Response(JSON.stringify({ message: "Product not found" }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
        })
    }

    existingProducts.name = name;
    existingProducts.price = price;

    return new Response(JSON.stringify({...existingProducts, name, price}), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
}

export async function DELETE(request: Request) {
    const body = await request.json();
    const { id } = body;
    
    const existingProducts = products.find(products => products.id === id);

    if(!existingProducts){
        return new Response(JSON.stringify({ message: "Product not found" }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
        })
    }

    products = products.filter(products => products.id !== id);

    return new Response(JSON.stringify({ message: "Product deleted" }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
}