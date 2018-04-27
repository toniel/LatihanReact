import React, { Component } from 'react';
import { Container, Header, Title, Content, Card, CardItem, Right, Button, Body, Left, Icon, Text, Form, Item, Input, Label } from 'native-base';
import axios from 'axios';
import Pertemuan3 from './Pertemuan3';
 
export default class Pertemuan5 extends Component{
    constructor(){
        super()
        this.state={
            nama:'',
            hp:0
        }
    }
 
    // postData(){
    //     axios({
    //         method:'POST',
    //         url:'http://5ad873eddc1baa0014c60b8f.mockapi.io/api/kontak',
    //         data:{
    //             nama:this.state.nama,
    //             hp:this.state.hp
    //         }
    //     })
    // }

    postData(){
    axios.post("http://5ad873eddc1baa0014c60b8f.mockapi.io/api/kontak",{nama:this.state.nama,hp:this.state.hp})
    .then(res=>{
        alert('Data Berhasil ditambahkan');

        this.props.navigation.navigate('Home');  
        // Pertemuan3.getData();
        })
    }
    
 
    render(){
        const { goBack } = this.props.navigation
        return(
            <Container>
                <Header>
                <Left>
                    <Button transparent onPress={() => goBack()}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>   
                <Body>
                <Title>Kontak</Title>
                </Body>
                <Right />
                </Header>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>Nama</Label>
                            <Input 
                                onChangeText={(nama)=> this.setState({nama})}
                            />
                        </Item>
                        <Item stackedLabel>
                            <Label>No HP</Label>
                            <Input 
                                keyboardType='numeric'
                                onChangeText={(hp)=>this.setState({hp})}
                            />
                        </Item>
                        <Button full 
                            style={{margin:10}}
                            onPress={()=>{this.postData()}}
                        >
                            <Text>Simpan</Text>
                        </Button>
                    </Form>
                    </Content>
            </Container>
        )
    }
}