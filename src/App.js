import SignUp from './SignUp';
import { Container } from 'react-bootstrap'
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 

function App() {
  return (
  <Router>
    <Routes>
      
    </Routes>
    <AuthProvider>
      <Container className="d-flex align-items-center justify-content-center"
      style={{minHeight:"100vh"}}
      >
        <div className='w-100' style={{maxWidth: "400px"}}>
          <SignUp />
        </div>
      </Container>
    </AuthProvider>
  </Router>
  );
}

export default App;
