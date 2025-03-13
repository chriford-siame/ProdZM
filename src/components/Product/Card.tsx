import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../ui/card"
import { Button } from '../ui/button'
import { FaCartPlus, FaStar } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import { useToast } from '../ui/use-toast';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import IProduct, { IProductImage } from '@/interfaces/products';

interface IProps {
    product: IProduct;
}

export default function ProductCard({product}: IProps) {
    const { toast } = useToast()
    const navigate = useNavigate();
    const nextPath = (productData: IProps['product']) => {
        let nextPath = `/product/${productData.id}/detail/`;
        navigate(nextPath);
    }
    const truncatedText = product.name.length > 25 ? product.name.substring(0, 25) + "..." : product.name;
    const mainImage = product.images.find((img: IProductImage) => img.is_main);

    return (
        <Card className='hover:-mt-1 shadow-xl hover:shadow-2xl'>
            <img className='w-full md:h-48 xl:h-48 lg:h-52 h-42' src={mainImage && mainImage.image.startsWith('/') ? 'http://localhost:8000'+mainImage.image : mainImage?.image} alt="" />
            <CardHeader className=' items-center px-1.5 -mt-2 pt-0'>
                <div className='mt-5 w-full border-b'></div>
                <CardTitle className=' font-semibold text-[#7c7a7a]'>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <a href={`/product/${product.id}/detail`} className=' text-[11pt] md:text-[12pt] xl:text-[12pt] lg:text-[12pt] '>{truncatedText}</a>
                            </TooltipTrigger>
                            {product.name.length > 25 ? 
                            <TooltipContent>
                                
                                <a href={`/product/${product.id}/detail`} className='text-[#7c7a7a]'>{product.name}</a>
                            </TooltipContent>
                            : null}
                        </Tooltip>
                    </TooltipProvider>
                </CardTitle>
                <div className='border-t mx-10 w-full'></div>
            </CardHeader>
            <CardContent className='w-full pb-0 px-2 -mt-3'>
                <div className='flex justify-between px-1  text-[#7c7a7a] text-[10pt] md:text-[11pt] xl:text-[11pt] lg:text-[11pt]'>
                    <p>Price:</p>
                    <p>${product.price}</p>
                </div>
                <div className='flex justify-between px-1  text-[#7c7a7a] text-[10pt] md:text-[11pt] xl:text-[11pt] lg:text-[11pt]'>
                    <p>Orders:</p>
                    <p>{product.orders}</p>
                </div>
                <div className='flex justify-between px-1  text-[#7c7a7a] text-[10pt] md:text-[11pt] xl:text-[11pt] lg:text-[11pt]'>
                    <p>Remaining:</p>
                    <p>{product.remaining_stock - 1}+</p>
                </div>
                <div className='flex justify-between px-1  text-[#7c7a7a] text-[10pt] md:text-[11pt] xl:text-[11pt] lg:text-[11pt]'>
                    <p>Shipping:</p>
                    <p>60 days</p>
                </div>
                <div className='flex justify-between px-1  text-[#7c7a7a] text-[10pt] md:text-[10pt] xl:text-[10pt] lg:text-[10pt]'>
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
                <Button onClick={() => nextPath(product)} size={'icon'} style={{padding: 0}} className='rounded-t-sm rounded-md rounded-r-lg bg-[#62C6FF] hover:bg-[#62C6FF] w-full gap-1'>View </Button>
                <Button onClick={() => toast({
                    title: "Save For Later",
                    description: "Item saved to cart successfully",
                    duration: 3500,
                })}
                    className=' text-white flex items-center justify-center bg-[#738086] hover:bg-[#494949]'><FaCartPlus size={18} color='lightgray' /></Button>
            </div>
        </Card>
    )
}
