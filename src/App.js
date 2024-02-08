import './App.css';
import HomePageComponent from './components/HomePageComponent';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Add2NumbersComponent from './components/Add2NumbersComponent';
import AskingQuestionsComponent from './components/AskingQuestionsComponent';
import GreaterThanLessThanComponent from './components/GreaterThanLessThanComponent';
import MadLibComponent from './components/MadLibComponent';
import Magic8BallComponent from './components/Magic8BallComponent';
import OddOrEvenComponent from './components/OddOrEvenComponent';
import RestaurantPickerComponent from './components/RestaurantPickerComponent';
import ReverseItNumbersComponent from './components/ReverseItNumbersComponent';
import ReverseItStringComponent from './components/ReverseItStringComponent';
import SayHelloComponent from './components/SayHelloComponent';



function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path = "/" element ={<HomePageComponent/>}/>
      <Route path = "Add2Numbers" element ={<Add2NumbersComponent/>}/>
      <Route path = "AskingQuestions" element ={<AskingQuestionsComponent/>}/>
      <Route path = "GreaterThanLessThan" element ={<GreaterThanLessThanComponent/>}/>
      <Route path = "MadLib" element ={<MadLibComponent/>}/>
      <Route path = "Magic8Ball" element ={<Magic8BallComponent/>}/>
      <Route path = "OddOrEven" element ={<OddOrEvenComponent/>}/>
      <Route path = "RestaurantPicker" element ={<RestaurantPickerComponent/>}/>
      <Route path = "ReverseItNumbers" element ={<ReverseItNumbersComponent/>}/>
      <Route path = "ReverseItString" element ={<ReverseItStringComponent/>}/>
      <Route path = "SayHello" element ={<SayHelloComponent/>}/>
    </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;
