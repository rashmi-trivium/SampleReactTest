import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup(props: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div className="content">
        {props.items.length === 0 && <p>No item found</p>}
        <div className="flex_row flex-wrap">
          <div className="card m-2 card-width">
            <div className="card-body">
              <h5 className="card-title">{props.heading}</h5>
              <ul className="list-group">
                {props.items.map((item, index) => (
                  <li
                    key={item}
                    className={
                      selectedIndex === index
                        ? "list-group-item active"
                        : "list-group-item"
                    }
                    onClick={() => handleClick(index)}
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
