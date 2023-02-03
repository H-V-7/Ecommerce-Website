

export const getProductsReducer = (state = {products:[]},action) => {
    const {type, payload} = action
    
        if( type === "productSucess")
            return {...state,products:payload}
        else if(type === "productsFail")
            return {...state,error:payload}
        else
            return state
    }


export const getProductDetailsReducer = (state = {product:{}},action) => {
    const {type, payload} = action

    
    if( type === "productDetailsSucess")
            return {...state,products:payload}
    else if(type === "productsDetailsFail")
            return {...state,error:payload}
    else
        return state
}    