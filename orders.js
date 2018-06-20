// export const orders = async() => {
// 	var response = await fetch('https://core-staging.honestbee.com/api/orders?access_token=b2fa626a9397670627e43d13c678614b2a26b98de97d05a658f087a56bfc063c&fields=order_item_count,order_fulfillments.product_images:brand,product_images,order_receipt&service_type=food&page=1&shipping_mode=regular%2Cmerchant_delivery');
// 	var jsonResponse = await response.json()
//     console.log('API:');
//     console.log(jsonResponse[0].id);
//     return jsonResponse
// }

export const listOrders = async () => {
	var response = await fetch('https://core-staging.honestbee.com/api/orders?access_token=b2fa626a9397670627e43d13c678614b2a26b98de97d05a658f087a56bfc063c&fields=order_item_count,order_fulfillments.product_images:brand,product_images,order_receipt&service_type=food&page=1&shipping_mode=regular%2Cmerchant_delivery')
		      .then(response => response.json())
		      .catch(err => console.log('err: ', err))
		      // .then(data => this.setState({ data: data}))

	return response
}