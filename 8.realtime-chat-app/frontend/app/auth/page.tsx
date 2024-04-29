"use client"
import { ChangeEvent, useState } from "react"
import Input from "@/components/auth/Input"
import Form from "@/components/auth/Form"

export default () => {
    const [isLogin, setIsLogin] = useState(true)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const onUsername = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const onPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const onPassword2 = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword2(e.target.value)
    }

    const onSubmit = () => {

    }

    return (
        <div className="relative w-full h-[100vh]">
            <Form condition={isLogin}>
                <h4 className="text-2xl font-bold mb-3">
                    Login
                </h4>

                <Input placeholder="Username" type="text" onChange={onUsername} value={username} />

                <Input placeholder="Password" type="text" onChange={onPassword} value={password}/>

                <button className="bg-blue-700 rounded-lg p-4 py-2">Sign In</button>

                <button className="text-sm" onClick={() => setIsLogin(false)}>Switch to Register</button>
            </Form>

            <Form condition={!isLogin}>
                <h4 className="text-2xl font-bold mb-3">
                    Register
                </h4>

                <Input placeholder="Username" type="text" onChange={onUsername} value={username}/>

                <Input placeholder="Password" type="text" onChange={onPassword} value={password}/>

                <Input placeholder="Confirm Password" type="text" onChange={onPassword2} value={password2}/>

                <button className="bg-blue-700 rounded-lg p-4 py-2">Sign Up</button>

                <button className="text-sm" onClick={() => setIsLogin(true)}>Switch to Login</button>
            </Form>
        </div >
    )
}