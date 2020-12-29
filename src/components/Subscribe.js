import React, {useState} from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default function Subscribe() {
    const [message, setmessage] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        let email = formData.get("subscribe")

        const result = await addToMailchimp(email)

        if(result.msg.length >= 100){
            result.msg = "This email is already subscribed!"
        }

        setmessage(result)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input__control__search">
                <label htmlFor="subscribe" >
                    <input onChange={() => setmessage("")} className="input" id="subscribe" name="subscribe" aria-label="subscribe" placeholder="Your Email..."/>
                </label>
                <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                    <input type="text" name="b_b24e063c4016bfebd34ff0a64_749e03769b" tabIndex="-1" defaultValue=""/>
                </div>
                <div className="error">
                 {message ? message.result === "error" ? <p className="error__message">{message.msg}</p> 
                    : <p className="success">Thanks for Subbing</p> 
                : null}  
                </div> 
                
                <button className="btn btn__sm" type="submit">Subscribe</button>
            </div>
        </form>
        
    )
}
