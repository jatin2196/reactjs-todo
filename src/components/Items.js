import Button from "./Button";

export default function Items({ list, inEdit, onEdit, onDelete }) {
  return (
    <ul>
      {!list.length && (
        <li>
          <p>No items in list. Create now.</p>
        </li>
      )}
      {list.map((a, i) => {
        return (
          <li key={a.id} className={inEdit && a.id === inEdit.id ? "edit" : ""}>
            <p>{`${i + 1}. ${a.name}`}</p>
            <div className="actions">
              <Button
                title="edit"
                disabled={inEdit && a.id === inEdit.id}
                className="edit primary"
                onClick={() => onEdit(a)}
              />
              <Button
                title="delete"
                disabled={inEdit && a.id === inEdit.id}
                className="button delete secondary"
                onClick={() => onDelete(a.id)}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
