import {rerenderEntireTree} from "../render.js";
	
let state = {
	profilePage:{
		postsData:[
			{id : 1, message: 'Fist message', likesCount : 15},
			{id : 2, message: 'Second message', likesCount : 30},
			{id : 3, message: 'Theard message', likesCount : 50},
			{id : 4, message: 'Forth message', likesCount : 0}
		],
		newPostText : 'lalala.com'
	},
	dialogPage:{
		dialogsData:[
			{id : 1, name: 'Andrey'},
			{id : 2, name: 'Sveta'},
			{id : 3, name: 'Ira'},
			{id : 4, name: 'Vika'},
			{id : 5, name: 'Vlad'},
			{id : 6, name: 'Amyr'}
		],	
		messagesData:[
			{id : 1, message: 'Hello everybody'},
			{id : 2, message: 'Your are fantastic!'},
			{id : 3, message: 'Do you wont to know more?"'},
			{id : 4, message: 'Way'},
			{id : 5, message: 'ChikiBom'}
		]
	},
	sidebar:{}
}


export let addPost = () => {
	let newPost = {
		id : 5,
		message : state.profilePage.newPostText,
		likesCount : 100
	};
	state.profilePage.postsData.push(newPost);
	state.profilePage.newPostText='';
	rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
	state.profilePage.newPostText=newText;
	rerenderEntireTree(state);
}

export default state;
	