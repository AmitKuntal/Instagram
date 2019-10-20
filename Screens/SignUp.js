import React from 'react';
import { Text, View } from 'react-native';
import { Avatar, Card, Image, Button, Divider, Input } from 'react-native-elements';


class SignUp extends React.Component {
    render() {
        return (
            <View>
                <View style={{ height: "93%" }}>
                    <View style={{ marginTop: "7%", marginLeft: "10%", width: "80%", height: 150 }}>
                        <Image
                            source={{ uri: 'http://assets.stickpng.com/thumbs/5a4e432a2da5ad73df7efe7a.png' }}
                            style={{ width: "100%", height: "100%" }}
                        />
                        <View style={{ marginTop: "7%" }}>
                            <Button
                                title="Login With Facebook" />
                        </View>
                        <View style={{ marginTop: "10%" }}>
                            <View>
                                <Divider style={{ height: 1 }} />
                                <Text style={{
                                    position: "absolute",
                                    top: -15,
                                    right: '47%',
                                    backgroundColor: 'white',
                                    padding: 6,
                                }}>OR</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: "7%" }}>
                            <View style={{ marginTop: "2%" }}>
                                <Input placeholder="Phone Number or Email"
                                />
                            </View>
                            <View style={{ marginTop: "5%" }}>
                                <Input placeholder="Full Name"
                                />
                            </View>
                            <View style={{ marginTop: "5%" }}>
                                <Input placeholder="User Name"
                                />
                            </View>
                            <View style={{ marginTop: "5%" }}>
                                <Input placeholder="Password"
                                />
                            </View>
                            <View style={{ marginTop: "5%" }}>
                                <Button
                                    title="SignUp" />
                            </View>
                        </View>



                    </View>
                </View>
                <View style={{ height: "7%", width: "100%", backgroundColor: "#F6F6F5", flexDirection: "row", justifyContent: "center" }}>
                    <Text style={{ marginTop: "3.5%" }}>Already Have an account? </Text>
                    <Text onPress={() => this.props.navigation.navigate('Login')}
                        style={{ marginTop: "3.5%", color: "#2874A6", fontWeight: "bold" }}>Login</Text>
                </View>
            </View>


        );
    }
}

export default SignUp;