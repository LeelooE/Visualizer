import React from 'react';
import List from './List';
import Form from './Form';

const Content = (props) => (
    <div className='content'>
    <h1>Articles</h1>
    <List />
    <h1>Add a new article:</h1>
    <Form />
    </div>
)

export default Content;