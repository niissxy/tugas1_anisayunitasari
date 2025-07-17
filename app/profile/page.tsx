import Card from '@/app/components/cards';
import React from "react";
import Link from 'next/link';
import Image from 'next/image';

export default function Profile(){
    return(
        <main>
            <Card title='Profile Page'>
                <div className="flex items-center">
          <div className="flex-shrink-0 flex justify-center items-center" style={{marginLeft: '50px'}}>
            <Image
              src="/profile.jpg"
              alt='profile'
              width={100}
              height={10}
              className="rounded-full object-cover items-center"
            />
          </div>
          <div className="ml-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '10px'}}>
              Username       
            </p>
            <p className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '60px'}}>:</p>
            <p className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '10px'}}>
              abc       
            </p>
            <div className="ml-6" style={{ display: 'flex', justifyContent: 'left', marginLeft: '175px'}}>
            <p className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '10px'}}>
              Nama
            </p>
            <p className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '90px'}}>:</p>
            <p className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '10px'}}>
              abc       
            </p>
        </div>
        </div>
        </div>
        <div className="flex items-center">
        <div className="ml-6" style={{ display: 'flex', justifyContent: 'left', marginLeft: '175px'}}>
            <p className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '10px'}}>
              Gender
            </p>
            <p className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '80px'}}>:</p>
            <p className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '10px'}}>
              abc       
            </p>
            <div className="ml-6" style={{ display: 'flex', justifyContent: 'left', marginLeft: '175px'}}>
            <p className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '10px'}}>
              Tanggal Lahir
            </p>
            <p className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '30px'}}>:</p>
            <p className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '10px'}}>
              01/01/2000       
            </p>
        </div>
        </div>
        </div>
        <div className="flex items-center">
        <div className="ml-6" style={{ display: 'flex', justifyContent: 'left', marginLeft: '175px', marginTop: '35px' }}>
            <p className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '10px'}}>
              Email
            </p>
            <p className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '95px'}}>:</p>
            <p className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '10px'}}>
              abc       
            </p>
        </div>
        <div className="ml-6" style={{ display: 'flex', justifyContent: 'left', marginLeft: '177px', marginTop: '35px' }}>
            <p className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '10px'}}>
              No. HP
            </p>
            <p className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '83px'}}>:</p>
            <p className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '10px'}}>
              abc       
            </p>
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