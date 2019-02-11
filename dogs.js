import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { getDogs } from './actions';

class Dogs extends Component {
  componentDidMount() {
    this.props.getDogs();
  }
  
  render() {
    return (
      <View style={mainContainer}>
        <View style={headerStyle}>
          <Text style={textStyle}>Hello! Please enjoy </Text>
          <Text style={textStyle}>these super cute dogs.</Text>
          <Text>From Dog CEO API</Text>
        </View>
        <View style={container}>
          {this.props.getting_data ? <Text>GETTING DOGGOS</Text> : null }
          {this.props.error ? <Text>CANNOT GET DOGGOS</Text> : null}
          <View>
            <ScrollView style={scrollContainer}>
              {this.props.dogs.map((dog, i) => {
                return (
                  <Image
                    style={image}
                    key={i}
                    source={{ uri: dog }}
                    alt="cute dog"
                  />
                )
              })}
            </ScrollView>
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
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    paddingRight: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    marginRight: 20,
    marginLeft: 0,
  },
  headerStyle: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    height: 100,
    textAlign: 'center',
    marginTop: 30,
    marginRight: 20,
  },
  image: {
    height: 200,
    width: 200,
    margin: 5,
  },
  scrollContainer: {
    flex: 1,
    paddingVertical: 20,
  },
  textStyle: {
    fontSize: 26,
  }
});

const { image, container, headerStyle, scrollContainer, mainContainer, textStyle } = styles;

