import CartContext from "./Cart-context"

function CartProvider(props){
    function addItemToCartHandler(item){

    }
    function rwmoveItemFromCartHandler(id){

    }
    const CartContext={
        items:[],
        totalAmount:0,
        addItem:addItemToCartHandler,
        removeItem:rwmoveItemFromCartHandler
    }
    return (
        <CartContext.Provider value={CartContext}>{props.children}</CartContext.Provider>
    )
}
export default CartProvider