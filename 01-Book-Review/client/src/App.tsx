import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AddReview, Browser, Details, EditReview, FourOhFour, Landing, Profile, ResetPassword, SignIn, SignUp } from './screens';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/browser' element={<Browser />} />
        <Route path='/add-review/:id' element={<AddReview />} />
        <Route path='/edit-review' element={<EditReview />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='*' element={<FourOhFour />} />
      </Routes>
    </Router>
  )
}

export default App
