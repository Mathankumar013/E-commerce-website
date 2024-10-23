import React from 'react';
import KidData from './KidData.js';
import { Button, Card, Carousel } from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa';
import kidsilde from './kidimage/kidsilde.jpg';
import kidsilder from './kidimage/kidsilder.jpg';
import { useCart } from 'react-use-cart';
import './Kid.css';
function Kid(){
    return(
        <>
         <section className='kid-display'> 
            <Carousel className='kid-silde'>
                <Carousel.Item>
                    <img src={kidsilde} alt='up' className='silder-kidsize'/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={kidsilder} alt='down' className='silder-kidsize'/>
                </Carousel.Item>
            </Carousel>
            <KidProduct/>
        </section>
        </>
    )
}
function KidProduct(){
    const {addItem}=useCart();
    return(
        <>
         <section className='kid-product'>
            <section className='kid-flex'>
            {KidData.KidCollection.map((item,index)=>(
            <Card key={index} className='custom-cardkid'>
                <Card.Img src={item.img} className='card-kidimg'/>
                <Card.Body>
                    <Card.Title className='custom-kidtitle'>
                        {item.title}
                    </Card.Title>
                    <Card.Text className='custom-kiddes'>
                        {item.des}
                    </Card.Text>
                    <Card.Text className='custom-kidprice'>
                        ₹{item.price} <del className='men-delete'>₹{item.offer}</del>
                    </Card.Text>
                    <Button onClick={()=>addItem(item)} className='kid-button'><FaShoppingCart/> Add Cart</Button>
                </Card.Body>
            </Card>
            ))} 
            </section>
            <section className='kid-flex'>
            {KidData.KidItem.map((item,index)=>(
            <Card key={index} className='custom-cardkid'>
                <Card.Img src={item.img} className='card-kidimg'/>
                <Card.Body>
                    <Card.Title className='custom-kidtitle'>
                        {item.title}
                    </Card.Title>
                    <Card.Text className='custom-kiddes'>
                        {item.des}
                    </Card.Text>
                    <Card.Text className='custom-kidprice'>
                        ₹{item.price} <del className='men-delete'>₹{item.offer}</del>
                    </Card.Text>
                    <Button onClick={()=>addItem(item)} className='kid-button'><FaShoppingCart/> Add Cart</Button>
                </Card.Body>
            </Card>
            ))} 
            </section>
            <section className='kid-flex'>
            {KidData.KidProduct.map((item,index)=>(
            <Card key={index} className='custom-cardkid'>
                <Card.Img src={item.img} className='card-kidimg'/>
                <Card.Body>
                    <Card.Title className='custom-kidtitle'>
                        {item.title}
                    </Card.Title>
                    <Card.Text className='custom-kiddes'>
                        {item.des}
                    </Card.Text>
                    <Card.Text className='custom-kidprice'>
                        ₹{item.price} <del className='men-delete'>₹{item.offer}</del>
                    </Card.Text>
                    <Button onClick={()=>addItem(item)} className='kid-button'><FaShoppingCart/> Add Cart</Button>
                </Card.Body>
            </Card>
            ))} 
            </section>
            <section className='kid-flex'>
            {KidData.kidData.map((item,index)=>(
            <Card key={index} className='custom-cardkid'>
                <Card.Img src={item.img} className='card-kidimg'/>
                <Card.Body>
                    <Card.Title className='custom-kidtitle'>
                        {item.title}
                    </Card.Title>
                    <Card.Text className='custom-kiddes'>
                        {item.des}
                    </Card.Text>
                    <Card.Text className='custom-kidprice'>
                        ₹{item.price} <del className='men-delete'>₹{item.offer}</del>
                    </Card.Text>
                    <Button onClick={()=>addItem(item)} className='kid-button'><FaShoppingCart/> Add Cart</Button>
                </Card.Body>
            </Card>
            ))} 
            </section>
            </section>
        </>
    )
}
export default Kid;