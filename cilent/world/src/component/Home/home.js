import React from 'react';
import A from './images/A.png';
import B from './images/B.png';
import C from './images/C.png';
import D from './images/D.png';
import SH from './images/SH.jpeg';
import SHO from './images/SHO.jpeg';
import SHOE from './images/SHOE.jpeg';
import UU from './images/UU.jpg';
import v from './images/v.jpg';
import VV from './images/VV.jpg';
import BB from './images/BB.jpg';
import CC from './images/CC.jpg';
import DD from './images/DD.jpg';
import ddd from './images/ddd.jpg';
import E from './images/E.jpg';
import F from './images/F.jpeg';
import { Carousel,Card } from "react-bootstrap";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import './home.css';
function Home(){
    return(
        <>
        <section className="home-silder">
        <Carousel className="custom-carousel">
            <Carousel.Item>
                <img src={A} alt="slider" className="silder"/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={B} alt="slide" className="silder"/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={C} alt="side" className="silder"/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={D} alt="sider" className="silder"/>
            </Carousel.Item>
        </Carousel>
        <section className="custom-product">
            <h3>Imperial Gowns Products</h3>
            <h5>Mens and Womens Collections</h5>
            <section className="custom-card-product">
                <Card className="custom-cardhome">
                    <Card.Img src={ddd} alt="sky" className="custom-imghome"/>
                    <Card.Body>
                        <Card.Title>Casual shirt</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="custom-cardhome">
                    <Card.Img  src={E} alt="sky" className="custom-imghome"/>
                    <Card.Body>
                        <Card.Title>Fabric shirt</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="custom-cardhome">
                    <Card.Img src={F} alt="sky" className="custom-imghome"/>
                    <Card.Body>
                        <Card.Title>Cotton shirt</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="custom-cardhome">
                    <Card.Img src={BB} alt="sky" className="custom-imghome"/>
                    <Card.Body>
                        <Card.Title>Kurta</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="custom-cardhome">
                    <Card.Img src={CC} alt="sky" className="custom-imghome"/>
                    <Card.Body>
                        <Card.Title>Lehenga</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="custom-cardhome">
                    <Card.Img src={DD} alt="sky" className="custom-imghome"/>
                    <Card.Body>
                        <Card.Title>Anarkali</Card.Title>
                    </Card.Body>
                </Card>
            </section>
            <h5>kids and shoes Collections</h5>
            <section className="custom-card-product">
                <Card className="custom-cardhome">
                    <Card.Img src={UU} alt="sky" className="custom-imghome"/>
                    <Card.Body>
                        <Card.Title>Kids outfit</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="custom-cardhome">
                    <Card.Img src={v} alt="sky" className="custom-imghome"/>
                    <Card.Body>
                        <Card.Title>Kids outfit</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="custom-cardhome">
                    <Card.Img  src={VV} alt="sky" className="custom-imghome"/>
                    <Card.Body>
                        <Card.Title>Kids outfit</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="custom-cardhome">
                    <Card.Img src={SH} alt="sky" className="custom-imghome"/>
                    <Card.Body>
                        <Card.Title>Casual shoes</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="custom-cardhome">
                    <Card.Img varient="top" src={SHO} alt="sky" className="custom-imghome"/>
                    <Card.Body>
                        <Card.Title>Formal Shoes</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="custom-cardhome">
                    <Card.Img varient="top" src={SHOE} alt="sky" className="custom-imghome"/>
                    <Card.Body>
                        <Card.Title>Running shoes</Card.Title>
                    </Card.Body>
                </Card>
            </section>
        </section>
        
        <section className='destination'>
            <h4>Imperial Gowns one-step Shopping Destination</h4>
            <p className='destination-p'>Welcome to Imperial Gowns, your ultimate one-step shopping destination for the entire family's fashion needs. Our online store offers a diverse and stylish range of products:<br/>
            <span className='destination-title'>Men's Shirts:</span><br/>Discover our collection of men's shirts, where classic elegance meets modern trends. From crisp dress shirts perfect for formal occasions to casual button-downs and trendy prints for everyday wear, we have something for every man.<br/>
            <span className='destination-title'>Women's Dresses:</span><br/>Explore our stunning array of women's dresses, designed to make every occasion special. Whether you're looking for a sophisticated evening gown, a chic cocktail dress, or a comfortable day dress, our selection combines style, comfort, and quality.<br/>
            <span className='destination-title'>Kids' Dresses:</span><br/> Find adorable and practical dresses for your little ones in our kids' section. Our range includes everything from playful patterns to elegant designs, ensuring your children look their best for any event or everyday play.<br/>
            <span className='destination-title'>Shoes:</span><br/> Complete your outfit with our extensive collection of shoes for every occasion. From formal footwear to casual sneakers, our selection offers the perfect blend of style, comfort, and durability for men, women, and children.<br/>
            At Imperial Gowns, we aim to make your shopping experience seamless and enjoyable with our carefully curated collections.</p>
        </section>

        <section className='contact'>
            <section className='contact-bottom'>
                <ul type="none">
                    <li className='contact-socialmedia'>Mailus:</li>
                    <li><SiGmail /> www.ImperialGowns.in</li>
                    <li className='contact-socialmedia'>Contact us:</li>
                    <li><FaPhone /> +91 4088597480</li>
                </ul>
                    <ul type="none">
                        <li className='contact-socialmedia'>Customer Policy</li>
                        <li>Terms of Use</li>
                        <li>Privacy</li>
                        <li>Cancellation & Returns</li>
                    </ul>
                <ul type="none">
                    <li className='contact-socialmedia'>Group Companies</li>
                    <li>Filpkart</li>
                    <li>Amazon</li>
                    <li>Myntra</li>
                    <li>Cleartrip</li>
                </ul>
                <ul type="none">
                    <li className='contact-socialmedia'>Social</li>
                    <li><FaInstagram /> Imperial_Gowns</li>
                    <li><FaTwitter /> Imperial_Gowns01</li>
                    <li><FaYoutube /> Imperial Gowns</li>
                    <li><FaFacebook /> _Imperial_Gowns__</li>
                </ul>
                <ul type="none">
                    <li className='contact-socialmedia'>Help</li>
                    <li>Shipping</li>
                    <li>Cancellation & Returns</li>
                    <li>FAQ</li>
                </ul>
            </section>
        </section>
        </section>
        </>
    )
}
export default Home;