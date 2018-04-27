import { StackNavigator } from 'react-navigation';
import Home from './components/Pertemuan3';
import Tambah from './components/Pertemuan5';

export const Route = StackNavigator({
	Home:{screen:Home},
	Tambah:{screen:Tambah},
},

{headerMode:'none'})