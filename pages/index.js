import React, {useState} from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import Form from '../components/Form';

const index = () => {


  return (
    <div className="bg-black w-full h-screen">
      <Layout />

      <div>
      <div className="items-center w-full justify-center flex relative top-[100px]">
        <Image src="/numbers.png" width={200} height={400} alt="image"/>
      </div>
      <Form/>

      </div>
    </div>
  );
}

export default index;
