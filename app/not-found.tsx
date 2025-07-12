import Card from '@/app/components/cards';
import React from "react";
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound(){
    return(
        <main>
            <Card title=''>
                <div className="flex items-center">
          <div className="flex-shrink-0" style={{marginLeft: '50px'}}>
            <Image
              src="/phai.jpg"
              alt='not-found'
              width={100}
              height={10}
              className="rounded-full object-cover center"

              style={{}}
            />
          </div>
          <div className="ml-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p className="text-lg font-bold text-center" style={{color: 'rgb(51, 52, 70)', marginLeft: '10px'}}>
              Sorry, this page is doesn't exist!    
            </p>
        </div>
        </div>
        </Card>
        </main>
    );
}