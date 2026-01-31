import React from 'react'
import './assets/css/TodoList.css'
import ProfileCard from './components/ProfileCard'
import TodoList from './components/TodoList'

const ProfileTodo = () => {
  return (
     <section className="app-container">
        <ProfileCard />
        <TodoList />
    </section>
  );
};

export default ProfileTodo
