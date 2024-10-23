import React from "react";
import womensilder from './Image/womensilder.jpg';
import womensilde from './Image/womensilde.jpg';
import womenside from './Image/womenside.jpg';
import { Carousel,Card,Button } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import {FaShoppingCart} from 'react-icons/fa';
import WomensData from "./Womendata.js";
import './women.css';

function Women(){
    return(
        <>
        <section className='women-display'>
        <Carousel className='women-postion'>
                <Carousel.Item>
                    <img src={womenside} alt='rightright' className='custom-women'/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={womensilde} alt='leftleft' className='custom-women'/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={womensilder} alt='center' className='custom-women'/>
                </Carousel.Item>
            </Carousel>
            <WomenProduct/>
        </section>
        </>
    )
}
function WomenProduct(){
    const {addItem}=useCart()
    return(
      <>
      <section className="women-product">
      <section className='women-flex'>
            {WomensData.womenData.map((item,index)=>(
            <Card key={index} className='custom-cardwomen'>
                <Card.Img src={item.img} className='card-womenimg'/>
                <Card.Body>
                    <Card.Title className='custom-womentitle'>
                        {item.title}
                    </Card.Title>
                    <Card.Text className='custom-womendes'>
                        {item.des}
                    </Card.Text>
                    <Card.Text className='custom-womenprice'>
                        ₹{item.price} <del className='women-delete'>₹{item.offer}</del>
                    </Card.Text>
                    <Button onClick={()=>addItem(item)} className='women-button'><FaShoppingCart/> Add Cart</Button>
                </Card.Body>
            </Card>
            ))} 
            </section>
            <section className='women-flex'>
            {WomensData.womenCollection.map((item,index)=>(
            <Card key={index} className='custom-cardwomen'>
                <Card.Img src={item.img} className='card-womenimg'/>
                <Card.Body>
                    <Card.Title className='custom-womentitle'>
                        {item.title}
                    </Card.Title>
                    <Card.Text className='custom-womendes'>
                        {item.des}
                    </Card.Text>
                    <Card.Text className='custom-womenprice'>
                        ₹{item.price} <del className='women-delete'>₹{item.offer}</del>
                    </Card.Text>
                    <Button onClick={()=>addItem(item)} className='women-button'><FaShoppingCart/> Add Cart</Button>
                </Card.Body>
            </Card>
            ))} 
            </section>
            <section className='women-flex'>
            {WomensData.womenProduct.map((item,index)=>(
            <Card key={index} className='custom-cardwomen'>
                <Card.Img src={item.img} className='card-womenimg'/>
                <Card.Body>
                    <Card.Title className='custom-womentitle'>
                        {item.title}
                    </Card.Title>
                    <Card.Text className='custom-womendes'>
                        {item.des}
                    </Card.Text>
                    <Card.Text className='custom-womenprice'>
                        ₹{item.price} <del className='women-delete'>₹{item.offer}</del>
                    </Card.Text>
                    <Button onClick={()=>addItem(item)} className='women-button'><FaShoppingCart/> Add Cart</Button>
                </Card.Body>
            </Card>
            ))} 
            </section>
            <section className='women-flex'>
            {WomensData.womenId.map((item,index)=>(
            <Card key={index} className='custom-cardwomen'>
                <Card.Img src={item.img} className='card-womenimg'/>
                <Card.Body>
                    <Card.Title className='custom-womentitle'>
                        {item.title}
                    </Card.Title>
                    <Card.Text className='custom-womendes'>
                        {item.des}
                    </Card.Text>
                    <Card.Text className='custom-womenprice'>
                        ₹{item.price} <del className='women-delete'>₹{item.offer}</del>
                    </Card.Text>
                    <Button onClick={()=>addItem(item)} className='women-button'><FaShoppingCart/> Add Cart</Button>
                </Card.Body>
            </Card>
            ))} 
            </section>
      </section>
      </>
    )
  }
export default Women;