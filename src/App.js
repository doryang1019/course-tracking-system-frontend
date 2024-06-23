import React from 'react'
import Layout from './components/layout'
import AppRoutes from './routes'
import './App.css'
function App() {
  return (
    <div className="App">
      <Layout>
        <AppRoutes />
      </Layout>
    </div>
  );
}

export default App;
