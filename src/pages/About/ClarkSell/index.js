import React, { Fragment, PureComponent } from 'react';
import { Link } from 'react-static';
import { Helmet } from 'react-helmet';

import './clark.css';

class Home extends PureComponent {
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>Clark Sell | Unspecified</title>
                    <meta name="description" content="Clark Sell Founder of Unspecified." />
                </Helmet>

                <section className="defaultLayout">
                    <header>
                        <h2>Just who is Clark Sell?</h2>
                        <p>
                            I’m a very passionate, entrepreneurial person whose love for developing software was born from my obsessive passion for building and
                            customizing automobiles. This love of creativity, this love of building, creating, lead me to software development. Like the
                            automobile shrunk the world, the computer helped people scale. I love the Web. I love Mobile Apps. I love IoT and how it’s easier
                            than ever to get a small micro controller to just do a thing. Technology is changing the world, and I am glad to be a small part of
                            it.
                        </p>
                        <p>
                            Need a paper Copy?{' '}
                            <a href="/images/about/clarkSellResume.pdf" className="button fit special">
                                Download Resume
                            </a>
                        </p>
                    </header>

                    <div className="timeline">
                        <section id="cd-timeline" className="cd-container">
                            <div className="cd-timeline-block">
                                <div className="cd-timeline-img cd-company-logo">
                                    <img src="/images/about/unspecifiedLogoBlack.png" alt="Unspecified LLC" />
                                </div>

                                <div className="cd-timeline-content">
                                    <h2>Unspecified</h2>
                                    <h4>Founder and Practitioner</h4>
                                    <p>
                                        At Unspecified our goals are to help business better enable themselves and their customer experiences using software,
                                        modern technology, while focusing on the human experiences.
                                    </p>

                                    <span className="cd-date">September 2016 - Current</span>
                                </div>
                            </div>

                            <div className="cd-timeline-block">
                                <div className="cd-timeline-img cd-company-logo">
                                    <img src="/images/about/tcLogoTrees.svg" alt="That Conference" />
                                </div>
                                <div className="cd-timeline-content">
                                    <h2>That Conference</h2>
                                    <h4>Founder and CEO</h4>
                                    <p>
                                        That Conference is a 501(c)(6) created to build the best family-friendly software & tech community in the Midwest. That
                                        Conference is a multi-day technology conference dubbed as your “Summer Camp for Geeks”. That Conference is built on the
                                        core principal of sharing real experiences to help others while teaching our craft to our younger generation in a safe
                                        place. That Conference has had five major events and is anticipates 1700 geeks in 2017.
                                    </p>
                                    <a href="https://www.thatconference.com" className="cd-read-more button">
                                        Visit That Conference
                                    </a>
                                    <span className="cd-date">July 2010 - Current</span>
                                </div>
                            </div>

                            <div className="cd-timeline-block">
                                <div className="cd-timeline-img cd-company-logo">
                                    <img src="/images/about/tangibleLogo.svg" alt="Tangible Labs LLC" />
                                </div>

                                <div className="cd-timeline-content">
                                    <h2>Tangible Labs</h2>
                                    <h4>CoFounder and CO-CEO</h4>
                                    <p>
                                        Tangible built, offered, and supported a leading container-based PaaS platform known as Xervo, formally Modulus. Xervo
                                        managed 40k websites across the globe on three different cloud platforms. Xervo core features included: cross cloud
                                        hosting and scaling, realtime monitoring and one command build/deploy services for node, PHP, Perl, Java, .NET and
                                        static websites. Xervo was shutdown in May of 2017. Today Tangible uses that experience providing Web, Mobile, Cloud and
                                        IoT consulting services.
                                    </p>

                                    <span className="cd-date">September 2016 - January 2018</span>
                                </div>
                            </div>

                            <div className="cd-timeline-block">
                                <div className="cd-timeline-img cd-company-logo">
                                    <img src="/images/about/telerikLogo.svg" alt="Telerik" />
                                </div>

                                <div className="cd-timeline-content">
                                    <h2>Telerik, Progress</h2>
                                    <h4>Director of Product Management</h4>
                                    <p>
                                        In early of 2014 I joined Telerik as a Senior Product Manager helping expand the Telerik Platform (Telerik’s MDAP
                                        product) into the Enterprise. After being acquired by Progress Software, I became a Director of Product Management,
                                        running 4 developer products (Test Studio, Rollbase, Fiddler and Modulus) owning over 10m dollars in revenue.
                                    </p>

                                    <span className="cd-date">May 2014 - January 2017</span>
                                </div>
                            </div>

                            <div className="cd-timeline-block">
                                <div className="cd-timeline-img cd-company-logo">
                                    <img src="/images/about/microsoftLogo.png" alt="Microsoft" />
                                </div>

                                <div className="cd-timeline-content">
                                    <h2>Microsoft</h2>
                                    <h4>Senior Program Manager</h4>
                                    <p>
                                        My tenure of 9 years at started as a developer consultant in their professional consulting services group, where I was
                                        responsible for the design, build, and delivery of mission-critical Websites and Applications. After 5 years I wanted to
                                        take my experience broader, joining the Evangelism and Advocacy team as a developer evangelist in quest to partner
                                        deeply with the community at large while taking the community's input back to our products. 3 years later I would join
                                        the product group as a Senior Program Manager partnering with Microsoft’s top ISVs to architect and build their Mobile
                                        apps and deploying them to the cloud.
                                    </p>
                                    <Link to="/About/ClarkSell/Microsoft" className="cd-read-more button">
                                        Learn More
                                    </Link>
                                    <span className="cd-date">July 2005 - May 2014</span>
                                </div>
                            </div>

                            <div className="cd-timeline-block">
                                <div className="cd-timeline-img cd-company-logo">
                                    <img src="/images/about/allstateLogo.svg" alt="Allstate Insurance" />
                                </div>

                                <div className="cd-timeline-content">
                                    <h2>Allstate Insurance</h2>
                                    <h4>Senior Architect</h4>
                                    <p>
                                        The "official" professional career all started here, starting as a tester on the Year 2000 project, working through
                                        engineering ranks and ending as a Software Architect. I helped design, lead, and build a number of mission-critical
                                        Websites, Applications, and the core architecture framework the company used for all new software development.
                                    </p>
                                    <Link to="/About/ClarkSell/Allstate" className="cd-read-more button">
                                        Learn More
                                    </Link>
                                    <span className="cd-date">July 1998 - July 2005</span>
                                </div>
                            </div>

                            <div className="cd-timeline-block">
                                <div className="cd-timeline-img cd-company-logo">
                                    <img src="/images/about/wiu.svg" alt="Western Illinois University" />
                                </div>

                                <div className="cd-timeline-content">
                                    <h2>Western Illinois University</h2>
                                    <p>Graduated with a Bachelor of Information Technology</p>
                                    <span className="cd-date">June 1998</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Home;
