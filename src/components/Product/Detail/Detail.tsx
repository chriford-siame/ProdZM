import React from 'react'
import { useParams } from 'react-router-dom'
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';
import ShippingDetailFormModal from './ShippingDetailForm';
import { Contact2, DollarSign, GlobeIcon, ListChecksIcon, ListMinus, ListTodo, LocateFixedIcon, LocateIcon, Map, MapPinIcon, Phone, PhoneIcon, Star, User, UserIcon } from 'lucide-react';
import ProductCard from '../Card';
import DetailCard from './Card';

export default function ProductDetail() {
  const { id } = useParams();

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
                  <img src={require("src/assets/images/product/tshirt-4.png")} alt="" />
                </div>
                <div className='flex gap-3 justify-center mt-2'>
                  <button className=' border border-slate-300'>
                    <div className="h-6 w-6 rounded-md bg-[url('src/assets/images/product/tshirt-4.png')] bg-cover bg-no-repeat"></div>
                  </button>
                  <button className=' border border-slate-300'>
                    <div className="h-6 w-6 rounded-md bg-[url('src/assets/images/product/tshirt-4.png')] bg-cover bg-no-repeat"></div>
                  </button>
                  <button className=' border border-slate-300'>
                    <div className="h-6 w-6 rounded-md bg-[url('src/assets/images/product/tshirt-4.png')] bg-cover bg-no-repeat"></div>
                  </button>
                  <button className=' border border-slate-300'>
                    <div className="h-6 w-6 rounded-md bg-[url('src/assets/images/product/tshirt-4.png')] bg-cover bg-no-repeat"></div>
                  </button>
                </div>
                <div className='pb-1'>
                  <Button className=' w-full mt-3 hover:font-bold flex gap-2'> Checkout</Button>
                </div>
              </div>
              <div className='border px-5 rounded-md '>
                <div className='text-center border-b py-2 font-semibold text-[16pt] text-muted-foreground'>
                  <p>Tshirt Title</p>
                </div>
                <div>
                  <p className='text-start border-b text-muted-foreground text-[11pt] py-2'>
                    Briefproductescription
                    ptiondescriptiondes  criptiond escriptiondescription...
                    read more
                  </p>
                </div>
                <div className='flex justify-between text-muted-foreground text-[12pt] py-2'>
                  <div className='flex gap-1'><ListTodo /> Category</div>
                  <div>Electronics</div>
                </div>
                <div className='flex justify-between text-muted-foreground text-[12pt] py-2'>
                  <div className='flex gap-1'><DollarSign /> Price</div>
                  <div>$10.00</div>
                </div>
                <div className='flex justify-between text-muted-foreground text-[12pt] py-2'>
                  <div className='flex gap-1'><ListChecksIcon /> Orders</div>
                  <div>812</div>
                </div>
                <div className='flex justify-between text-muted-foreground text-[12pt] py-2'>
                  <div className='flex gap-1'><Star /> Rating</div>
                  <div>54</div>
                </div>
                <div className='flex justify-between text-muted-foreground text-[12pt] py-2'>
                  <div className='flex gap-1'><ListMinus /> Remaining</div>
                  <div>54</div>
                </div>

              </div>

              <div className=' px-5 rounded-md border'>
                <div className='text-center border-b py-2 font-semibold text-[16pt] text-muted-foreground'>
                  <p>Shipping Info<span className='text-red-600'>.</span></p>
                </div>
                <div>
                  <p className='text-center border-b text-muted-foreground text-[11pt] py-2 flex justify-center cursor-pointer'>
                    <ShippingDetailFormModal />
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
      <Card className='px-5 border-b mx-3 shadow-2xl mb-3 py-2 rounded-l-none border-t-0'>
        <p className=' text-muted-foreground font-bold sm:text-center text-xl border-b'>
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
