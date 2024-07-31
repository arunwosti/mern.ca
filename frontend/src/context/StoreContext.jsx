import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null)

// using this context we can access food_list arrayt anywhere in our app
const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000";
    const [token,setToken] = useState("");
    const [food_list, setFoodList] = useState([])

    // ----------------------Add to cart function -------------------------------------
    const addToCart = async (itemId) => {

        // when user adds 1st item in cart them this following statement will be called
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }

        // If the item is already added
        else {
            setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}));
        }

        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }

    // --------------------------Remove from cart function --------------------
    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1})); // ...prev is the previous stste of prev
        if (token){
            axios.post(url+"/api/cart/remove",{itemId},{headers:{token}});
        }
    }

    // function to get total amount
    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems) //iterating in the cartItems object
        {
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product)=>product._id===item);
                totalAmount += itemInfo.price* cartItems[item];
            }
            
        }
        return totalAmount;
    }

    const fetchFoodList = async ()=>{
        let newUrl = url;
        const response = await axios.get(newUrl+="/api/food/list");
        setFoodList(response.data.data);
    }

    const loadCartData = async (token) =>{
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}})
        setCartItems(response.data.cartData);
    }
// creating logic to avoid logout when reloading page
    useEffect(()=>{
        
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"))
            }
        }
        loadData();
    },[])

    const contextValue = {
        food_list, cartItems, setCartItems, addToCart, removeFromCart, getTotalCartAmount, url,token,setToken
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;