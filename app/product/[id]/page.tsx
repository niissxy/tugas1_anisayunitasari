import Link from "next/link";
import Card from "@/app/components/cards";
import Image from "next/image";

export default function ProductDetail({ params }: { params: { id: string } }) {
  return (
    <main style={{ padding: '20px' }}>
        <Card title='Detail Product Page'>
        <div className="flex items-center">
          <div className="flex-shrink-0" style={{marginLeft: '50px'}}>
          </div>
          <div className="ml-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid black', borderRadius: '4px', width: '800px' }}>
             <Image
                          src="/file.svg"
                          alt='profile'
                          width={100}
                          height={10}
                          className="rounded-full object-cover items-center"
                        />
            <p className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '10px'}}>Produk dengan ID: {params.id}</p>
        </div>
        </div>
      
       <button
          style={{
            padding: '8px 16px',
            width: '90px',
            color: 'grey',
            backgroundColor: 'blue',
            cursor: 'pointer',
            marginRight: 0,
            borderRadius: '4px',
            marginLeft: '25px',
            marginTop: '20px'
          }}
        >
          <Link href="/" className="text-lg text-start" style={{color: 'white'}}>Back</Link>
        </button>
                </Card>
    </main>
  );
}
