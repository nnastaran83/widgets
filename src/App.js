import React from "react";
import Accordion from "./components/Accordion"

const items = [
  {
    title: 'What is React?',
    content: 'React is a frontend javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How to useReact?',
    content: 'You use React by creating components'
  }

];

const App = () => {

  return (
    <div>
      <Accordion items= {items}/>
    </div>

  );
}

export default App;