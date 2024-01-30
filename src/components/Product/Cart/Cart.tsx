import { Plus } from 'lucide-react'
import { Button } from '../../ui/button'
import { Card, CardHeader, CardTitle } from '../../ui/card'
import React from 'react'
import ShippingDetailFormModal from '../Detail/ShippingDetailForm'
import { RadioGroup, RadioGroupItem } from '../../ui/radio-group'
import { Label } from '../../ui/label'
import { FaCcMastercard, FaGooglePay, FaPaypal } from 'react-icons/fa'

export default function ProductCart() {
  return (
    <React.Fragment>
      <div className='w-screen'>
        <div className="p-10 grid grid-cols-2 gap-3">
          <div className='grid grid-cols-1 gap-3'>
            <Card className='p-1 px-4 w-full'>
              <p className='text-muted-foreground font-bold text-[20pt] text-start'>Shipping Address</p>
              <div className='pl-0'>
                <ShippingDetailFormModal
                  icon={<Plus size={20} className=' text-muted-foreground' />}
                  text='Edit or add new shipping details'
                />
              </div>
            </Card>
            <Card className='p-1 px-4 w-full'>
              <div className="flex justify-between items-center pb-3">
                <p className='text-muted-foreground font-bold text-[20pt] pb-3'>Payment Methods</p>
                <a href="#modal" className=' text-blue-400'>view more</a>
              </div>
              <div className='text-muted-foreground pb-3'>
                <RadioGroup defaultValue="paypal">
                  <div className="flex border-b border-b-gray-100 pb-3 items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal" className='flex gap-1'> <FaPaypal /> Paypal</Label>
                  </div>
                  <div className="flex border-b border-b-gray-100 pb-3 items-center space-x-2">
                    <RadioGroupItem value="visaCard" id="visaCard" />
                    <Label htmlFor="visaCard" className='flex gap-1'><FaCcMastercard /> Visa</Label>
                  </div>
                  <div className="flex border-b border-b-gray-100 pb-3 items-center space-x-2">
                    <RadioGroupItem value="googlePay" id="googlePay" />
                    <Label htmlFor="googlePay" className='flex gap-1'><FaGooglePay /> Google pay</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="payoneer" id="payoneer" />
                    <Label htmlFor="payoneer" className='flex gap-1'><FaPaypal /> Payoneer</Label>
                  </div>
                </RadioGroup>
              </div>
            </Card>
          </div>
          <div className=''>
            <Card className='p-1 px-4 w-full h-full'>
              <p className='text-muted-foreground font-bold text-[20pt] text-start'>Summary</p>
              <div className='text-muted-foreground border-b border-b-gray-100 pb-3'>
                <div className='flex justify-between py-1'>
                  <div>Total item costs</div>
                  <div>$0.99</div>
                </div>
                <div className='flex justify-between py-1'>
                  <div>Total shipping</div>
                  <div>Free</div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center pb-2">
                  <div className=' font-semibold'>Total</div>
                  <div className=' text-[18pt]'>
                    <p>
                      $0.99
                    </p>
                    <p className="text-[10pt]">=(ZK30.00)</p>
                  </div>
                </div>
              </div>
              <div className='text-sm text-muted-foreground'>
                <Button className='w-full' variant={'default'}>Paypal</Button>
                <p className='p-4 text-center'>
                  Upon clicking 'Place Order', I confirm I have read and acknowledged all <a href="#" className=' text-blue-500'>terms and policies.</a>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
