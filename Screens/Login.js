import React from 'react';
import {Text, View } from 'react-native';
import { Avatar, Card,Image,Button,Divider, Input } from 'react-native-elements';


class Profile extends React.Component {
    render() {
        return (
            <View>
                <View style={{height:"93%"}}>
                    <View style={{marginTop:"7%",marginLeft:"10%",width:"80%",height:150}}>
                        <Image
                            source={{ uri: 'http://assets.stickpng.com/thumbs/5a4e432a2da5ad73df7efe7a.png' }}
                            style={{width:"100%",height:"100%"}}
                            />
                        <View style={{marginTop:"7%"}}>
                            <Button 
                            title="Login With Facebook"/>
                        </View>
                    <View style={{marginTop:"10%"}}>
                            <View style={{flexDirection:"row",color:"gray"}}>
                                <Text style={{color:"gray"}}>_______________________</Text>
                                <Text style={{marginTop:"2%",marginLeft:10,marginRight:20,color:"gray"}}>Or</Text>
                                <Text style={{color:"gray"}}>_______________________</Text>
                            </View>
                    </View>
                    <View style={{marginTop:"7%"}}>
                        <View style={{marginTop:"5%"}}>
                            <Input placeholder="Phone Number, UserName or Email"
                                />
                        </View>
                        <View style={{marginTop:"7%"}}>
                            <Input placeholder="Password"
                            /> 
                        </View>
                        <View style={{marginTop:"20%"}}>
                            <Button 
                                title="Login"/>
                        </View>
                    </View>
                 </View>
            </View>
            <View style={{height:"7%",width:"100%",backgroundColor:"#F6F6F5",flexDirection:"row",justifyContent:"center"}}>
                <Text style={{marginTop:"3.5%"}}>Don't Have an account?</Text>
                <Button title="Sign Up"
                    onPress={()=>this.props.navigation.navigate('SignUp')}
                type="clear"/>
            </View>
            </View>
            
           
        );
    }
}

export default Profile;