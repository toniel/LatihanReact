< script src = "http://localhost:8097" > </script>
import React, { Component } from 'react';
import { Container, Header, Title, Content, Card, CardItem, Right, Button, Body, Icon, Text, Fab } from 'native-base';
// import { View,Text } from 'react-native';
import {ToastAndroid} from 'react-native';
import axios from 'axios';

export default class Pertemuan3 extends Component{

	constructor() {
		super();
		this.state = {
			list:[]
		}
		this.readData();
	}

	componentDidMount() {
		// const self = this;
			axios.get(`http://5ad873eddc1baa0014c60b8f.mockapi.io/api/kontak`)
				.then((result)=>{
					this.setState({
						list:result.data
					})
				})
	}


	// getData(){
	// 	axios.get(`http://5ad873eddc1baa0014c60b8f.mockapi.io/api/kontak`)
	// 			.then((result) => {
	// 				this.setState({list: result.data})
	// 			})
	// }
	readData(){
		// const {navigate}= this.props.navigation;
		if (this.state.list) {
			return this.state.list.map((data,i)=>{
				return(
					<Card key={i}>
							<CardItem>
								<Icon name="person" />
								<Body>
									<Text> {data.nama} </Text>
									<Text note>{data.hp}</Text>
								</Body>
								<Right>
									<Icon name="create" />
								</Right>
							</CardItem>
					</Card>
				)
			})
		}
	}



	render(){
		const {navigate} = this.props.navigation;
		return (
				<Container>
					<Header>
						<Body>
							<Title>Kontak</Title>
						</Body>
					</Header>
					<Content>
						{this.readData()}
					</Content>
					<Icon name="trash" />
					<Fab
						onPress={()=>navigate('Tambah')}
						position="bottomRight"
						style={{backgroundColor:'red'}}
					>
					<Icon name="add" />
					</Fab>
				</Container>
			)
	}
}