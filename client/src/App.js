
// import React, {useState, useEffect} from 'react'
// import Navbar from './components/NavBar';
// import BookList from './components/BookList';
// import Form from './components/Form.jsx';
// import './index.css';

// function App() {
//   const [book, setBook] = useState( {
//       title: '',
//       author: '',
//       edition: 0
//   })

//   const [books, setBooks] = useState([]);

//   const [listUpdate, setListUpdated] = useState(false);

//   useEffect( () => {
//     const getBooks = () => {
//       fetch('http://localhost:9000/api')
//         .then(res => res.json())
//         .then(res => setBooks(res)) 
//     }
//     getBooks()
//     setListUpdated(false)
//   }, [listUpdate]);
  
//   console.log("ESTO TIENE EL LISTUPDATE: ", books);

//   return ( 
//       <>
//         <Navbar/>
//         <div>
//           <div>           
//             <div>
//                 <div>  
//                   <h2 className="text-center mt-11 mb-11">Book List</h2>
//                 </div>   
//                 <BookList book={book} setBook={setBook} books={books} setListUpdated={setListUpdated}/>
//             </div>
//             <div>
//                 <div>  
//                     <h2 className="text-center mt-11 mb-11">Book Form</h2>
//                 </div>             
//                  <Form book={book} setBook={setBook}/>
//             </div>         
//           </div>
//         </div>     
//       </>
//   );
// }

// export default App;

//***************SEGUNDO CODIGO****************

import React, { Fragment, useState, useEffect } from 'react'
import Navbar from './components/NavBar'
import BookList from './components/BookList'

function App() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    const getBooks= () => {
      fetch('http://localhost:9000/api')
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(error => console.error('Error fetching data:', error));
    }
    getBooks()
  }, [])
  
  return(
    <Fragment>
      <Navbar brand='Library App'/>
      <div className="container">  
          <div className="row">  
             <div className="col-7">
                 <h2 style={{textAlign: 'center'}}>Book List</h2>
                 <BookList />
             </div>
             <div className="col-5">
                 <h2 style={{textAlign: 'center'}}>Book Form</h2>
             </div>    
          </div>  
      </div>   
    </Fragment>
  );
}
export default App;
