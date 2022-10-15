import react from 'react';
import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import { TextInput } from 'react-native-web';

class Bmi extends react.Component {
    constructor(props) {
        super(props);
        this.state = { weight: '', height: '', bmi: 0 };
        this.compute = this.compute.bind(this);
    }

    compute() {
        // console.log('onpress');
        let weight = parseFloat(this.state.weight);
        let height = parseFloat(this.state.height);
        // console.log(this.state.weight);
        this.setState({ bmi: weight / Math.pow(height / 100, 2) });


    }
    render() {

        return (
            <View style={styles.container} >
                <View style={styles.group}>
                    <Text style={styles.title}>
                        weight (KG)
                    </Text>
                    <TextInput onChangeText={(weight) => this.setState({ weight })} value={this.state.weight} keyboardType='phone-pad' style={styles.input} />
                </View>

                <View style={styles.group}>
                    <Text style={styles.title}>
                        height (CM)
                    </Text>
                    <TextInput onChangeText={(height) => this.setState({ height })} value={this.state.height} style={styles.input} />
                </View>

                <View style={styles.center}>
                    <View style={styles.group}>
                        <Text style={styles.title}>
                            BMI: {this.state.bmi.toFixed(2)}
                            {/* {this.state.weight}
                            |height:
                            {this.state.height} */}

                        </Text>
                    </View>
                    <View style={styles.group}>
                        <TouchableOpacity onPress={this.compute} style={styles.button}>
                            <Text style={styles.buttonText}>
                                Compute
                            </Text>
                        </TouchableOpacity>
                        <TextInput style={styles.input} />
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'column',

        },
        group: { marginTop: 20 },
        button: {
            backgroundColor: 'lightblue',
            padding: 20,
            borderWidth: 1,
        },
        buttonText: { fontSize: 30 },
        input: {
            padding: 10,
            // flex: 1,
            height: 40,
            borderWidth: 1,
        },
        title: {
            fontSize: 20
        },
        center: { alignItems: 'center' }
    }
)

export default Bmi