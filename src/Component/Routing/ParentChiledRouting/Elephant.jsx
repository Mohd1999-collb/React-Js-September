import React from 'react'
import Animal from './Animal'
import { useNavigate } from 'react-router-dom'

const Elephant = () => {
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

                <button type='submit' onClick={() => navigate("/monkey")} style={{
                    width: '10rem',
                    height: "3rem",
                    margin: "auto",
                    display: "block",
                    border: 'none',
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontSize: "20px",
                    fontWeight: "600"
                }}>Go to Monkey</button>
            </div>
            <Animal link="https://images.unsplash.com/photo-1603483080228-04f2313d9f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80" name='Elephant-1' />
            <Animal link="https://images.unsplash.com/photo-1505148230895-d9a785a555fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" name='Elephant-2' />
            <Animal link="https://images.unsplash.com/photo-1575187105891-be9b5d30cecd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1372&q=80" name='Elephant-3' />


        </div>

    )
}

export default Elephant