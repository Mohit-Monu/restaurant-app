import CartContext from "./Cart-context"

function CartProvider(props){
    function addItemToCartHandler(item){

    }
    function rwmoveItemFromCartHandler(id){

    }
    const cartContext={
        items:[],
        totalAmount:0,
        addItem:addItemToCartHandler,
        removeItem:rwmoveItemFromCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    )
}
export default CartProvider