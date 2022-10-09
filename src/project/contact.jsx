import React from "react";

export default function Contact () {
    return(
        <div id="contact">
            <h1>contact us</h1>
            <form>
                <input type="text" placeholder="full name" required />
                <input type="email" placeholder="enter your email" required />
                <textarea name="message" placeholder="write here......"></textarea>
                <input type="submit" value="send" />
            </form>
        </div>
    )
}