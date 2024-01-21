import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../ui/card"
import { Button } from '../ui/button'
import { FaCartPlus, FaEye, FaStar } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import { useToast } from '../ui/use-toast';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

interface IProduct {
    name: string;
    description: string;

}
interface IProps {
    product: IProduct;
}
export default function ProductCard() {
    const { toast } = useToast()
    const navigate = useNavigate();
    const nextPath = (id: string | number) => {
        let nextPath = `/product/${id}/detail/`;
        navigate(nextPath);
    }

    return (
        <Card className='hover:-mt-1 shadow-xl hover:shadow-2xl'>
            <img className='w-full h-56' src={require('src/assets/images/product/tshirt-1.png')} alt="" />
            <CardHeader className=' items-center pt-1'>
                <div className='border-t mx-10 w-full'></div>
                <CardTitle className=' font-semibold text-[#7c7a7a]'>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <a href='/product/13/detail' className=' text-[14pt]'>Truncate2 25 chars...</a>
                            </TooltipTrigger>
                            <TooltipContent>
                                <a href='/product/13/detail' className='text-[#7c7a7a]'>Full title here</a>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </CardTitle>
                <div className='border-t mx-10 w-full'></div>
            </CardHeader>
            <CardContent className='w-full pb-0'>
                <div className='flex justify-between px-1  text-[#7c7a7a] text-sm'>
                    <p>Price:</p>
                    <p>$120.00</p>
                </div>
                <div className='flex justify-between px-1  text-[#7c7a7a] text-sm'>
                    <p>Orders:</p>
                    <p>1200+</p>
                </div>
                <div className='flex justify-between px-1  text-[#7c7a7a] text-sm'>
                    <p>Remaining:</p>
                    <p>100+</p>
                </div>
                <div className='flex justify-between px-1  text-[#7c7a7a] text-sm'>
                    <p>Shipping:</p>
                    <p>60 days</p>
                </div>
                <div className='flex justify-between px-1  text-[#7c7a7a] text-sm'>
                    <p className='items-center'>Rating:</p>
                    <p className='items-center flex'>
                        <FaStar size={12} color='yellow' />
                        <FaStar size={12} color='yellow' />
                        <FaStar size={12} color='yellow' />
                        <FaStar size={12} color='yellow' />
                        <FaStar size={12} color='gray' />
                    </p>
                </div>
            </CardContent>
            <div className='pt-10 flex gap-2 justify-center items-center p-2'>
                <Button onClick={() => nextPath(1)} className='  rounded-t-sm rounded-md rounded-r-lg bg-[#66b641] hover:bg-[#6bc541] w-full gap-1'><FaEye size={18} color='gray' /> Preview</Button>
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
