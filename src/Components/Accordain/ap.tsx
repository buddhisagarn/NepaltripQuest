import Accordion from "./Accordian";
const items = [
  { title: "Section 1", content: "Content for section 1" },
  { title: "Section 2", content: "Content for section 2" },
  { title: "Section 3", content: "Content for section 3" },
];

function App() {
  return (
    <div className="p-5">
      <Accordion items={items} />
    </div>
  );
}

export default App;
