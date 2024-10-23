import React from 'react';
import './Shoe.css';
import shoesilde from './ShoesImg/shoesilde.jpg';
import shoesilder from './ShoesImg/shoesilder.jpg';
import { Carousel,Card, Button } from "react-bootstrap";
import {FaShoppingCart} from 'react-icons/fa';
import { useCart } from 'react-use-cart';
import ShoeData from "./ShoeData";

function Shoe(){
    return(
        <>
        <section className="shoe-display">
            <Carousel className="shoe-postion">
                <Carousel.Item>
                    <img src={shoesilder} alt="upup" className="shoe-size"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={shoesilde} alt="downdown" className="shoe-size"/>
                </Carousel.Item>
            </Carousel>
            <ShoeProduct/>
        </section>
        </>
    )
}
function ShoeProduct(){
    const {addItem}=useCart();
    return(
        <>
        <section className="shoe-product">
            <section className="shoe-flex">
                {ShoeData.shoesData.map((item,index)=>(
                    <Card key={index} className="custom-cardshoe">
                        <Card.Img src={item.img} className="custom-shoeimg"/>
                        <Card.Body>
                            <Card.Title className="shoe-title">{item.title}</Card.Title>
                            <Card.Text className="shoe-des">
                                {item.des}
                            </Card.Text>
                            <Card.Text className="shoe-price">
                             ₹{item.price} <del className='shoe-delete'>₹{item.offer}</del>
                            </Card.Text>
                            <Button onClick={()=>addItem(item)} className="shoe-button"><FaShoppingCart/> AddCart</Button>
                        </Card.Body>
                    </Card>
                ))}
            </section>
            <section className="shoe-flex">
                {ShoeData.shoeCollection.map((item,index)=>(
                    <Card key={index} className="custom-cardshoe">
                        <Card.Img src={item.img} className="custom-shoeimg"/>
                        <Card.Body>
                            <Card.Title className="shoe-title">{item.title}</Card.Title>
                            <Card.Text className="shoe-des">
                                {item.des}
                            </Card.Text>
                            <Card.Text className="shoe-price">
                             ₹{item.price} <del className='shoe-delete'>₹{item.offer}</del>
                            </Card.Text>
                            <Button onClick={()=>addItem(item)} className="shoe-button"><FaShoppingCart/> AddCart</Button>
                        </Card.Body>
                    </Card>
                ))}
            </section>
            <section className="shoe-flex">
                {ShoeData.shoeProduct.map((item,index)=>(
                    <Card key={index} className="custom-cardshoe">
                        <Card.Img src={item.img} className="custom-shoeimg"/>
                        <Card.Body>
                            <Card.Title className="shoe-title">{item.title}</Card.Title>
                            <Card.Text className="shoe-des">
                                {item.des}
                            </Card.Text>
                            <Card.Text className="shoe-price">
                             ₹{item.price} <del className='shoe-delete'>₹{item.offer}</del>
                            </Card.Text>
                            <Button onClick={()=>addItem(item)} className="shoe-button"><FaShoppingCart/> AddCart</Button>
                        </Card.Body>
                    </Card>
                ))}
            </section>
            <section className="shoe-flex">
                {ShoeData.shoeId.map((item,index)=>(
                    <Card key={index} className="custom-cardshoe">
                        <Card.Img src={item.img} className="custom-shoeimg"/>
                        <Card.Body>
                            <Card.Title className="shoe-title">{item.title}</Card.Title>
                            <Card.Text className="shoe-des">
                                {item.des}
                            </Card.Text>
                            <Card.Text className="shoe-price">
                             ₹{item.price} <del className='shoe-delete'>₹{item.offer}</del>
                            </Card.Text>
                            <Button onClick={()=>addItem(item)} className="shoe-button"><FaShoppingCart/> AddCart</Button>
                        </Card.Body>
                    </Card>
                ))}
            </section>
        </section>
        </>
    )
}
export default Shoe;