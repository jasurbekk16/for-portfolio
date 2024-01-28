import React, { useState } from 'react';
import logo from "../assets/header/logo.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";


export default function Header() {

  const notify = () => toast("Mahsulot o'chirildi", {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });;
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false)
  const toggle = () => {
    setOpen(!open);
    console.log(open);
  };

  
  const basket = JSON.parse(localStorage.getItem('basket')) || [];
  const basketLength = basket.length;
  console.log(basketLength);
  //totalPrice
  const totalPrice = 0
  function totalPriceFunction(){
basket.forEach((item)=>{
  totalPrice = item.price * item.count;
  console.log(totalPrice);
})
  }
  // delete
function deleteItem(id){
  const newBasket = basket.filter((item)=> item.id !== id)
  localStorage.setItem('basket', JSON.stringify(newBasket))

  notify()
  setLoading(true)
setTimeout(()=>{
  setLoading(false)
}, 200)
}
//plus
function plus(id){
basket.map((item)=>{
  if(item.id === id){
    item.count++
    localStorage.setItem('basket', JSON.stringify(basket))
  }
})
setLoading(true)
setTimeout(()=>{
  setLoading(false)
}, 1)
}

//minus
function minus(id){
basket.map((item)=>{
  if(item.id === id){
    if(item.count > 1){
      item.count--
      localStorage.setItem('basket', JSON.stringify(basket))
    }
  }
})
setLoading(true)
setTimeout(()=>{
  setLoading(false)
}, 1)
}
  return (
    <div className='header'>
      <div className="h-left">
        <img src={logo} alt="" />
        <p>BEAUTY</p>
      </div>
      <div className="h-right">
        <a href="tel:8 (812) 123-45-67">8 (812) 123-45-67</a>
        <button>Обратный звонок</button>
      

      <span className='basketLength'>{basketLength}</span>
        <button onClick={toggle} id='basket'>
        <MdOutlineShoppingCart />
        </button>
</div>
      <div className="modal" style={open ? { transform: "translateX(0)" } : { transform: "translateX(500px)" }}>
        {
          basket.map((item) => (
            <div className="modal-item" key={item.id}>
              <img src={item.img} alt="" />
              <p>{item.name}</p>
              <b>{item.price * item.count} ₽</b>
              <div>
                <button onClick={()=> minus(item.id)}>-</button>
                <p>{item.count}</p>
                <button onClick={()=> plus(item.id)}>+</button>
                <button onClick={()=> deleteItem(item.id)}>
                <MdDeleteOutline />
                </button>
              </div>
<div className="total-price">
  
</div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
