//const [searchKey,setSearchKey] = React.useState ("");//задаєм стейт пошуквого запита в корні нашого аппа
//  const [cartItems,setCartItems] = React.useState ([]);//задаєм стейт для корзини

export const searchAction = (str) => {
    return {
        type: 'SEARCH',
        payload: str
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

export const reset = () => {
    return {
        type: 'RESET'
    };
};


