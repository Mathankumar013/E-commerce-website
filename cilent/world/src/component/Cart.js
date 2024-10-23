import React from 'react';
import { Button } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import './Cart.css';

function Cart(){
    const{
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        updateItemQuantity,
        removeItem,
        emptyCart,
    }=useCart()
    const cartTotal = items.reduce((total, item) => {
        const itemPrice = parseFloat(item.price.replace(/,/g, '')); // Convert price string to number
        return total + itemPrice * item.quantity;
      }, 0);
    if(isEmpty)return<h1 className='text-center'>The Cart is empty</h1>
    return(
        <>
        <section className='addcart-display' >
            <section className='py-4 container'>
                <div className='row justify-content-center'>
                    <div className='col-12'>
                        <h3>Cart<span className='items-total'> ({totalUniqueItems})</span> total Items<span className='items-total'> ({totalItems})</span></h3>
                    <table className='table table-light table-hover m-0'>
                        <tbody>
                            {items.map((item,index)=>(
                                <tr key={index}>
                                    <td>
                                        <img src={item.img} alt={item.title} style={{height:'6rem'}}/>
                                    </td>
                                    <td>{item.title}</td>
                                    <td>{item.des}</td>
                                    <td>₹{item.price}</td>
                                    <td>Quantity:{item.quantity}</td>
                                    <td>
                                        <Button className='btn-info ms-2' onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</Button> {item.quantity}
                                        <Button className='btn-info ms-2' onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</Button>
                                        <Button className='btn-warning ms-2' onClick={()=>removeItem(item.id)}>RemoveItem</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                    <div className='col-auto'>
                        <h2>Total Price:<span className='total'> ₹{cartTotal}</span></h2>
                    </div>
                    <div className='col-auto ms-auto'>
                        <Button className='btn-danger m-2' onClick={()=>emptyCart()}>Clear Cart</Button>
                    </div>
                </div>
            </section>        
        </section>
        </>
    )
}
export default Cart;