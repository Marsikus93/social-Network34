import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType, ProfilePageType, updateNewPostText} from "../redux/state";
type ProfilePropsType={
    profilePage: ProfilePageType
    addPost: () => void,
    updateNewPostText:(text:string)=>void


}
export const Profile:React.FC<ProfilePropsType> = (props ) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText }
                     newPostText={props.profilePage.newPostText}/>
        </div>
    )
}