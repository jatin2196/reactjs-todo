import { useEffect, useState } from "react";
import "./styles.css";
import { v4 as uuidv4 } from "uuid";
import Items from "./components/Items";
import Button from "./components/Button";

const defaultList = [
  { id: 1, name: "todo 1" },
  { id: 2, name: "todo 2" },
  { id: 3, name: "todo 3" },
  { id: 4, name: "todo 4" },
];

export default function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(defaultList);
  const [inEdit, setInEdit] = useState(null);

  useEffect(() => {
    if (!inEdit) return;
    setName(inEdit.name);
  }, [inEdit]);

  const createToDo = () => {
    if (!name) {
      alert("Please! Enter a name.");
      return;
    }
    const tempList = [...list];
    tempList.push({
      id: uuidv4(),
      name: name,
    });
    setList(tempList);
    setName("");
  };
  const saveToDo = () => {
    if (!name) {
      alert("Please! Enter a name.");
      return;
    }
    const tempList = list.map((a) => {
      if (a.id === inEdit.id) {
        return {
          ...a,
          name: name,
        };
      }
      return a;
    });
    setList(tempList);
    onCancel();
  };
  const onEdit = (item) => setInEdit(item);
  const onDelete = (id) => setList(list.filter((a) => a.id !== id));
  const onCancel = () => {
    setName("");
    setInEdit(null);
  };

  return (
    <div className="App">
      <h2>TODO List</h2>
      <div className="todo-container">
        <div className="todo-create">
          <input
            type="text"
            placeholder="Type name here..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            title={!inEdit ? "Create" : "Save"}
            className="primary"
            onClick={!inEdit ? createToDo : saveToDo}
          />
          {inEdit && (
            <Button title="Cancel" className="secondary" onClick={onCancel} />
          )}
        </div>
        <div className="todo-list">
          <Items
            list={list}
            inEdit={inEdit}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      </div>
    </div>
  );
}
