import AllNotes from "./components/AllNotes";
import MyNote from "./components/MyNote";
import Footer from "./components/Footer";
import "./App.css"

function App() {
  return (
    <div className="App">
      <MyNote />
      <AllNotes />
      <Footer/>
    </div>
  )
}

export default App;