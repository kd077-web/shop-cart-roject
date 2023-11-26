import React from 'react'
import {Productcard} from '../components/Productcard';
import { useTitle } from '../hooks/useTitle';


export const Productlist = () => {
    useTitle("Home");
    const products = [
        {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/aassets/images/1001.png"},
        {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/aassets/images/1002.png"},
        {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "/aassets/images/1003.png"},
        {"id": 4, "name": "Logitech H111 Wired", "price": 39, "image": "/aassets/images/1004.png"},
        {"id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "image": "/aassets/images/1005.png"},
        {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": "/aassets/images/1006.png"}
      ]

  return (
    <main>
        <section className=" products ">
            {products?.map((product)=>(
                
                <Productcard key={product.key} product={product}/>
            ))}
        </section>
    </main>
    
    
  )
}
