import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

export default function contact() {
    return (
        <Layout>
            <SEO title="Contact" />
            <section className="contact__wrapper" aria-label="contact">
                <h1 className="header center">
                    Contact
                </h1> 
                <p className="paragraph">
                    For more information please send me an email or if you 
                    have any questions or additional comments don’t hesitate to ask. I am always interested in 
                    talking ideas and love to learn new things.
                </p>
                <form className="form" action="https://formspree.io/f/mrgooybp" method="POST">
                    <div className="form__control">
                        <div className="input__control">
                            <label className="label label__after" htmlFor="name" >Name</label> 
                            <input className="input" id="name" name="name" aria-label="name" type="text" placeholder="Your Name..."/>
                        </div>
                        <div className="input__control">
                            <label className="label label__after" htmlFor="_replyto" >Email</label> 
                            <input className="input" id="email" name="_replyto" aria-label="email" type="email" placeholder="Your Email..."/>
                        </div>
                    </div>
                    <div className="input__control">
                        <label className="label label__after" htmlFor="message" >Message</label> 
                        <textarea className="textarea" id="message" name="message" aria-label="message" type="text" placeholder="Your Message..."/>
                    </div>
                    <input type="text" name="_gotcha" className="hidden"/>
            
                    <button className="btn" type="submit">Send</button>
                </form>
            </section>
        </Layout>
    )
}