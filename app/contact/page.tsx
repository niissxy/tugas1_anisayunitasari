import Card from '@/app/components/cards';
import React from "react";
import Link from 'next/link';

export default function Contact(){
    return(
        <main>
            <Card title='Contact Us'>
        <div className="flex items-center">
          <div className="flex-shrink-0" style={{marginLeft: '50px'}}>
          </div>
          <div className="ml-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '10px'}}>
              Username       
            </p>
            <p className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '61px'}}>:</p>
            <input type='text' className='text-lg text-start' style={{color: 'rgb(51, 52, 70)', marginLeft: '10px', border: '1px solid #ccc', borderRadius: '4px', width: '400px'}}>
            </input>
        </div>
        </div>
          <div className="ml-6" style={{ display: 'flex', justifyContent: 'left', marginLeft: '75px', marginTop: '10px'}}>
            <p className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '10px'}}>
              E-mail
            </p>
            <p className="text-lg text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '91px'}}>:</p>
            <input type='text' className="text-lg text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '10px', border: '1px solid #ccc', borderRadius: '4px',
            width: '400px'
            }}>
            </input>
        </div>
        <div className="ml-6" style={{ display: 'flex', justifyContent: 'left', marginLeft: '75px', marginTop: '10px'}}>
            <p className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '10px'}}>
              Pesan
            </p>
            <p className="text-lg text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '96px'}}>:</p>
            <textarea style={{color: 'rgb(51, 52, 70)', marginLeft: '10px', border: '1px solid #ccc', borderRadius: '4px', width: '400px'}}>
            </textarea>
        </div>
        <button type='submit'
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
            ><Link href="/#" className="text-lg text-start" style={{color: 'white'}}>Submit</Link></button>
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