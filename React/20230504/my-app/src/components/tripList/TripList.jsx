import "./TripList.css";

function List() {
  let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
  ];

  return (
    <div>
      <ul className="list-area">
        {list.map((item) => (
          <li key={item.no} className={item.visited ? "visited" : null}>
            {item.area}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
