import React from 'react'
import Animal from './Animal'
import { useNavigate } from 'react-router-dom'

const Dog = () => {
    const navigate =  useNavigate();
    return (
        <div>
             <div style={{
                display: "flex"
            }}>
                <button type='submit' onClick={()=> navigate("/")} style={{
                    width: '10rem',
                    height: "3rem",
                    margin: "auto",
                    display: "block",
                    border: 'none',
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontSize: "20px",
                    fontWeight: "600"
                }}>Go to Cat</button>

                {/* <button type='submit' onClick={()=> navigate("/elephant")} style={{
                    width: '10rem',
                    height: "3rem",
                    margin: "auto",
                    display: "block",
                    border: 'none',
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontSize: "20px",
                    fontWeight: "600"
                }}>Go to Elephant</button>

                <button type='submit' onClick={()=> navigate("/monkey")} style={{
                    width: '10rem',
                    height: "3rem",
                    margin: "auto",
                    display: "block",
                    border: 'none',
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontSize: "20px",
                    fontWeight: "600"
                }}>Go to Monkey</button> */}

            </div>
            <Animal link="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" name='Dog-1' />
            <Animal link="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1378&q=80" name='Dog-2' />
            <Animal link="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1562&q=80" name='Dog-3' />

           
        </div>
    )
}

export default Dog