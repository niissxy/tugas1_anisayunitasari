import Card from '@/app/components/cards';
import React from "react";
import Link from 'next/link';
import Image from 'next/image';

export default function About(){
    return(
        <main>
            <Card title='About'>
            <div className="flex items-center">
          </div>
          <div className="ml-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid black', borderRadius: '4px' }}>
            <p className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '10px'}}>
              about page       
            </p>
        </div>
        <button
                style={{
                padding: '8px 16px',
                width: '90px',
                color: 'white',
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