import React from 'react';
import MenData from './Data';
import { Button, Card, Carousel } from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa';
import { useCart } from 'react-use-cart';
import silde from './image/silde.jpg';
import silder from './image/silder.jpg';
import './Men.css';
function  Men(){
    return(
        <>
        <section className='men-display'> 
            <Carousel className='postion-silde'>
                <Carousel.Item>
                    <img src={silde} alt='right' className='silder-size'/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={silder} alt='left' className='silder-size'/>
                </Carousel.Item>
            </Carousel>
            <MenCart/>
        </section>
        </>
    )
}
function MenCart(){
    const {addItem}=useCart();
    return(
        <>
        <section className='men-product'>
            <section className='men-flex'>
            {MenData.productData.map((item,index)=>(
            <Card key={index} className='custom-cardmen'>
                <Card.Img src={item.img} className='card-img'/>
                <Card.Body>
                    <Card.Title className='custom-title'>
                        {item.title}
                    </Card.Title>
                    <Card.Text className='custom-mendes'>
                        {item.des}
                    </Card.Text>
                    <Card.Text className='custom-menprice'>
                        ₹{item.price} <del className='men-delete'>₹{item.offer}</del>
                    </Card.Text>
                    <Button onClick={()=>addItem(item)} className='men-button'><FaShoppingCart/> Add Cart</Button>
                </Card.Body>
            </Card>
            ))}
            </section>
            <section className='men-flex'>
            {MenData.menCollection.map((item,index)=>(
            <Card key={index} className='custom-cardmen'>
                <Card.Img src={item.img} className='card-img'/>
                <Card.Body>
                    <Card.Title className='custom-title'>
                        {item.title}
                    </Card.Title>
                    <Card.Text className='custom-mendes'>
                        {item.des}
                    </Card.Text>
                    <Card.Text className='custom-menprice'>
                        ₹{item.price} <del className='men-delete'>₹{item.offer}</del>
                    </Card.Text>
                    <Button onClick={()=>addItem(item)} className='men-button'><FaShoppingCart/> Add Cart</Button>
                </Card.Body>
            </Card>
            ))}
            </section>
            <section className='men-flex'>
            {MenData.menProduct.map((item,index)=>(
            <Card key={index} className='custom-cardmen'>
                <Card.Img src={item.img} className='card-img'/>
                <Card.Body>
                    <Card.Title className='custom-title'>
                        {item.title}
                    </Card.Title>
                    <Card.Text className='custom-mendes'>
                        {item.des}
                    </Card.Text>
                    <Card.Text className='custom-menprice'>
                        ₹{item.price} <del className='men-delete'>₹{item.offer}</del>
                    </Card.Text>
                    <Button onClick={()=>addItem(item)} className='men-button'><FaShoppingCart/> Add Cart</Button>
                </Card.Body>
            </Card>
            ))}
            </section>
            <section className='men-flex'>
            {MenData.menId.map((item,index)=>(
            <Card key={index} className='custom-cardmen'>
                <Card.Img src={item.img} className='card-img'/>
                <Card.Body>
                    <Card.Title className='custom-title'>
                        {item.title}
                    </Card.Title>
                    <Card.Text className='custom-mendes'>
                        {item.des}
                    </Card.Text>
                    <Card.Text className='custom-menprice'>
                        ₹{item.price} <del className='men-delete'>₹{item.offer}</del>
                    </Card.Text>
                    <Button onClick={()=>addItem(item)} className='men-button'><FaShoppingCart/> Add Cart</Button>
                </Card.Body>
            </Card>
            ))}
            </section>
        </section>
        </>
    )
}
export default Men;