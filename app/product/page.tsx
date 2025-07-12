import Link from 'next/link';
import Card from '../components/cards';

export default function ProductList() {
  return (
    <main>
      <Card title='Product Page'>
        <div className="flex items-center">
          <div className="flex-shrink-0" style={{marginLeft: '50px'}}>
          </div>
          <div className="ml-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid black', borderRadius: '4px', width: '800px' }}>
            <Link href="/product/1" className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)'}}>Product 1</Link>
        </div>
        <div className="ml-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid black', borderRadius: '4px', width: '800px' }}>
            <Link href="/product/2" className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)'}}>Product 2</Link>
        </div>
        </div>
        <div className="flex items-center" style={{ marginTop: '20px' }}>
          <div className="flex-shrink-0" style={{marginLeft: '50px'}}>
          </div>
          <div className="ml-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid black', borderRadius: '4px', width: '800px' }}>
            <Link href="/product/3" className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)'}}>Product 3</Link>
        </div>
        <div className="ml-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid black', borderRadius: '4px', width: '800px' }}>
            <Link href="/product/4" className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)'}}>Product 4</Link>
        </div>
        </div>
        <button
                style={{
                padding: '8px 16px',
                width: '90px',
                color: 'grey',
                backgroundColor: 'rgb(223, 208, 184)',
                cursor: 'pointer',
                marginRight: 0,
                borderRadius: '4px',
                marginLeft: '25px',
                marginTop: '20px'
              }}
            >
              <Link href="/" className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)'}}>Back</Link>
          </button>
    </Card>
    </main>
  );
}
