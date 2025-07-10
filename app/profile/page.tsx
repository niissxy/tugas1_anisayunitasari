import Card from '@/app/components/cards';
import React from "react";
import Link from 'next/link';
import Image from 'next/image';

export default function Profile(){
    return(
        <main>
            <Card title='Profile Page'>
                <div className="flex items-center">
          <div className="flex-shrink-0" style={{marginLeft: '50px'}}>
            <Image
              src="/globe.svg"
              alt='profile'
              width={100}
              height={10}
              className="rounded-full object-cover"
            />
          </div>
          <div className="ml-6" style={{marginLeft: '50px'}}>
            <p className="text-lg font-semibold text-center" style={{color: 'grey', border: '1px solid', borderRadius: '4px', width: '300px'}}>Username</p>
            <p className="text-lg font-semibold text-center" style={{color: 'grey', border: '1px solid', borderRadius: '4px', width: '300px', marginTop: '20px'}}>E-mail</p>
            <p className="text-lg font-semibold text-center" style={{color: 'grey', border: '1px solid', borderRadius: '4px', width: '300px', marginTop: '20px'}}>Name</p>
          </div>
          <div className="ml-6" style={{marginLeft: '50px'}}>
            <p className="text-lg font-semibold text-center" style={{color: 'grey', border: '1px solid', borderRadius: '4px', width: '300px'}}>abc</p>
            <p className="text-lg font-semibold text-center" style={{color: 'grey', border: '1px solid', borderRadius: '4px', width: '300px', marginTop: '20px'}}>def</p>
            <p className="text-lg font-semibold text-center" style={{color: 'grey', border: '1px solid', borderRadius: '4px', width: '300px', marginTop: '20px'}}>ghi</p>
          </div>
        </div>
                <h5 className='font-bold' style={{color: 'black'}}></h5>
                <Link href="/page">Back</Link>
            </Card>
        </main>
    );
}