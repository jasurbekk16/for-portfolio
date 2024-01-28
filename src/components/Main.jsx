import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import homeimg from "../assets/navbar/sale.png"
import kreslo from "../assets/main/rasm.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdAddShoppingCart } from "react-icons/md";



export default function Main() {
    const notify = () => toast("Mahsulot savatga qo'shildi", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });;

    const data = [
        { id: 1, img: kreslo, name: "кресло", price: 9900, count:1 },
        { id: 2, img: kreslo, name: "кресло", price: 9900, count:1 },
        { id: 3, img: kreslo, name: "кресло", price: 9900, count:1 },
        { id: 4, img: kreslo, name: "кресло", price: 9900, count:1 },
    ]
    const basket = JSON.parse(localStorage.getItem('basket')) || []
    function addcard(index) {

        basket.push(data[index])
        localStorage.setItem('basket', JSON.stringify(basket))
        notify()
    }



    return (
        <div className='main'>

            <Header />
            <Navbar />
            <img src={homeimg} alt="" />
            <div className="cards">
                {
                    data.map((item, index) => (
                        <div className='card' key={index}>
                            <img src={item.img} alt="" />
                            <span>{item.name}</span>
                            <p>{item.price} ₽</p>
                            <button onClick={() => addcard(index)}>
                            <MdAddShoppingCart />
                            </button>
                <ToastContainer />
                

                        </div>
                    ))
                }
            </div>
        </div>
    )
}
