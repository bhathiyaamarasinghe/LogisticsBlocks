import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Video } from "../images/video.mp4";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />

                {/* <!-- ***** Main Banner Area Start ***** --> */}
                <section class="section main-banner" id="top" data-section="section1">
                    {/* <video autoplay muted loop id="bg-video">
                        <source src="assets/images/video.mp4" type="video/mp4" />
                    </video> */}
                    <video src="assets/images/video.mp4" autoPlay muted loop id="bg-video" />
                    {/* <img src="assets/images/choose-us-image-01.png" id="bg-video" alt="" /> */}
                    <div class="video-overlay header-text">
                        <div class="caption">
                           
                            <img height="150" width="540"src="assets/images/logo-sign.png" alt="" />
                            <h2><em>Logistics</em> Blocks</h2>

                            <h6>"Colloborate with block chaining"</h6>
                            <br/>
                            <div class="main-button">
                                <div class="scroll-to-section"><a href="#section2">Discover more</a></div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- ***** Main Banner Area End ***** --> */}


                <section class="features">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-12">
                                <div class="features-post">
                                    <div class="features-content">
                                        <div class="content-show">
                                            <h4><i class="fa fa-cog"></i>Research </h4>
                                        </div>
                                        <div class="content-hide">
                                            <p>We are doing </p>
                                            <p class="hidden-sm">Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet.</p>
                                            <div class="scroll-to-section"><a href="#section2">More Info.</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-12">
                                <div class="features-post second-features">
                                    <div class="features-content">
                                        <div class="content-show">
                                            <h4><i class="fa fa-link"></i>Block Chains</h4>
                                        </div>
                                        <div class="content-hide">
                                            <p>Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero.</p>
                                            <p class="hidden-sm">Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet.</p>
                                            <div class="scroll-to-section"><a href="#section3">Details</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-12">
                                <div class="features-post third-features">
                                    <div class="features-content">
                                        <div class="content-show">
                                            <h4><i class="fa fa-diamond"></i>Quality Controlling</h4>
                                        </div>
                                        <div class="content-hide">
                                            <p>Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero.</p>
                                            <p class="hidden-sm">Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet.</p>
                                            <div class="scroll-to-section"><a href="#section4">Read More</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section why-us" data-section="section2">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="section-heading">
                                    <h2>Why choose Logistics Blocks?</h2>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div id='tabs'>
                                    <ul>
                                        <li><a href='#tabs-1'>Research & Developments</a></li>
                                        <li><a href='#tabs-2'>Block Chains</a></li>
                                        <li><a href='#tabs-3'>Quality Controlling</a></li>
                                    </ul>
                                    <section class='tabs-content'>
                                        <article id='tabs-1'>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <img src="assets/images/choose-us-image-01.jpg" alt="" />
                                                </div>
                                                <div class="col-md-6">
                                                    <h4>Research & Developments</h4>
                                                    <p>We doing various kind of research and developments in Sri Lankan and global agriculture, import / export and e-commerce areas.Logistics blocks standing with young blood to make innovations for the global market.We are like to collobarate with you to first done a research and second have a development process.<a href="https://paypal.me/templatemo" target="_parent" rel="sponsored"></a> </p>
                                                </div>
                                            </div>
                                        </article>

                                        <article id='tabs-2'>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <img src="assets/images/choose-us-image-02.jpg" alt="" />
                                                </div>
                                                <div class="col-md-6">
                                                    <h4>Block chains</h4>
                                                    <p>Logistics Blocks like to implement this block chain concept to Sri Lanka and the whole global market.We are applying this block chain concept for different areas.For that, we have a talented team with the technical mind. Also We implement this block chains with the American and Europien colloboratios in Sri Lanka</p>

                                                </div>
                                            </div>
                                        </article>
                                        <br />
                                        <article id='tabs-3'>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <img src="assets/images/choose-us-image-03.jpg" alt="" />
                                                </div>
                                                <div class="col-md-6">
                                                    <h4>Quality Controlling</h4>
                                                    <p>We introduce a unique solution for quality controlling in any major area.Specially we identify the low quality issue is a majorissue in transportation industry.Logistics Blocks have a efficient and effective solution for you to avoid that issue  </p>
                                                </div>
                                            </div>
                                        </article>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section coming-soon" data-section="section3">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="section-heading">
                                    <h2>About US</h2>
                                </div>
                            </div>
                            <div class="col-md-7 col-xs-12">
                                <div class="continer centerIt">
                                    <div>
                                        <h4><em>We have expirience with in this industry</em></h4>
                                        <div class="counter">

                                            <div class="days">
                                                <div class="value">00</div>
                                                <h6>Research & Development</h6>
                                            </div>

                                            <div class="hours">
                                                <div class="value">00</div>
                                                <h6>Block Chains</h6>
                                            </div>

                                            <div class="minutes">
                                                <div class="value">00</div>
                                                <h6>Software Solutions</h6>
                                            </div>

                                            <div class="seconds">
                                                <div class="value">00</div>
                                                <h6>Quality Controlling</h6>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="right-content">
                                    <div class="top-content">
                                        <h6>If u have any inqueries ..please contact us</h6>
                                    </div>
                                    <form id="contact" action="" method="get">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <fieldset>
                                                    <input name="name" type="text" class="form-control" id="name" placeholder="Your Name" required="" />
                                                </fieldset>
                                            </div>
                                            <div class="col-md-12">
                                                <fieldset>
                                                    <input name="email" type="text" class="form-control" id="email" placeholder="Your Email" required="" />
                                                </fieldset>
                                            </div>
                                            <div class="col-md-12">
                                                <fieldset>
                                                    <input name="phone-number" type="text" class="form-control" id="phone-number" placeholder="Your Phone Number" required="" />
                                                </fieldset>
                                            </div>
                                            <div class="col-md-12">
                                                <fieldset>
                                                    <button type="submit" id="form-submit" class="button">Get it now</button>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section class="section video" data-section="section5">
                    
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 align-self-center">
                                <div class="left-content">
                                    <h6><em >"Post world war II is an vital era to the world. Liberalism, world peace have been increasing day by day, and people start to live more than before world war II. As human growth increases rapidly, people needed increase rapidly as well. So, we need to supply human needs efficiently as well as we have to protect the environment and the quality of products"</em>
                             <br />
                                        <br />Our Mission: 
                                        <br/>To use blockchain as our building blocks and other technical tools to provide environment-friendly supply chain solutions to the world to connect all logistics blocks to provide human needs most efficiently than ever
                            <br />
                                        <br />
                                        <br />Our Slogan:
                                        <br/>Protecting the quality of the earth is an art.
                             </h6>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <article class="video-item">


                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section contact" data-section="section6">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="section-heading">
                                    <h2>Contact US</h2>
                                </div>
                            </div>
                            <div class="col-md-6">

                                {/* <!-- Do you need a working HTML contact-form script?
                          
                          Please visit https://templatemo.com/contact page --> */}

                                <form id="contact" action="" method="post">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <fieldset>
                                                <input name="name" type="text" class="form-control" id="name" placeholder="Your Name" required="" />
                                            </fieldset>
                                        </div>
                                        <div class="col-md-6">
                                            <fieldset>
                                                <input name="email" type="text" class="form-control" id="email" placeholder="Your Email" required="" />
                                            </fieldset>
                                        </div>
                                        <div class="col-md-12">
                                            <fieldset>
                                                <textarea name="message" rows="6" class="form-control" id="message" placeholder="Your message..." required=""></textarea>
                                            </fieldset>
                                        </div>
                                        <div class="col-md-12">
                                            <fieldset>
                                                <button type="submit" id="form-submit" class="button">Send Message Now</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="col-md-6">
                                {/* <div id="map">
                      <iframe src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="422px" frameborder="0" style="border:0" allowfullscreen></iframe>
                    </div> */}
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />

            </div>
        );
    }
}

export default Home;