import React from 'react';
import '../App.css';


const Item = props => {

    return(

        <div className="cartItem">
            <img className="cartImg" src={props.img} alt={props.img}/>

            <div className="collection">
                <h3 className="title">{props.title}</h3>
                <p className="item-desc">{props.desc}</p>
                <h4 className="price">{props.price} /- INR</h4>
                <h4 className="quantity">Quantity: {props.quantity}</h4>

                <div className="add-remove">

                    <button className="add" 
                    onClick={()=> props.increment(props.item)}
                    >+</button>  

                    <button className="sub" 
                    onClick={()=> props.decrement(props.item)}
                    >-</button>   

                </div> 

                <button 
                className="rmvbtn"
                onClick={()=> props.removeItem(props.item)}
                >Remove</button>

            </div>

        </div>

    );

}

const Cart = (props) => {

    const Total = () => {
        return props.cart.reduce((added,existed)=> {
            return added + existed.price*existed.quantity
        },0);   
    }

    return(

        <div className="Cart">

            <h5 className="center">My Cart</h5>

            {props.cart.map(item => (
                <Item key={item.id} 
                {...item} 
                item={item} 
                removeItem={props.removeItem} 
                increment={props.increment} 
                decrement={props.decrement} />
            ))}

            <div className="checkout">

                <p className="Total"> {Total()} /- INR </p>

                <button className="btn">checkout</button>
                
            </div>        

        </div>
    
    );
}

export default Cart;