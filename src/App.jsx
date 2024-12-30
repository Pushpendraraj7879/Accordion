import { useState } from "react";
import Button from "./Components/Button";
import data from "./data";

const App = () => {
  const [isOpen, setIsOpen] = useState([]); 
  const [isMultiple, setIsMultiple] = useState(false);

  const handleToggle = (e) => {
    const id= parseInt(e.target.value)
    if (isMultiple) {
      setIsOpen((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
    } else {
      setIsOpen((prev) => (id === prev ? null : id));   
    }
  };

  const handleMultiple = () => {
    setIsMultiple((prev) => !prev);
    setIsOpen([]); 
  };

  const handleIsOpen = (item) => {
    return isMultiple ? isOpen.includes(item.id) : isOpen === item.id;
  };

  return (
    <div className="flex flex-col gap-10">
      
      <div>
        <Button
          title={isMultiple ? "Select Multiple" : "Select Single"}
          onToggle={handleMultiple}
          id={0}
          isOpen={false}
          content={null}
        />
      </div>

      
      <div className="flex flex-col gap-1">
        {data.length > 0 ? (
          data.map((item) => (
            <Button
              key={item.id}
              content={item.answer}
              title={item.question}
              id={item.id}
              onToggle={handleToggle}
              isOpen={handleIsOpen(item)}
            />
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default App;
