import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleClick = (item: string, index: number) => {
    setSelectedIndex(index);
    onSelectItem(item);
  };

  return (
    <>
      <div className="content">
        {items.length === 0 && <p>No item found</p>}
        <div className="flex_row flex-wrap">
          <div className="card m-2 card-width">
            <div className="card-body">
              <h5 className="card-title">{heading}</h5>
              <ul className="list-group">
                {items.map((item, index) => (
                  <li
                    key={item}
                    className={
                      selectedIndex === index
                        ? "list-group-item active"
                        : "list-group-item"
                    }
                    onClick={() => handleClick(item, index)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListGroup;
