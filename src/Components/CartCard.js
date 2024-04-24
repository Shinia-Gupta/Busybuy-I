// import React from 'react';
// import { useProducts } from '../Context/ProductsContext';
// import { useAuth } from '../Context/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// function CartCard({ product }) {
// const {handleCartOperations}=useProducts();
// const {currentUser}=useAuth();
// const [quantity,setQuantity]=useState(1);
// const navigate=useNavigate();
//     const handleCartUpdates=(actionType,prod)=>{
//         prod.quantity=quantity;
//         if(!currentUser){
//             navigate('/signin');
//             toast.error("Please signin to continue");
//             return;
//         }
// handleCartOperations(actionType,prod);
//     }
//     return (
//         <div className='border rounded-lg overflow-hidden shadow-lg flex flex-col h-auto w-48'>
//             <div className='h-40 overflow-hidden'>
//                 <img
//                     src={product.image}
//                     alt="product image"
//                     className='w-full h-full object-contain'
//                 />
//             </div>
//             <div className='p-4'>
//                 <p className='text-lg font-semibold mb-2 text-gray-900 truncate'>{product.title}</p>
//                 <p className='text-gray-700 font-medium'>Price: ${product.price}</p>
//                 <button onClick={()=>
                    
//                     {
//                         return (<>setQuantity(product.quantity+1);handleCartUpdates("UPDATE_CART_ITEM_INC",product))</>}} className='mt-4 py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300 ease-in-out focus:outline-none'>+</button> <span>{product.quantity}   </span>
//                 <button onClick={()=>handleCartUpdates("UPDATE_CART_ITEM_DEC",product)} className='mt-4 py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300 ease-in-out focus:outline-none'>-</button>
//                 <button onClick={()=>handleCartUpdates("REMOVE_CART_ITEM",product)} className='mt-4 py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300 ease-in-out focus:outline-none'>Remove From Cart</button>
//             </div>
//         </div>
//     );
// }

// export default CartCard;
import React, { useEffect, useState } from 'react';
import { useProducts } from '../Context/ProductsContext';
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { increment, updateDoc } from 'firebase/firestore';

function CartCard({ product,handleDecreaseQuantity }) {
    const { handleCartOperations,setUserCartAmount,currentCartUserRef,userData,handleIncreaseQuantity } = useProducts();
    const { currentUser } = useAuth();
    // const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    // useEffect(()=>{
    //     setQuantity(userData.quantity)
    // },[])
    const handleIncrement = async(actionType,prod) => {
        // setQuantity(quantity + 1);
        // let nprod={...prod,quantity:quantity}
        // setUserCartAmount((prevState)=>prevState+Number(product.price));
        // // await updateDoc(currentCartUserRef, {
        // //     cartAmount: increment(product.price)
        // // });
        // handleCartOperations(actionType, nprod);
        // setQuantity((prevState)=>prevState++);
        setUserCartAmount(userData.cartAmount+Number(product.price));

        handleIncreaseQuantity(prod);
    };

    const handleDecrement =async (actionType,prod) => {
        // if (quantity > 1) {
        //     setQuantity(quantity - 1);
        // }
        // let nprod={...prod,quantity:quantity}
        // setQuantity((prevState)=>prevState<=0?0:prevState--);

        // setUserCartAmount((prevState)=>prevState<=0?0:prevState-Number(product.price));
        // await updateDoc(currentCartUserRef, {
        //     cartAmount: increment(-product.price)
        // });
        handleDecreaseQuantity(prod);
        // handleCartOperations(actionType, nprod);

    };

    const handleCartUpdates = async(actionType, prod) => {
        // prod.quantity = quantity;
        if (!currentUser) {
            navigate('/signin');
            toast.error("Please signin to continue");
            return;
        }
        // setUserCartAmount((prevState)=>prevState<=0?0:prevState-Number(product.price*product.quantity));
        // await updateDoc(currentCartUserRef, {
        //     cartAmount: increment(-(product.price*product.quantity))
        // });
        handleCartOperations(actionType, prod);
    };

    return (
        <div className='border rounded-lg overflow-hidden shadow-lg flex flex-col h-auto w-48'>
            <div className='h-40 overflow-hidden'>
                <img
                    src={product.image}
                    alt="product image"
                    className='w-full h-full object-contain'
                />
            </div>
            <div className='p-4'>
                <p className='text-lg font-semibold mb-2 text-gray-900 truncate'>{product.title}</p>
                <p className='text-gray-700 font-medium'>Price: ${product.price}</p>
                <button onClick={()=>handleIncrement("UPDATE_CART_ITEM_INC",product)} className='mt-4 py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300 ease-in-out focus:outline-none'>+</button> <span>{product.quantity}</span>
                <button onClick={()=>handleDecrement("UPDATE_CART_ITEM_DEC",product)} className='mt-4 py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300 ease-in-out focus:outline-none'>-</button>
                <button onClick={() => handleCartUpdates("REMOVE_CART_ITEM", product)} className='mt-4 py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300 ease-in-out focus:outline-none'>Remove From Cart</button>
            </div>
        </div>
    );
}

export default CartCard;
