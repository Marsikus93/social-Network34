import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType, updateNewPostText} from './components/redux/state';

export let rerenderEntireTree = (state: RootStateType)=>{
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}
