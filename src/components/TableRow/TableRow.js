import { useState } from "react";
import "./TableRow.css";
export const TableRow = ({ name, age, added }) => {
  const [like, setLike] = useState(false);
  const [addedRow, setAddedRow] = useState({ name: name, age: age });

  return (
    <tr className="tableRow">
      {added ? (
        <>
          <td className="tableCell">
            <input value={addedRow.name} onChange={(e) => setAddedRow({...addedRow, name: e.target.value})}/>
          </td>
          <td>
            <input value={addedRow.age} onChange={(e) => setAddedRow({...addedRow, age: e.target.value})} />
          </td>
        </>
      ) : (
        <>
          <td className="tableCell">{name}</td>
          <td className="tableCell2">{age}</td>
        </>
      )}
      <td className="tableCell2" onClick={() => setLike(!like)}>{like ? "🤍" : ""}</td>
    </tr>
  );
};