import React from 'react'

const Form = ( ) => {

    // const handleChange = e => {
    //     setBook({
    //         ...book,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // let { title, author, edition } = book;

    // const handleSubmit = () => {
    //     edition = parseInt(edition, 10);
    //     //data validation
    //     if( title === '' || author === '' || edition <= 0 ){
    //         alert("The foelds must to be completed");
    //         return
    //     }
    //     //consulta
    //     const requestInit = {
    //         method: 'POST',
    //         headers: {'Content-Type':'application/json'},
    //         body: JSON.stringify(book)
    //     }

    //     fetch('http://localhost:9000/api', requestInit)
    //     .then(res => res.text())
    //     .then(res => console.log(res)) 

    //     //reiniciando state del libro
    //     setBook = ({
    //         title: '',
    //         author: '',
    //         edition: 0
    //     })
    // }

  return ( 
    <> 
      <div className="container mx-auto">  
        {/* <form onSubmit={handleSubmit}> */}
        <form>
            <div className="sm:col-span-4">
                <label htmlFor='title' className="block text-sm font-medium leading-6 text-gray-900">Title</label>
                {/* <input value={title} name="titulo" onChange={handleChange} type='text' id='title'/> */}
                <input value='title' name="titulo" type='text' id='title' className='form-control'/>
            </div>
            <div className="sm:col-span-4">
                <label htmlFor='author' className="block text-sm font-medium leading-6 text-gray-900">Author</label>
                {/* <input value={author} name="autor" onChange={handleChange} type='text' id='author'/> */}
                <input value='author' name="author" type='text' id='author' className='form-control'/>
            </div>
            <div className="sm:col-span-4">
                <label htmlFor='edition' className="block text-sm font-medium leading-6 text-gray-900">Edition</label>
                {/* {/* <input value={edition} name="edicion" onChange={handleChange} type <input value='edition' name="edition" type='text' id='edition'/> */}
                <input value='edition' name="edition" type='text' id='edition' className='form-control'/>
            </div>
            <button type="submit">Add new book</button>
        </form>   
        </div>
     </>
  );
}

export default Form;