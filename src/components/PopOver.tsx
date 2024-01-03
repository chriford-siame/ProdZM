import React from "react";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";

export default function PopOver() {
    return (
        <div className="">
            <Popover>
                <PopoverTrigger>
                    <Button variant="default">Test Shadcn Button</Button>
                </PopoverTrigger>
                <PopoverContent>Project Wireframes In Progress</PopoverContent>
            </Popover>
        </div>
    )
}
