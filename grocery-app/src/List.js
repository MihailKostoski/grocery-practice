import React from "react";
import { FaEdit, FaTrashRestore } from "react-icons/fa";
const List = ({ items }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="gorcery-item">
            <p className="title">{title}</p>
            <button type="button" className="eidt-btn">
              <FaEdit />
            </button>
            <button type="button" className="delete-btn">
              <FaTrashRestore />
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default List;
