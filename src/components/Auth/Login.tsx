import React, { useContext, useState } from 'react'
import { GoogleLogin } from '@react-oauth/google'
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
import { jwtDecode } from 'jwt-decode'
import { useAuth } from '../../hooks/useAuth'
import { AppContext } from '../../context/app_context'
import GetUser from '../../hooks/User'

export default function Login() {

  const { handleLogin } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const appContext = useContext(AppContext);
  if (!appContext) {
    throw new Error('component must be wrapped in a provider');
  }
  const {user, setUser} = appContext;
  
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await handleLogin(username, password);
      const userInfo = GetUser(username);
      alert(JSON.stringify(userInfo));
      window.location.href = "/"; // Redirect after login
    } catch (err) {
      setError("Invalid credentials");
    }
  };
  return (
    <div className='w-screen h-full flex items-center justify-center py-5'>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className=' self-center'>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Username</Label>
                <Input id="email" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="example@email.com" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input type={'password'} value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="******" />
              </div>
            </div>
            <Button className='w-full mt-3' type='submit'>Submit</Button>
          </form>
        </CardContent>
        <CardFooter className="grid gap-1">
          <div className='flex justify-center'>
            <p>Don't have an account? <a href='/signup' className=' text-blue-400 hover:text-blue-500'>Signup</a></p>
          </div>
          <div className='flex justify-between items-center'>
            <span className='border w-full mr-1 h-[1px]'></span>
            <span>Or</span>
            <span className='border w-full ml-1 h-[1px]'></span>
          </div>
          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const credentialResponseDecoded = jwtDecode(`${credentialResponse.credential}`);
                console.log(credentialResponseDecoded)
              }}
              onError={() => {
                console.log("Failed to login")
              }}
            />
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
