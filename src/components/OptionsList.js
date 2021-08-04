function OptionsList(props) {
  const { list } = props;
  console.log(list);
  return (
    <div className='main__optionslist'>
      {list.length > 0 ? (
        <ul>
          {list.map((item) => (
            <li
              key={list.indexOf(item)}
              className='main__optionslist__optionItem'
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p>You have not added anything yet.</p>
      )}
    </div>
  );
}

export default OptionsList;
