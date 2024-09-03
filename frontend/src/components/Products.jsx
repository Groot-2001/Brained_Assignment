import React from 'react';
import { Link, useNavigate } from "react-router-dom";


function Products() {
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const product = Object.fromEntries(formData.entries())

        if (!product.name || !product.brand || !product.category || !product.price || !product.description || !product.img.name) {
            console.log(product)
            alert("please fill all the required field");
            return;
        }

        try {
            const res = await fetch("http://localhost:3001/api/products/create", {
                method: 'POST',
                body: formData
            });

            const content = await res.json();

            if (res.ok) {
                navigate("/products")
            } else {
                alert("unable to create product")
            }

        } catch (error) {
            console.log(error)
            alert("an error has occured")
        }

    }

    return (
        <div className='container text-center'>
            <form className="flex" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' name='name' placeholder='Enter Product Name' />
                <label htmlFor="brand">Brand</label>
                <input type="text" id='brand' name='brand' placeholder='Enter Product brand' />
                <label htmlFor="cat">Category</label>
                <input type="text" id='cat' name="category" placeholder='Enter Product category' />
                <label htmlFor="Price">Price</label>
                <input type="text" id='Price' name='price' placeholder='Enter Product Price' />
                <label htmlFor="desc">Description</label>
                <input type="text" id='desc' name='description' placeholder='Enter Product Price' />
                <label htmlFor="image">Image</label>
                <label htmlFor="file-upload" className="custom-file-upload">
                    Select Image
                </label>
                <input id="file-upload" type="file" name="img" />
                <div className='btn-group'>
                    <button type="submit">Submit</button>
                    <Link className='link' to={"/"}>Cancel</Link>
                </div>
            </form>
        </div>
    );
}

export default Products;
