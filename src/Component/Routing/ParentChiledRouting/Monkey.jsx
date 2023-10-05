import React from 'react'
import Animal from './Animal'
import { useNavigate } from 'react-router-dom'

const Monkey = () => {
    const navigate = useNavigate();
    return (
        <div>

            <div style={{
                display: "flex"
            }}>
                <button type='submit' onClick={() => navigate("/dog")} style={{
                    width: '10rem',
                    height: "3rem",
                    margin: "auto",
                    display: "block",
                    border: 'none',
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontSize: "20px",
                    fontWeight: "600"
                }}>Go to Dog</button>

                <button type='submit' onClick={() => navigate("/elephant")} style={{
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

                <button type='submit' onClick={() => navigate("/")} style={{
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
            </div>
            <Animal link="https://images.unsplash.com/photo-1605559911160-a3d95d213904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80" name='Monkey-1' />
            <Animal link="https://images.unsplash.com/photo-1615038552039-e1b271f14ec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9ua2V5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" name='Monkey-2' />
            <Animal link="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80" name='Monkey-3' />


        </div>
    )
}

export default Monkey