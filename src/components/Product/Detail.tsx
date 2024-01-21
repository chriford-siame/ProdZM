import React from 'react'
import { useParams } from 'react-router-dom'
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Edit2Icon } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <React.Fragment>
      <div>
        <div className='flex mx-6 justify-between py-1 border-b'>
          <div className='flex pr-2'>
            <a href="/" className=' flex text-[#3da3aa] rounded-lg px-2 bg-slate-200 hover:bg-slate-300'>back</a>
          </div>
          <div className='flex px-2'>
            <p className=' text-muted-foreground'>
              Product Details
            </p>
          </div>
        </div>
        {/* <div className="p-2 px-12 grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-4"> */}
        <Card style={{ border: 'None' }} className='shadow-2xl p-5 mx-3'>
          <div className='flex'>

            <div className='pr-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2'>
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
                <div className='pb-4'>
                <Button className=' w-full mt-3 hover:font-bold flex gap-2'> Checkout</Button>
                </div>
              </div>
              <div className='border px-5 rounded-md '>
                <div className='text-start border-b py-2 font-semibold text-[16pt] text-muted-foreground'>
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
                  <div>Category</div>
                  <div>Electronics</div>
                </div>
                <div className='flex justify-between text-muted-foreground text-[12pt] py-2'>
                  <div>Price</div>
                  <div>@$10.00</div>
                </div>
                <div className='flex justify-between text-muted-foreground text-[12pt] py-2'>
                  <div>Orders</div>
                  <div>3000+</div>
                </div>
                <div className='flex justify-between text-muted-foreground text-[12pt] py-2'>
                  <div>Rating</div>
                  <div>4443</div>
                </div>
                <div className='flex justify-between text-muted-foreground text-[12pt] py-2'>
                  <div>Remaining</div>
                  <div>$20.00</div>
                </div>

              </div>

              <div className=' px-5 rounded-md border'>
                <div className='text-center border-b py-2 font-semibold text-[16pt] text-muted-foreground'>
                  <p>Shipping Info<span className='text-red-600'>.</span></p>
                </div>
                <div>
                  <p className='text-center border-b text-muted-foreground text-[11pt] py-2 flex justify-center cursor-pointer'>
                    <Edit2Icon size={20} className=' text-muted-foreground' /> <span className=' text-blue-400'>Edit or add new shipping details</span> 
                  </p>
                </div>
                <div className='flex justify-between text-muted-foreground text-[12pt] py-2'>
                  <div>Category</div>
                  <div>Electronics</div>
                </div>
                <div className='flex justify-between text-muted-foreground text-[12pt] py-2'>
                  <div>Price</div>
                  <div>@$10.00</div>
                </div>
                <div className='flex justify-between text-muted-foreground text-[12pt] py-2'>
                  <div>Orders</div>
                  <div>3000+</div>
                </div>
                <div className='flex justify-between text-muted-foreground text-[12pt] py-2'>
                  <div>Rating</div>
                  <div>4443</div>
                </div>
                <div className='flex justify-between text-muted-foreground text-[12pt] py-2'>
                  <div>Remaining</div>
                  <div>$20.00</div>
                </div>

              </div>
            </div>

            {/* <div className='ml-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2'>
            </div> */}

          </div>
          {/* <div className='bg-black'>Shipping Details</div> */}
        </Card>
        {/* <Card>
            <CardContent>
              <div className='flex items-center justify-center pt-5'>
                Shipping Details Card.
              </div>
            </CardContent>
          </Card> */}

      </div>
      {/* </div> */}
    </React.Fragment>
  )
};
