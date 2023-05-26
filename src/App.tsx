import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListGroup from "./components/ListGroup";

function App() {
  const items = [
    "Pride and Prejudice",
    "A Man called Ove",
    "Palace of Illusions",
    "Pachinko",
  ];

  return (
    <div>
      <Header />
      <ListGroup items={items} heading="My Reading List" />
      <Footer />
    </div>
  );
}

export default App;
