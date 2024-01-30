import { Copy, Edit2Icon } from "lucide-react"

import { Button } from "../../ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../ui/dialog"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../../ui/tabs"

import { Input } from "../../ui/input"
import { Label } from "../../ui/label"
import React, { FormEventHandler, FormHTMLAttributes, useState } from "react"
import { Form } from "react-router-dom"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card"


interface IProps {
    icon: React.JSX.Element | null;
    text: string;
}
function ShippingDetailFormModal(props: IProps) {
    const currentUserID = 1;//userDetails;
    const [message, setMessage] = useState('')
    const [detail, setDetail] = useState({
        address: 'Address',
        contactName: 'contact Name',
        phoneNumber: 'phone Number',
        province: 'province',
        city: 'city',
    })
    const handleSubmit = (event: FormEventHandler<HTMLFormElement> | any) => {
        event.preventDefault()
        const shippingDetailFormData = new FormData();
        shippingDetailFormData.append('address', detail.address);
        shippingDetailFormData.append('contactName', detail.contactName);
        shippingDetailFormData.append('phoneNumber', detail.phoneNumber);
        shippingDetailFormData.append('province', detail.province);
        shippingDetailFormData.append('city', detail.city);

        console.log(shippingDetailFormData)
        // fetch(`/api/shipping/user/${currentUserID}/details`, {
        //     method: 'PUT',
        //     body: shippingDetailFormData,
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         setMessage(data.message)
        //     })
        //     .catch((error: Error) => {
        //         console.log(error)
        //     });
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'link'} style={{ textDecoration: 'none' }}>
                    {props.icon} <span className='text-blue-400 pl-1'>{props.text}</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-5xl ">
                <DialogHeader className="pb-2">
                    <DialogTitle className="text-start">Shipping Details</DialogTitle>
                </DialogHeader>

                <Tabs defaultValue="editCurrent" className="">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="addNew">Add</TabsTrigger>
                        <TabsTrigger value="editCurrent">Edit</TabsTrigger>
                    </TabsList>
                    <TabsContent value="addNew">
                        <form id="addForm" method="post" onSubmit={e => handleSubmit}>
                            <div className="grid mb-2">
                                <Input
                                    name="address"
                                    id="address"
                                    defaultValue=""
                                    placeholder="Shipping address"
                                    onChange={(e: any) => setDetail({ ...detail, address: e.target.value })}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-2 gap-2 items-center">
                                <div className="grid gap-2">
                                    <Input
                                        name="contactName"
                                        id="province"
                                        defaultValue=""
                                        placeholder="State/Province"
                                        onChange={(e: any) => setDetail({ ...detail, province: e.target.value })}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Input
                                        name="phoneNumber"
                                        id="city"
                                        defaultValue=""
                                        placeholder="City"
                                        onChange={(e: any) => setDetail({ ...detail, city: e.target.value })}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Input
                                        name="province"
                                        id="contactName"
                                        defaultValue=""
                                        placeholder="Contact name"
                                        onChange={(e: any) => setDetail({ ...detail, contactName: e.target.value })}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Input
                                        name="city"
                                        id="phoneNumber"
                                        defaultValue=""
                                        placeholder="Phone No"
                                        onChange={(e: any) => setDetail({ ...detail, phoneNumber: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="flex gap-1 justify-center border-t mt-3 pt-1">
                                <Button type="submit" className="w-full" variant="default">
                                    Update
                                </Button>
                            </div>
                        </form>
                    </TabsContent>
                    <TabsContent value="editCurrent">
                        <form id="editForm" method="post" onSubmit={e => handleSubmit}>
                            <div className="grid mb-2">
                                <Input
                                    name="address"
                                    id="address"
                                    defaultValue={detail.address}
                                    placeholder="Shipping address"
                                    onChange={(e: any) => setDetail({ ...detail, address: e.target.value })}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-2 gap-2 items-center">
                                <div className="grid gap-2">
                                    <Input
                                        name="contactName"
                                        id="province"
                                        defaultValue={detail.province}
                                        placeholder="State/Province"
                                        onChange={(e: any) => setDetail({ ...detail, province: e.target.value })}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Input
                                        name="phoneNumber"
                                        id="city"
                                        defaultValue={detail.city}
                                        placeholder="City"
                                        onChange={(e: any) => setDetail({ ...detail, city: e.target.value })}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Input
                                        name="province"
                                        id="contactName"
                                        defaultValue={detail.contactName}
                                        placeholder="Contact name"
                                        onChange={(e: any) => setDetail({ ...detail, contactName: e.target.value })}
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Input
                                        name="city"
                                        id="phoneNumber"
                                        defaultValue={detail.phoneNumber}
                                        placeholder="Phone No"
                                        onChange={(e: any) => setDetail({ ...detail, phoneNumber: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="flex gap-1 justify-center border-t mt-3 pt-1">
                                <Button type="submit" className="w-full" variant="default">
                                    Create
                                </Button>
                            </div>
                        </form>
                    </TabsContent>

                </Tabs>

            </DialogContent>
        </Dialog>
    )
}
export default ShippingDetailFormModal;