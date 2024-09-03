import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";


function Update() {
    const navigate = useNavigate();
    const params = useParams();
    const [initial, setInitial] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/api/products/" + params.id)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error();
            }).then((data) => {
                console.log(data)
                setInitial(data);
            }).catch((err) => {
                alert(`unable to read the product:`)
            })
    }, [])

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const product = Object.fromEntries(formData.entries())

        try {
            const res = await fetch("http://localhost:3001/api/products/" + params.id, {
                method: 'PUT',
                body: product
            });

            const content = await res.json();

            if (res.ok) {
                console.log(content)
                alert("Product Updated successfully")
                navigate("/products")
            } else {
                alert("unable to Update product")
            }

        } catch (error) {
            console.log(error)
            alert("an error has occured")
        }
    }

    return (
        <div className='container text-center'>
            <h2 className='header text-center'>Update the Product</h2>
            {
                initial && <form className="flex" onSubmit={handleSubmit}>
                    <label htmlFor="id">ID</label>
                    <input type="text" readOnly id='id' defaultValue={params.id} />
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' name='name' placeholder='Enter Product Name' defaultValue={initial.data.name} />
                    <label htmlFor="brand">Brand</label>
                    <input type="text" id='brand' name='brand' placeholder='Enter Product brand' defaultValue={initial.data.brand} />
                    <label htmlFor="cat">Category</label>
                    <input type="text" id='cat' name="category" placeholder='Enter Product category' defaultValue={initial.data.category} />
                    <label htmlFor="Price">Price</label>
                    <input type="text" id='Price' name='price' placeholder='Enter Product Price' defaultValue={initial.data.price} />
                    <label htmlFor="desc">Description</label>
                    <input type="text" id='desc' name='description' placeholder='Enter Product Description' defaultValue={initial.data.description} />
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
            }
        </div>
    );
}

export default Update;
