//这是api的配置文件

//export const SERVER =  process.env.NODE_ENV == 'production' ? 'http://api.sortmall.com' : ''
 const VERSION = 'v1'
 const SERVER='http://127.0.0.1:3000'


const API_CONFIG = {
    login: ['/users/login', 'post'],
    getUsername: ['/users/username', 'get'],
    logout: ['/users/logout', 'get'],
    register: ['/users', 'post'],
    checkUsername: ['/users/checkUsername', 'get'],
    getRegisterVerifyCode: ['/users/registerVerifyCode', 'get'],
    uploadUserAvatar: ['/users/avatar', 'post'],
    getUserinfo: ['/users/info', 'get'],
    updateUsersPwd: ['/users/pwd', 'put'],
    updateUsersUsername: ['/users/username', 'put'],
    updateUsersEmail: ['/users/email', 'put'],
    dynamicLogin: ['/users/dynamicLogin', 'post'],
    getLoginVerifyCode: ['/users/loginVerifyCode', 'get'],
    getCaptcha: ['/users/captcha', 'get'],

    getArrayCategories: ['/categories/arrayCategories', 'get'],
    getTreeCategories: ['/categories/treeCategories', 'get'],
    getChildArrayCategories: ['/categories/childArrayCategories', 'get'],
    getPositionAds: ['/ads/positionAds', 'get'],
    getFloors: ['/floors', 'get'],

    getProductsList: ['/products/list', 'get'],
    getProductsSearchList: ['/products/search', 'get'],
    getProductsDetail: ['/products/detail', 'get'],
    getHotProducts: ['/products/hot', 'get'],

    addCarts: ['/carts', 'post','auth'],
    getCartsCount: ['/carts/count', 'get','auth'],
    getCarts: ['/carts', 'get','auth'],
    updateCartsChoices: ['/carts/choices', 'put','auth'],
    deleteCarts: ['/carts', 'delete','auth'],
    updateCartsCounts: ['/carts/counts', 'put','auth'],

    getOrdersProducts: ['/orders/products', 'get','auth'],
    addOrders: ['/orders', 'post','auth'],
    getOrdersList: ['/orders/list', 'get','auth'],
    getOrdersDetail: ['/orders/detail', 'get','auth'],
    updateOrdersStatus: ['/orders/status', 'put','auth'],
    updateOrdersPay: ['/orders/pay', 'put','auth'],



    addShippings: ['/shippings', 'post'],
    getShippingsList: ['/shippings/list', 'get'],
    deleteShippings: ['/shippings', 'delete'],
    getShippingsDetail: ['/shippings/detail', 'get'],
    updateShippings: ['/shippings', 'put'],

    getPayments: ['/payments', 'get'],
    getPaymentsStatus: ['/payments/status', 'get']
   
   
}

module.exports = {
    API_CONFIG,
    SERVER,
    VERSION
}