import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';

import { getDogs } from './actions';

class Dogs extends Component {
  componentDidMount() {
    this.props.getDogs();
  }
  
  render() {
    return (
      <View style={container}>
        <Text>Hello! This will return super cute dogs!</Text>
        <View>
          {this.props.getting_data ? <Text>GETTING DOGGOS</Text> : null }
          {this.props.error ? <Text>CANNOT GET DOGGOS</Text> : null}
          <View>
            {this.props.dogs.map((dog, i) => {
              return (
                <Image 
                  style={image} 
                  key={i} 
                  source={{uri: dog}} 
                  alt="cute dog"
                />
              )
            })}
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    getting_data: state.getting_data,
    error: state.error,
    dogs: state.dogs
  }
}
export default connect(mapStateToProps, { getDogs })(Dogs);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 20,
    fontSize: 18,
    textAlign: 'center'
  },
  image: {
    height: 200,
    width: 200,
    margin: 5,
  }
});

const { image, container, paragraph } = styles;
