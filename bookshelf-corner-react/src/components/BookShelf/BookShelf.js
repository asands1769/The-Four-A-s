import { Button } from 'bootstrap';
import React  from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

function BookShelf() {
    



    const { c_id } = useParams();
    const[name,setName]=useState("");
    const[id,setId]=useState("");
    const[validation,valchange]=useState(false);
    const navigate=useNavigate();
    const [records, setRecords] = useState([]);
    const [category, setCategory] = useState("");
    const [bookCategory, setBookCategory] = useState({ id:"", name:"" });
    const [tagType, settagtype] = useState("");
    const [state, setState] = useState();
    const[cid,setCid] = useState();
    const[ccategory,setCcategory]=useState();
    


    const addBookShelf = async () => {
        try {
          const response = await fetch("http://localhost:8080/api/bookshelves/create", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(BookShelf),
          });
      
          if (response.ok) {
            // Display success message using Swal and navigate to '/bookshelves'
            Swal.fire({
              icon: "success",
              title: "Updated successfully.",
            }).then(() => {
              navigate('/bookshelves');
            });
          } else {
            // Display error message if the response is not ok
            Swal.fire({
              icon: "error",
              title: "Update failed.",
              text: "Something went wrong!",
            });
          }
        } catch (err) {
          // Handle any network or fetch error
          console.error(err.message);
          Swal.fire({
            icon: "error",
            title: "Update failed.",
            text: "Something went wrong!",
          });
        }
      };
      

    const handlesubmit=(e)=>{
    e.preventDefault();
    const data={name,bookCategory,tagType};
    console.log(data);
    fetch("http://localhost:8080/bookshelves/"+id,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
      }).then((res)=>{
        //alert('Saved successfully.');
        Swal.fire({icon: "success",
        title: "Updated successfully."});
        navigate('/bookshelves');
      }).catch((err)=>{
        console.log(err.message)
     })
     const newContact = {
        name: data.name,
        bookCategory: {id : data.bookCategory.id, name : data.bookCategory.name},
        tagType: data.tagType
      }
      const newContacts = [...records, newContact];
      //console.log(newContacts);
      //alert(newContacts);
      setRecords(newContacts);

}

const handleChange = (e) => {
       
    var evt = document.getElementById("Categoryname");
    const ctext=evt.options[evt.selectedIndex].text;
   // alert(ctext);
    setCcategory(evt.options[evt.selectedIndex].text);
    

    const selectedValue = e.target.value;
   // alert(selectedValue);
    setCid(selectedValue);
    setBookCategory({id:selectedValue,name:ctext});

    console.log(bookCategory);   
    
  };
