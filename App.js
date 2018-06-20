import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { listOrders } from './orders.js';

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: '',
        url: 'https://core-staging.honestbee.com/api/orders?access_token=b2fa626a9397670627e43d13c678614b2a26b98de97d05a658f087a56bfc063c&fields=order_item_count,order_fulfillments.product_images:brand,product_images,order_receipt&service_type=food&page=1&shipping_mode=regular%2Cmerchant_delivery',
      }
    }

    // renderItem = (element) => (
    //     <Text> {element.id} </Text>
    // )

     componentDidMount() {
      console.log('componentDidMount!')
      this.getOrderList();
    }

    getOrderList = async () => {
      var result = await listOrders()
      // console.log(result)
      this.setState({data:result})
    }

    _myRenderItem = ({item}) => {
      console.log('item.id=', item.previewImageThumbnails[0])
      return(
          <View> 
                <View style={styles.item_top}> 
                  <Text> {item.id} </Text>
                  <Text> {item.status} </Text>
                </View>
                <View style={styles.item_middle}>
                  <Text> {item.brandList} </Text>
                  <Image
                      style={{width: 50, height: 50}}
                      source={{uri: item.previewImageThumbnails[0]}}
                    />
                </View>
                <View style={styles.item_bottom}> 
                  <Text> total: ${item.totalAmount} </Text>
                </View>
          </View>
          
      );
    };

    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.header}> lecture 4
            </Text>
            <FlatList style={styles.list}
                // data={this.state.items}
                // renderItem={element => this.renderItem(element)}
                keyExtractor={item => item.id.toString()}
                data={this.state.data}
                renderItem={this._myRenderItem}
                // data={[{key: 'a'}, {key: 'b'}]}
                // renderItem={({item}) => <Text>{item.key}</Text>}
                />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        backgroundColor: 'lightgray',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
      marginLeft: 10,
      marginRight: 10,
      marginTop: 20,
      backgroundColor: 'white',
    },
    list: {
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      marginBottom: 40,
      backgroundColor: '#ffa',
    },
    item_middle: {
      backgroundColor: 'white',
    },
    item_top: {
      flex: 0,
      backgroundColor: 'pink',
      paddingTop: 8,
      paddingBottom: 8,
    },
    item_bottom: {
      backgroundColor: 'orange',
      marginBottom: 10,
      paddingTop: 8,
      paddingBottom: 8,
    }
});
