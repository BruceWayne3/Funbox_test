import React from 'react';

import Card from './components/Card';
import './App.css';

function App () {
    return (
        <main className="content">
            <div className="content__body">
                <div className="content__title">Ты сегодня покормил кота?</div>
                <div className="content__row">
                    <Card taste={'duck'}/>
                    <Card taste={'fish'}/>
                    <Card taste={'chicken'}/>	
                </div>
            </div>
        </main>
    )
}

export default App;