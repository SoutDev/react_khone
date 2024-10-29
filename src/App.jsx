import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'

function App() {
  return(
   <>
   <Header/>    
   <Food/>
   <Footer/>  
   <Card/>
    <Button/>
    <Student name="khone" age={21} isStudent={true}/>
    <Student name="Patrict" age={42} isStudent={false}/>
    <Student name="souk" age={32} isStudent={false}/>
    <Student name="Sundy" age={50} isStudent={true}/>
    <Student name="larnoy"/>

   </>
  );
}
export default App
