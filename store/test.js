
export const state = () => ({
    cart: 'hello test',
  })

  
  export const mutations = {
    
    ADD_TO_CART(state, product){
        alert("ok")
        console.log('working');
        let cart = [];
            
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
        }

        let items = cart.find(item => item.product_id === product.id);
        
        if (items) {
            items.quantity++
        }
        else{
              cart.push({
              name : product.title, 
              product_id : product.id, 
              image : product.image,
              price: product.price,
              quantity: 1
        });

        }

        localStorage.setItem('cart', JSON.stringify(cart));
        state.cartcount = 5
    },

  }