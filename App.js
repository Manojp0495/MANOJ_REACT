import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";


const App = () => {
    return (
        <div className="App">
             <Header />
             <Body />
            <Footer />
        </div>
    );
};

export default App;



const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<App/>);