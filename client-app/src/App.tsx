import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List, ListItem } from 'semantic-ui-react';

function App() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/Activities').then((response) => {
            setActivities(response.data);
            console.log(response);
        });
    }, []);

    return (
        <div className='App'>
            <Header as='h2' icon='users' content='Reactivities'></Header>
            <List>
                {activities.map((activity: any) => {
                    return (
                        <List.Item key={activity.id}>
                            {activity.title}
                        </List.Item>
                    );
                })}
            </List>
        </div>
    );
}

export default App;
