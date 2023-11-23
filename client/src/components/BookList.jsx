
//import '../index.css';

// const BookList = ({ book, setBook, books, setListUpdated }) => {

//     const handleDelete = id => {
//         const requestInit = {
//             method: 'DELETE'
//         }
//         fetch('http://localhost:9000/api/' + id, requestInit)
//         .then(res => res.text())
//         .then(res => console.log(res)) 

//         setListUpdated(true)
//     }

//     let { title, author, edition } = book

//     const handleUpdate = id => {
//         edition = parseInt(edition, 10);
//         //data validation
//         if( title === '' || author === '' || edition <= 0 ){
//             alert("Todos los campos son obligatorios")
//             return
//         }
//         const requestInit = {
//             method: 'PUT',
//             headers: {'Content-Type':'application/json'},
//             body: JSON.stringify(book)
//         }
//         fetch('http://localhost:9000/api/' + id, requestInit)
//         .then(res => res.text())
//         .then(res => console.log(res)) 

//         setBook = ({
//             title: '',
//             author: '',
//             edition: 0
//         })

//         setListUpdated(true)
//     }

//     return ( 
//         <>
//          <div className="container mx-auto">   
//             <table className="table-auto">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Title</th>
//                         <th>Author</th>
//                         <th>Edition</th>
//                     </tr>
//                 </thead>
//                 <tbody>             
//                      {books.map(book => (
//                         <tr key={book.id}>
//                             <td>{book.id}</td>
//                             <td>{book.title}</td>
//                             <td>{book.author}</td>
//                             <td>{book.edition}</td>
//                             <td>
//                                 <div>
//                                     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-10" onClick={() => handleDelete(book.id)}>Delete</button>
//                                     <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => handleUpdate(book.id)}>Update</button>
//                                 </div>
//                             </td>
//                         </tr>
//                     )          
//                     )}           
//                 </tbody>
//             </table>
//            </div>
//         </>
//      );
// }
 
// export default BookList;
import React from 'react';

const BookList = ({books}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Edition</th>
                </tr>
            </thead>
            <tbody>             
                {books.map(book => (
                <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.edition}</td>
                        <td>
                            {/* <div>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-10" onClick={() => handleDelete(book.id)}>Delete</button>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={() => handleUpdate(book.id)}>Update</button>
                            </div> */}
                        </td>
                    </tr>
                )          
                )}           
            </tbody>
        </table>
    );
} 

export default BookList;