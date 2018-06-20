import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

export class ImagesView extends React.Component {
	constructor(props) {
        super(props);
    }
    
    static propTypes = {
    	imageList: PropTypes.array.isRequired,
    }

    render(){
	    const { imageList } = this.props;
    	console.log('8888', imageList)

    	return (
    		imageList.map( (imageUri,index) => {
	    		return (
	    		<Image 
	    			key={index}
	    			source={{uri:imageUri}}
	    			style={{width: 50, height: 50}}
	    		/>
	    	)
	    	})
    	)
    }
}
export default ImagesView;
