import { use } from 'react';

export default function Page({ params }: { params: Promise<{id: string}> }){
    const { id } = use (params);
    return(
        <main>
            <h1>detail page for a spesific product with id: { id }</h1>
        </main>
    )
}