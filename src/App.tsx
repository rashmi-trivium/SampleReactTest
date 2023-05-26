import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
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
  const [alertVisible, setAlertVisibility] = useState(false);

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
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <i>Button clicked!</i>
        </Alert>
      )}

      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        My button
      </Button>
    </>
  );
}

export default App;
