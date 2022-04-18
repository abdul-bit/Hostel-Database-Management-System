import React from 'react'
import './style2.css';

function Signup() {
    return (
        <div>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <div class="login-box">
                <form>
                    <h1>Login</h1>
                    <div class="textbox">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Username"></input>
                    </div>

                    <div class="textbox">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password"></input>
                    </div>

                    <input type="button" class="btn" value="Sign in"></input>
                </form>
            </div>
        </div>
    )
}

export default Signup
