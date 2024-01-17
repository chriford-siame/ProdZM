import React from 'react'
import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

export default function Signup() {
  return (
    <div className='w-screen h-full flex items-center justify-center py-5'>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className=' self-center'>Signup</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email address</Label>
                <Input id="email" type={'email'} placeholder="example@email.com" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password1">Password</Label>
                <Input type={'password'} id="password1" placeholder="******" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password2">Confirm password</Label>
                <Input type={'password'} id="password2" placeholder="******" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="grid gap-1">
          <Button className='w-full' type='submit'>Submit</Button>
          <div className='flex justify-center'>
            <p>Already have an account? <a href='/login' className=' text-blue-400 hover:text-blue-500'>Login</a></p>
          </div>
          <div className='flex justify-between items-center'>
            <span className='border w-full mr-1 h-[1px]'></span>
            <span>Or</span>
            <span className='border w-full ml-1 h-[1px]'></span>
          </div>
          <Button onClick={() => {
            
          }} variant={'secondary'} className='border w-full flex justify-center gap-10'>
            <span><img src={require('src/assets/images/google-logo.jpg')} width={40} height={40} alt="Google-logo" /></span>

            <span className='flex float-end hover:text-gray-500 text-gray-500 '>Signup with google</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
