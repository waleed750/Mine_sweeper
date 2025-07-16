
function ListGroup() {
//   const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
    const items: string[] = [];
    // const tgetMessage = () => {
    //     return items.length == 0 ? <p>No Items Found</p> : null;
    // }
    return (
    <>
        <h1>List Group</h1>
        {/* {tgetMessage()} */}
        {/* {items.length == 0 && <p>No Items Found</p>}
         */}
         {items.length == 0 ? <p>No Items Found</p> : null}
        <ul className="list-group">
          {items.map(item => <li className="list-group-item" key={item}>{item}</li>)}
        </ul>
    </>
  );
}

export default ListGroup;
