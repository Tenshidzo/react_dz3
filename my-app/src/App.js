import React from 'react';
import SearchApp from './components/SearchApp' // Импортируем компонент SearchApp

function App() {
    return (
        <div className="App">
            <SearchApp /> {/* Рендерим основной компонент поиска */}
        </div>
    );
}

export default App;