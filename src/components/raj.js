import React, { useState } from 'react';
import Rite from '../Images/rite.jpg'

const BlogManager = () => {
  const initialBlogState = {
    id: null,
    title: '',
    content: ''
  }

  const [blogs, setBlogs] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(initialBlogState);
  const [editing, setEditing] = useState(false);

  // Add blog
  const addBlog = blog => {
    blog.id = blogs.length + 1
    setBlogs([...blogs, blog])
  }

  // Delete blog
  const deleteBlog = id => {
    setEditing(false)

    setBlogs(blogs.filter(blog => blog.id !== id))
  }

  // Update blog
  const updateBlog = (id, updatedBlog) => {
    setEditing(false)

    setBlogs(blogs.map(blog => (blog.id === id ? updatedBlog : blog)))
  }

  // Edit blog
  const editBlog = id => {
    setEditing(true)

    setCurrentBlog(blogs.find(blog => blog.id === id))
  }

  return (
    <div className="blog-manager">
      {editing ? (
        <div>
          
          <EditBlog
            editing={editing}
            setEditing={setEditing}
            currentBlog={currentBlog}
            updateBlog={updateBlog}
          />
        </div>
      ) : (
        <div>
          
          <AddBlog addBlog={addBlog} />
        </div>
      )}
      <div>
        
        <ViewBlogs blogs={blogs} editBlog={editBlog} deleteBlog={deleteBlog} />
      </div>
    </div>
  );
}

// Add blog
const AddBlog = ({ addBlog }) => {
  const initialFormState = { id: null, title: '', content: '' }
  const [blog, setBlog] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setBlog({ ...blog, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!blog.title || !blog.content) return

        addBlog(blog)
        setBlog(initialFormState)
      }}
    >
      
      <div className='inputcontant'>
      <img src={Rite} className='imageofwrite' alt='img'></img><br></br>
      <input type="text" name="title" className='titleinputplace' placeholder='Set Your Title' value={blog.title} onChange={handleInputChange} /><br></br>
    
      <input type="text" name="content" className='contentinputplace' placeholder='Tell Your openion..' value={blog.content} onChange={handleInputChange} /><br></br>
      <button className='writepublishbtn'>Publish</button>
      </div>
      
    </form>
  )
}

// Edit blog
const EditBlog = ({  setEditing, currentBlog, updateBlog }) => {
  const [blog, setBlog] = useState(currentBlog)

  const handleInputChange = event => {
    const { name, value } = event.target

    setBlog({ ...blog, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        updateBlog(blog.id, blog)
      }}
    >
      <div className='inputcontant'>
        <img src={Rite} className='imageofwrite' alt='img'></img><br></br>
      <input type="text" name="title" className='titleinputplace' placeholder='update Your Title' value={blog.title} onChange={handleInputChange} /><br></br>
      
      <input type="text" name="content" className='contentinputplace' placeholder='update Your Title' value={blog.content} onChange={handleInputChange} />
      <button className='writepublishbtn'>Update blog</button>
      <button onClick={() => setEditing(false)} className="buttona muted-button"  >
        Cancel
      </button>
      </div>
    </form>
  )
}

// View blogs
const ViewBlogs = ({ blogs, editBlog, deleteBlog }) => {
  return (
    <div>
      
        
           {/* <h1>Title</h1><br></br>
          <p>Content</p> 
           <th>Edit</th>
          <th>Delete</th>  */}
        
      
      <div>
        {blogs.map(blog => (
          <div key={blog.id} className='pasteblog'>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

             <button onClick={() => editBlog(blog.id)} className="buttond edit-button">
              <i className="singleicona fas fa-edit"></i>
              </button>

            </div>
            <div>
              <button onClick={() => deleteBlog(blog.id)} className="buttone delete-button">
              <i className="singleiconb fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogManager;
























