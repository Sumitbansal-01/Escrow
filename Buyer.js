import React from 'react'
import { useState } from 'react'


export default function Buyer() {
    const [buy, setbuy] = useState("")
    const [sell, setsell] = useState("")
    const [id, setid] = useState('')

    const hash = ['8743b52063cd84097a65d1633f5c74f5', '2303b15bfa48c74a74758135a0df1201', '$P$984478476IagS59wHZvyQMArzfx58u']
    const address = ['7196759210defdc0', 'AR11759210defP9U', '6r4e6759210deknhl']

    const buyhash = () => {
        if (buy) {
            return (
                <div className='mb-3' style={{ width: '100%', height: '10%', border: '1px solid black', backgroundColor: 'white' }} >{buy}</div>
            )
        }
    }

    const sellhash = () => {
        if (sell) {
            return (
                <div className='mb-3' style={{ width: '100%', height: '10%', border: '1px solid black', backgroundColor: 'white' }} >{sell}</div>
            )
        }
    }

    const generateContract = () => {
        if (buy === sell && buy !== '') {

            const generateId = () => {
                if (id !== '') {
                    return (
                        <div style={{ border: '1px solid black' }}><center>{id}</center></div>
                    )
                }
            }
            return (
                <>
                    <button className='mb-3' type='Submit' style={{ backgroundColor: 'orange' }} onClick={
                        (e) => {
                            e.preventDefault()
                            setid(address[Math.floor(Math.random() * address.length)])
                        }
                    }>Generate Contract</button>
                    {generateId()}
                </>
            )
        }
    }

    return (
        <div className='container mt-5' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '40%', backgroundColor: 'lightgray', border: '1px solid black', justifyContent: 'center', display: 'flex', height: 'auto' }}>
                <center style={{ width: '90%' }}>
                    <div className='mb-3 mt-3' style={{ height: '10%', backgroundColor: 'orange', border: '1px solid black', }}>
                        <center>BUYER</center>
                    </div>

                    <form>
                        <div className="mb-3">
                            <div className='mb-3' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ width: '30%', height: '10%', border: '1px solid black', backgroundColor: 'white' }}><center>NAME</center></div>
                                <input type="text" style={{ width: '60%', height: '10%' }}></input>
                            </div>

                            <div className='mb-3' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ width: '30%', height: '10%', border: '1px solid black', backgroundColor: 'white' }}><center>EMAIL</center></div>
                                <input type="email" style={{ width: '60%', height: '10%' }}></input>
                            </div>

                            <div className='mb-3' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ width: '30%', height: '10%', border: '1px solid black', backgroundColor: 'white' }}><center>PASSWORD</center></div>
                                <input type="password" style={{ width: '60%', height: '10%' }}></input>
                            </div>

                            <button type="submit" className="btn" style={{ backgroundColor: 'orange', border: '1px solid black' }} onClick={(e) => {
                                e.preventDefault()
                                setbuy(hash[Math.floor(Math.random() * hash.length)])
                            }}>Create Wallet</button>
                        </div>
                    </form>
                    {buyhash()}
                </center>

            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                {generateContract()}
            </div>



            <div style={{ width: '40%', border: '1px solid black', backgroundColor: 'lightgray', justifyContent: 'center', display: 'flex' }}>
                <center style={{ width: '90%' }}>
                    <div className='mb-3 mt-3' style={{ height: '10%', backgroundColor: 'orange', border: '1px solid black', }}>
                        <center>SELLER</center>
                    </div>

                    <form>
                        <div className="mb-3">
                            <div className='mb-3' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ width: '30%', height: '10%', border: '1px solid black', backgroundColor: 'white' }}><center>NAME</center></div>
                                <input type="text" style={{ width: '60%', height: '10%' }}></input>
                            </div>

                            <div className='mb-3' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ width: '30%', height: '10%', border: '1px solid black', backgroundColor: 'white' }}><center>EMAIL</center></div>
                                <input type="email" style={{ width: '60%', height: '10%' }}></input>
                            </div>

                            <div className='mb-3' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ width: '30%', height: '10%', border: '1px solid black', backgroundColor: 'white' }}><center>PASSWORD</center></div>
                                <input type="password" style={{ width: '60%', height: '10%' }}></input>
                            </div>

                            <button type="submit" className="btn" style={{ backgroundColor: 'orange', border: '1px solid black' }} onClick={(e) => {
                                e.preventDefault()
                                setsell(hash[Math.floor(Math.random() * hash.length)])
                            }}>Create Wallet</button>
                        </div>
                    </form>
                    {sellhash()}
                </center>

            </div>

        </div>
    )
}
