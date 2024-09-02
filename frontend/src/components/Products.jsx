import React from 'react';
import { Link } from "react-router-dom";
function Products() {
    return (
        <div className='container text-center'>
            <form className="flex" action="/products/create" method="post">
                <label htmlFor="name">Name</label>
                <input type="text" id='name' placeholder='Enter Product Name' />
                <label htmlFor="brand">Brand</label>
                <input type="text" id='brand' placeholder='Enter Product brand' />
                <label htmlFor="cat">Category</label>
                <input type="text" id='cat' placeholder='Enter Product category' />
                <label htmlFor="Price">Price</label>
                <input type="text" id='Price' placeholder='Enter Product Price' />
                <label htmlFor="desc">Description</label>
                <input type="text" id='desc' placeholder='Enter Product Price' />
                <label htmlFor="image">Image</label>
                <label htmlFor="file-upload" className="custom-file-upload">
                    Select Image
                </label>
                <input id="file-upload" type="file" />
                <div className='btn-group'>
                    <button type="submit">Submit</button>
                    <Link className='link' to={"/"}>Cancel</Link>
                </div>
            </form>
        </div>
    );
}

export default Products;
