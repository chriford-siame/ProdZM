import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../../ui/card"
import { Button } from '../../ui/button'
import { FaCartPlus, FaEye, FaStar } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import { useToast } from '../../ui/use-toast';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../ui/tooltip';

interface IProduct {
    name: string;
    description: string;

}
interface IProps {
    product: IProduct;
}
export default function DetailCard() {
    const { toast } = useToast()
    const navigate = useNavigate();
    const nextPath = (id: string | number) => {
        let nextPath = `/product/${id}/detail/`;
        navigate(nextPath);
    }

    return (
        <Card className='hover:-mt-1 shadow-xl hover:shadow-2xl'>
            <img className='w-full md:h-48 xl:h-48 lg:h-52 h-42' src={require('src/assets/images/product/tshirt-1.png')} alt="" />
            <CardHeader className=' items-center pt-1 px-1.5'>
                <div className='mt-5 w-full border-b'></div>
                <CardTitle className=' font-semibold text-[#7c7a7a]'>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <a href='/product/13/detail' className=' text-[11pt] md:text-[12pt] xl:text-[12pt] lg:text-[12pt] '>Truncate2 25 chars...</a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <a href='/product/13/detail' className='text-[#7c7a7a]'>Full title here</a>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </CardTitle>
                <div className='border-t mx-10 w-full'></div>
            </CardHeader>
            <CardContent className='w-full pb-0 px-2 -mt-3'>
                <div className='flex justify-between  text-[#7c7a7a] text-[10pt] md:text-[11pt] xl:text-[11pt] lg:text-[11pt]'>
                    <p>Price:</p>
                    <p>$120.00</p>
                </div>
                <div className='flex justify-between text-[#7c7a7a] text-[10pt] md:text-[11pt] xl:text-[11pt] lg:text-[11pt]'>
                    <p>Orders:</p>
                    <p>1200+</p>
                </div>
                <div className='flex justify-between text-[#7c7a7a] text-[10pt] md:text-[11pt] xl:text-[11pt] lg:text-[11pt]'>
                    <p>Remaining:</p>
                    <p>100+</p>
                </div>
                <div className='flex justify-between text-[#7c7a7a] text-[10pt] md:text-[11pt] xl:text-[11pt] lg:text-[11pt]'>
                    <p>Shipping:</p>
                    <p>60 days</p>
                </div>
                <div className='flex justify-between text-[#7c7a7a] text-[10pt] md:text-[11pt] xl:text-[11pt] lg:text-[11pt]'>
                    <p className='items-center'>Rating:</p>
                    <p className='items-center flex'>
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                        <FaStar color='yellow' />
                        <FaStar color='gray' />
                    </p>
                </div>
            </CardContent>
            <div className='pt-2 flex gap-2 justify-center items-center p-2'>
                <Button onClick={() => nextPath(1)} size={'icon'} style={{padding: 0}} className='rounded-t-sm rounded-md rounded-r-lg bg-[#66b641] hover:bg-[#6bc541] w-full gap-1'><FaEye size={18} color='lightgray' /> </Button>
                <Button onClick={() => toast({
                    title: "Save For Later",
                    description: "Item saved to cart successfully",
                    duration: 3500,

                })}
                    className=' text-white flex items-center justify-center bg-[#d3cfcf] hover:bg-[#bdb8b8]'><FaCartPlus size={18} color='gray' /></Button>
            </div>
        </Card>
    )
}
