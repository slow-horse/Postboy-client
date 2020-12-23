import {useState} from 'react'
import {Router, useRouter} from 'next/router'
import fetch from 'node-fetch'
import Link from 'next/link'

export default function Signin() {
    const router = useRouter()
    const [isLogin, setisLogin] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errormessage, setErrormessage] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!(email && password)) {
                throw('Please give both email and password!')
            }
            const response = await fetch(`/signin`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            const body = await response.json()
            if (!response.ok) {
                throw `Server says: ${body.message}`
            } 
            router.push('/') 
        } catch(e) {
            setErrormessage(e)
        }
    }

    
    return (
        <div>
            <div>
                <div>
                    <img src="/postboy.png" alt="Workflow"/>
                    <h2>
                        Sign in
                    </h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input onChange={e => setEmail(e.target.value)} type="email" value={email} placeholder="Email address"/>
                        <input onChange={e => setPassword(e.target.value)} type="password" value={password} placeholder="Password"/>
                        <p>{errormessage}</p>
                    </div>
                    <div>
                        <button type="submit">
                            Sign in
                        </button>
                        <Link href={'/signup'}><a><p>Or create account</p></a></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}