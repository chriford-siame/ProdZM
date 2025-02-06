import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';
import ShippingDetailFormModal from './ShippingDetailForm';
import { DollarSign, Edit2Icon, GlobeIcon, ListChecksIcon, ListMinus, ListTodo, LocateIcon, MapPinIcon, PhoneIcon, Star, UserIcon } from 'lucide-react';
import DetailCard from './Card';
import useProduct from '../../../hooks/Product';
import { IProductImage } from '@/interfaces/products';

export default function ProductDetail() {
  const { id } = useParams<{id: string}>();
  const productId = id ? parseInt(id, 10) : 0;
  const { product, loading, error } = useProduct(productId);
  const [secondaryImage, setSecondaryImage] = useState<string | null>(null);
  
  
  if (error) return <p>{error}</p>;
  if (!product) return <p></p>;
  
  const mainImage = product.images.find((img: IProductImage) => img.is_main);

  return (
    <React.Fragment>
      <div className='mb-4'>
        <div className='flex mx-6 mb-4 justify-between py-1 border-b'>
          <div className='flex pr-2'>
            <a href="/" className=' flex text-[#3da3aa] rounded-lg px-2 bg-slate-200 hover:bg-slate-300'>back</a>
          </div>
          <div className='flex px-2'>
            <p className=' text-muted-foreground sm:text-center'>
              Product Details
            </p>
          </div>
        </div>
        <Card style={{ border: 'None' }} className='shadow-2xl p-5 mx-3 rounded-t-none'>
          <div className='flex'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2'>
              <div className='pr-4'>
                <div className="rounded-md">
                  <img className="max-h-96 min-h-96 min-w-16 max-w-80" src={secondaryImage ? secondaryImage : mainImage?.image} alt="" />
                </div>
                <div className='flex gap-3 justify-center mt-2'>
                  {product.images.map((media: IProductImage) => {
                    return (
                      <button key={media.id} onMouseEnter={() => setSecondaryImage(media.image)} onMouseLeave={() => setSecondaryImage(null)} className=' border border-slate-300'>
                        <img className={`h-10 w-10 rounded-md bg-cover bg-no-repeat`} height={20} src={media.image} />
                      </button>
                    )
                  })}
                  
                </div>
                <div className='pb-1 flex gap-1 justify-between'>
                  <Button className=' w-full mt-3 hover:font-bold flex gap-2'> Buy Now</Button>
                  <Button className=' w-full mt-3 hover:font-bold flex gap-2'> Add to cart</Button>
                </div>
              </div>
              <div className='border px-5 rounded-md '>
                <div className='text-center border-b py-2 font-semibold text-[16pt] text-muted-foreground'>
                  <p>{product.name}</p>
                </div>
                <div>
                  {/* <p className='text-start border-b text-muted-foreground text-[11pt] py-2'>
                    {product.}
                    ...
                    read more
                  </p> */}
                </div>
                <div className='flex justify-between text-muted-foreground text-[12pt] py-2'>
                  <div className='flex gap-1'><ListTodo /> Category</div>
                  <div>{product.category}</div>
                </div>
                <div className='flex justify-between text-muted-foreground text-[12pt] py-2'>
                  <div className='flex gap-1'><DollarSign /> Price</div>
                  <div>${product.price}</div>
                </div>
                <div className='flex justify-between text-muted-foreground text-[12pt] py-2'>
                  <div className='flex gap-1'><ListChecksIcon /> Orders</div>
                  <div>{product.orders}</div>
                </div>
                <div className='flex justify-between text-muted-foreground text-[12pt] py-2'>
                  <div className='flex gap-1'><Star /> Rating</div>
                  <div>{product.rating}</div>
                </div>
                <div className='flex justify-between text-muted-foreground text-[12pt] py-2'>
                  <div className='flex gap-1'><ListMinus /> Remaining</div>
                  <div>{product.remaining_stock}</div>
                </div>

              </div>

              <div className=' px-5 rounded-md border'>
                <div className='text-center border-b py-2 font-semibold text-[16pt] text-muted-foreground'>
                  <p>Shipping Info<span className='text-red-600'>.</span></p>
                </div>
                <div>
                  <p className='text-center border-b text-muted-foreground text-[11pt] py-2 flex justify-center cursor-pointer'>


                    <ShippingDetailFormModal
                      icon={<Edit2Icon size={20} className=' text-muted-foreground' />}
                      text='Edit or add new shipping details'
                    />
                  </p>
                </div>
                <div className='flex justify-between text-muted-foreground text-[12pt] py-2'>
                  <div className='flex gap-1'><MapPinIcon /> Shipping address</div>
                  <div>Plot no. 1672, Lagos</div>
                </div>
                <div className='flex justify-between text-muted-foreground text-[12pt] py-2'>
                  <div className='flex gap-1'><UserIcon /> Contact name</div>
                  <div>John Doe</div>
                </div>
                <div className='flex justify-between text-muted-foreground text-[12pt] py-2'>
                  <div className='flex gap-1'><PhoneIcon /> Phone No.</div>
                  <div>+260770000000</div>
                </div>
                <div className='flex justify-between text-muted-foreground text-[12pt] py-2'>
                  <div className='flex gap-1'><GlobeIcon /> State/Province</div>
                  <div>North America</div>
                </div>
                <div className='flex justify-between text-muted-foreground text-[12pt] py-2'>
                  <div className='flex gap-1'><LocateIcon /> City</div>
                  <div>Lagos</div>
                </div>

              </div>
            </div>
          </div>
        </Card>

      </div>
      <Card className='px-2 border-b mx-3 shadow-2xl mb-3 py-2 rounded-l-none border-t-0'>
        <p className='px-4 py-2 text-muted-foreground font-bold text-center lg:text-start md:text-start xl:text-start text-xl border-b'>
          Related Items
        </p>
        <div className='container px-1 md:px-4  lg:px-4 xl:px-4 my-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xlg:grid-cols-5  gap-4'>
          <DetailCard />
          <DetailCard />
          <DetailCard />
          <DetailCard />
          <DetailCard />
          <DetailCard />
          <DetailCard />
          <DetailCard />
          <DetailCard />
          <DetailCard />
        </div>
      </Card>
    </React.Fragment>
  )
};
