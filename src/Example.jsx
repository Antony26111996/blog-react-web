// import React, { Component } from 'react';

// class Example extends Component {
//   state = {
//     blogs: [],
//     isEditing: false,
//     blogId: ''
//   }

//   componentDidMount() {
//     this.getBlogs();
//   }

//   getBlogs = async () => {
//     const response = await fetch('/api/blogs');
//     const data = await response.json();
//     this.setState({ blogs: data });
//   }

//   addBlog = async (e) => {
//     e.preventDefault();
//     const blog = {
//       title: this.title.value,
//       content: this.content.value
//     };
//      const response = await fetch('/api/Example', {
//       method: 'POST',
//        body: JSON.stringify(blog),
//       headers: {
//         'Content-Type': 'text'
//       }
//     });
//     const data = await response.json();
//      this.getBlogs(data);
//   }

// //   deleteBlog = async (id) => {
// //     const response = await fetch(`/api/blogs/${id}`, {
// //       method: 'DELETE'
// //     });
// //     const data = await response.json();
// //     this.getBlogs(data);
// //   }

// //   editBlog = (id) => {
// //     this.setState({ isEditing: true, blogId: id });
// //   }

// //   updateBlog = async (e) => {
// //     e.preventDefault();
// //     const blog = {
// //       title: this.title.value,
// //       content: this.content.value
// //     };
// //     const response = await fetch(`/api/blogs/${this.state.blogId}`, {
// //       method: 'PUT',
// //       body: JSON.stringify(blog),
// //       headers: {
// //         'Content-Type': 'application/json'
// //       }
// //     });
// //     const data = await response.json();
// //     this.setState({ isEditing: false });
// //     this.getBlogs(data);
// //   }

//   render() {
//     return (
//       <div>
//         {this.state.isEditing ? (
//           <form onSubmit={this.updateBlog}>
//             <input type="text" name="title" ref={(input) => this.title = input} />
//             <input type="text" name="content" ref={(input) => this.content = input} />
//             <button type="submit">Update</button>
//           </form>
//         ) : (
//           <form onSubmit={this.addBlog}>
//             <input type="text" name="title" ref={(input) => this.title = input} />
//             <input type="text" name="content" ref={(input) => this.content = input} />
//             <button type="submit">Add</button>
//           </form>
//         )}
//         {this.state.blogs.map(blog => (
//           <div key={blog._id}>
//             <h3>{blog.title}</h3>
//             <p>{blog.content}</p>
//             <button onClick={() => this.editBlog(blog._id)}>Edit</button>
//             <button onClick={() => this.deleteBlog(blog._id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     )
//   }
// }

// export default Example;








import React, { Component } from 'react';

class Blogs extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
            newBlog: {
                title: '',
                content: ''
            },
            editingBlog: null
        };
    }
    
    componentDidMount() {
        this.fetchBlogs();
    }
    
    fetchBlogs() {
        // TODO: Fetch blogs from an API
    }
    
    handleCreateBlog() {
        // TODO: Add blog to the API
    }
    
    handleEditBlog(blog) {
        this.setState({ editingBlog: blog });
    }
    
    handleUpdateBlog() {
        // TODO: Update the blog in the API
    }
    
    handleDeleteBlog(blog) {
        // TODO: Delete the blog from the API
    }
    
    renderBlogs() {
        return this.state.blogs.map(blog => {
            return (
                <div key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>{blog.content}</p>
                    <button onClick={() => this.handleEditBlog(blog)}>
                        Edit
                    </button>
                    <button onClick={() => this.handleDeleteBlog(blog)}>
                        Delete
                    </button>
                </div>
            );
        });
    }
  
    render() {
        return (
            <div>
                <h2>Blogs</h2>
                {this.renderBlogs()}
                <h2>Add a New Blog</h2>
                <form onSubmit={() => this.handleCreateBlog()}>
                    <input
                        type="text"
                        placeholder="title"
                        value={this.state.newBlog.title}
                        onChange={e => this.setState({
                            newBlog: {
                                ...this.state.newBlog,
                                title: e.target.value
                            }
                        })}
                    />
                    <textarea
                        placeholder="content"
                        value={this.state.newBlog.content}
                        onChange={e => this.setState({
                            newBlog: {
                                ...this.state.newBlog,
                                content: e.target.value
                            }
                        })}
                    />
                    <button type="submit">Create</button>
                </form>
                {this.state.editingBlog && (
                    <form onSubmit={() => this.handleUpdateBlog()}>
                        <input
                            type="text"
                            placeholder="title"
                            value={this.state.editingBlog.title}
                            onChange={e => this.setState({
                                editingBlog: {
                                    ...this.state.editingBlog,
                                    title: e.target.value
                                }
                            })}
                        />
                        <textarea
                            placeholder="content"
                            value={this.state.editingBlog.content}
                            onChange={e => this.setState({
                                editingBlog: {
                                    ...this.state.editingBlog,
                                    content: e.target.value
                                }
                            })}
                        />
                        <button type="submit">Update</button>
                    </form>
                )}
            </div>
        );
    }
}

export default Blogs;