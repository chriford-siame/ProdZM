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
import { Input } from "../../ui/input"
import { Label } from "../../ui/label"
import React from "react"


interface IProps {
    ButtonElement: React.JSX.Element;
}
function ShippingDetailFormModal() {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'link'} style={{textDecoration: 'none'}}>
        <Edit2Icon size={20} className=' text-muted-foreground' /> <span className=' text-blue-400'>Edit or add new shipping details</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>Shipping Details</DialogTitle>
          <DialogDescription className="flex justify-between">
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
          <Button type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ShippingDetailFormModal;