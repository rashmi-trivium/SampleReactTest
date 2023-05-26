import "./App.css";
import Alert from "./components/Alert";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import ListGroup from "./components/ListGroup";

function App() {
  // const items = [
  //   "Pride and Prejudice",
  //   "A Man called Ove",
  //   "Palace of Illusions",
  //   "Pachinko",
  // ];

  return (
    // <div>
    //   <Header />
    //   <ListGroup
    //     items={items}
    //     heading="My Reading List"
    //     onSelectItem={(item) => {
    //       alert(`${item} selected`);
    //     }}
    //   />
    //   <Footer />
    // </div>
    <Alert>
      <i>Hello World</i>
    </Alert>
  );
}

export default App;
