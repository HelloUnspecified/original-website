import React, { Fragment, PureComponent } from 'react';
import { Helmet } from 'react-helmet';

import './contact.css';

class Contact extends PureComponent {
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>Contact Us - Unspecified</title>
                    <meta name="description" content="Reach out today and get in touch with us!" />
                    <meta name="keywords" content="Contact, Contact Us, Contact Unspecified, Email" />
                </Helmet>

                <section className="defaultLayout">
                    <h1>Contact Us!</h1>
                    <form action="https://formspree.io/hello@unspecified.io" method="POST">
                        <div className="formGroup">
                            <input type="text" name="name" id="email-name" placeholder="Your Name" />
                            <input type="email" name="_replyto" id="email-email" placeholder="Your Email Address" />
                        </div>

                        <div className="formGroup">
                            <textarea name="emailMessage" id="email-message" placeholder="Enter your message." rows="6" />

                            <input type="hidden" name="_next" value="http://unspecified.io/thanks" />
                            <input type="hidden" name="_subject" value="Your message from http://Unspecified.io!" />
                            <input type="text" name="_gotcha" style={{ display: 'none' }} />
                        </div>

                        <div className="formGroup">
                            <div class="formActions">
                                <input className="primary" type="submit" value="Send Message" />
                                <input type="reset" value="Reset" />
                            </div>
                        </div>
                    </form>
                </section>
            </Fragment>
        );
    }
}

export default Contact;