const handleTagChange = (e) => {
    const selectedValue = e.target.value;      
   // alert(selectedValue); 
    settagtype(selectedValue);
};
async function fetchProductData() {
     
    let response = await fetch('http://localhost:8080/bookCategories',{method:'GET'});
    let category = await response.json();
    
    console.log(category);
    if(category) { setCategory(category) ;
    
}
   
    }
    //fetchProductData();

    useEffect(() => {
    
      fetchProductData();

      fetch("http://localhost:8080/bookshelves/" + id).then((res) => {
        return res.json();
    }).then((resp) => {
        
        setId(resp.id);
        setName(resp.name);
        
        
       // setCategory(resp.category);
        settagtype(resp.tagType);
        
        
        setId(resp["bookCategory"].id);
        setCcategory(resp["bookCategory"].name);
        
        setBookCategory({id:resp["bookCategory"].id,name:resp["bookCategory"].name});
        
                   
    }).catch((err) => {
        console.log(err.message);
    })
    }, []);
    const deleteBookShelf = async (id) => {
        try {
          const response = await fetch(`http://localhost:8080/bookshelves/${id}`, {
            method: 'DELETE',
          });
      
          if (response.ok) {
            // Display success message using Swal and handle any additional logic
            Swal.fire({
              icon: 'success',
              title: 'Deleted successfully.',
            }).then(() => {
                navigate('/bookshelves');
              });
           
              // Add any logic you want to perform after successful deletion
              // For example, you might want to refresh the list of bookshelves
          } else {
            // Display error message if the response is not ok
            Swal.fire({
              icon: 'error',
              title: 'Deletion failed.',
              text: 'Something went wrong!',
            });
          }
        } catch (err) {
          // Handle any network or fetch error
          console.error(err.message);
          Swal.fire({
            icon: 'error',
            title: 'Deletion failed.',
            text: 'Something went wrong!',
          });
        }
      };
    
    

      return (
        <div>
          <div className="row">
            <div className="d-flex w-100 vh-50 justify-content-center aligns-item-center">
              <div className='w-50 border text-white p-5'>
                <form className="container" onSubmit={handlesubmit}>
      
                  <div className="card" style={{"textAlign": "left"}}>
                    <div className="card-title">
                      <h2> BookShelf</h2>
                    </div>
                    <h2>Add/Delete Book</h2>
                        
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Books Category</label>&nbsp;&nbsp;&nbsp;&nbsp;
                        <select className="custom-select" value={cid} id="Categoryname" onChange={handleChange}>
                        <option key="SELECT" value="SELECT">Select</option>
                        <option key="FICTION" value="FICTION">Fiction</option>
                        <option key="NONFICTION" value="NONFICTION">Nonfiction</option>
                              <option key="FOOD" value="FOOD">Food</option>
                              <option key="HORROR" value="HORROR">Horror</option>
                              <option key="SCIENCE" value="SCIENCE">Science</option>
                              <option key="TRAVEL" value="TRAVEL">Travel</option>
                              <option key="ROMANCE" value="ROMANCE">Travel</option>
                              
                          {category && category.map(item => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                          ))}
                        </select>
                        <input type="hidden" value={cid}></input>
                        <input type="hidden" value={ccategory}></input>
                        
                      </div>
                    </div>&nbsp;&nbsp;
      
                    <div className="card-body">
      
                      <div className="row">
      
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>ID</label>
                            <input required value={name} onMouseDown={e => valchange(true)} onChange={e => setName(e.target.value)} className="form-control"></input>
                          </div>
                        </div>
      
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>Name</label>
                            <input required value={name} onMouseDown={e => valchange(true)} onChange={e => setName(e.target.value)} className="form-control"></input>
                            {name.length === 0 && validation && <span className="text-danger">Enter the name</span>}
                          </div>
                        </div>&nbsp;&nbsp;
      
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label>TagType</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <select className="custom-select" value={tagType} id="tagtype" onChange={handleTagChange} >
      
                              <option key="MUSTREAD" value="MUSTREAD">MustRead</option>
                              <option key="TIMELESS" value="TIMELESS">Timeless</option>
                              <option key="AUTHOR" value="AUTHOR">Author</option>
      
                            </select>
                          </div>
                          {/* <button onClick={deleteBookShelf}>Delete BookShelf</button> */}
                        </div>&nbsp;&nbsp;
      
                        <div className="col-lg-12" style={{"textAlign": "center"}}>
                          <div className="form-group">
                            <button className="btn btn-success" type="submit">Save</button>

                            <Link to="/books" className="btn btn-danger">Back</Link>
                          </div>
                        </div>
      
                      </div>
      
                    </div>
      
                  </div>
      
                </form>
              </div>
            </div>
          </div>
        </div>
      );
                          }    
                                                                                                                                                                        
                                                
    export default BookShelf;




//     const BookShelf = () => {
//   const [bookshelves, setBookshelves] = useState([]);
//   const [newBookShelf, setNewBookShelf] = useState({
//     name: '',
//     bookCategory: '',
//     tagType: '',
//   });

//   useEffect(() => {
//     fetchBookshelves();
//   }, []);

//   const fetchBookshelves = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/bookshelves');
//       const data = await response.json();
//       setBookshelves(data);
//     } catch (error) {
//       console.error('Error fetching bookshelves:', error);
//     }
//   };

//   const addBookShelf = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/bookshelves/create', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newBookShelf),
//       });

//       if (response.ok) {
//         fetchBookshelves();
//         setNewBookShelf({
//           name: '',
//           bookCategory: '',
//           tagType: '',
//         });
//       } else {
//         console.error('Error adding bookshelf:', response.status);
//       }
//     } catch (error) {
//       console.error('Error adding bookshelf:', error);
//     }
//   };

//   const deleteBookShelf = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:8080/bookshelves/${id}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         fetchBookshelves();
//       } else {
//         console.error('Error deleting bookshelf:', response.status);
//       }
//     } catch (error) {
//       console.error('Error deleting bookshelf:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>BookShelf</h2>

//       <div>
//         <h3>Add New Bookshelf</h3>
//         <label>Name:</label>
//         <input
//           type="text"
//           value={newBookShelf.name}
//           onChange={(e) => setNewBookShelf({ ...newBookShelf, name: e.target.value })}
//         />
//         <label>Book Category:</label>
//         <input
//           type="text"
//           value={newBookShelf.bookCategory}
//           onChange={(e) => setNewBookShelf({ ...newBookShelf, bookCategory: e.target.value })}
//         />
//         <label>Tag Type:</label>
//         <input
//           type="text"
//           value={newBookShelf.tagType}
//           onChange={(e) => setNewBookShelf({ ...newBookShelf, tagType: e.target.value })}
//         />
//         <button onClick={addBookShelf}>Add Bookshelf</button>
//       </div>

//       <div>
//         <h3>Delete Bookshelves</h3>
//         <ul>
//           {bookshelves.map((bookshelf) => (
//             <li key={bookshelf.id}>
//               {bookshelf.name} - {bookshelf.bookCategory} - {bookshelf.tagType}
//               <button onClick={() => deleteBookShelf(bookshelf.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default BookShelf;
