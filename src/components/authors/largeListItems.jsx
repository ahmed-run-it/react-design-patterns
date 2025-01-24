export function LageListItems({author}){
  const {name,age,country,books}=author;
  
  return <>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
       <p>Books</p>
       <ul>{
          books.map(book=><li key={name}>{
            book
          }</li>)
        }</ul>
  
        </>
  
  }