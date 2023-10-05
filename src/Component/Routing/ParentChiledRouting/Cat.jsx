import React from 'react'
import Animal from './Animal'
import { useNavigate } from 'react-router-dom'

const Cat = () => {
    const navigate = useNavigate()
    return (
        <div>
             <div style={{
                display: "flex"
            }}>

                {/* /home/dog --> Here first '/' is present this means that add this path with current base url localhost:300 */}
                <button type='submit' onClick={() => navigate("/home/dog")} style={{
                    width: '10rem',
                    height: "3rem",
                    margin: "auto",
                    display: "block",
                    border: 'none',
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontSize: "20px",
                    fontWeight: "600"
                }}>Go to Dog-1</button>

                     {/* home/dog --> Here first '/' is not present this means that add this path with current url localhost:300/home */}
                <button type='submit' onClick={() => navigate("home/dog")} style={{
                    width: '10rem',
                    height: "3rem",
                    margin: "auto",
                    display: "block",
                    border: 'none',
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontSize: "20px",
                    fontWeight: "600"
                }}>Go to Dog-2</button>

                {/* <button type='submit' onClick={() => navigate("/elephant")} style={{
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
                }}>Go to Monkey</button> */}

            </div>
            <Animal link="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" name='Cat-1' />
            <Animal link="https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" name='Cat-2' />
            <Animal link="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1443&q=80" name='Cat-3' />

           
            
        </div>
    )
}

export default Cat