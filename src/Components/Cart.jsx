import { useSelector } from 'react-redux';
import store from '../utils/store';


const Cart = ()=>{

    const cartitams = useSelector(store =>store.cart.itams)

    return(
        <div className="">
            {cartitams.map((itams) =>{
                return(
                    <li key={itams.id}>{...itams}</li>
                )
            })}

        </div>
    )

    

}
export default Cart;