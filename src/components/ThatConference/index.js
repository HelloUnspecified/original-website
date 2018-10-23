import React, { PureComponent } from 'react';

import { Link } from 'react-static';

import './thatconference.css';

class ThatConference extends PureComponent {
    render() {
        return (
            <div>
                <section>
                    <img src="/images/logos/logoBlack.png" />
                </section>

                <p>What Conference? THAT Conference! Your summer camp for geeks.</p>
                <p>
                    A family friendly tech conference for developers by developers, rooted in community, exploring today's architecture and tools. Web, Mobile,
                    Cloud, IoT, DevOps, Soft skills, and even a whole track dedicated for kids. It all happens at a giant waterpark, because we are strong
                    believers in good times.
                </p>
                <p>
                    I'm the founder and chief geek. What started with 5k dollars in seed money has turned into one of the largest community conferences here in
                    the United States. Today we see over 1600 Professionals, Spouses and Kids annually.
                </p>
                <a href="https://www.thatconference.com" className="button special">
                    Visit THAT Conference
                </a>
            </div>
        );
    }
}

export default ThatConference;
