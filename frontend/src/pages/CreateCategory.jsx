import React from 'react'
import axios from 'axios'
import { useState,useRef } from 'react';

export default function CreateCategory() {
        const [name, setName] = useState('');
        const [description, setDescription] = useState('');
        const [image, setImage] = useState(null);
        const [imageUrl, setImageUrl] = useState('');
        const [imagePublicId, setImagePublicId] = useState('');
        const [loading, setLoading] = useState(false);
        const fileInputRef = useRef();


        const handleImageUpload = async () => {
            setLoading(true);
            const formData = new FormData();
            formData.append('image', image);

            try {
            const res = await axios.post('http://localhost:5000/api/upload', formData);
            setImageUrl(res.data.url);
            setImagePublicId(res.data.public_id);
            } catch (err) {
            alert('Image upload failed');
            } finally {
            setLoading(false);
            }
        };

        const handleCategorySubmit = async (e) => {
            e.preventDefault();

            if (!imageUrl) {
            alert('Please upload an image first!');
            return;
            }

            try {
            const res = await axios.post('http://localhost:5000/api/categories', {
                categoryName: name,
                categoryDescription: description,
                categoryImage: imageUrl,
                categoryImagePublicId: imagePublicId,
            });

            alert('Category created!');
            setName('');
            setDescription('');
            setImage(null);
            setImageUrl('');
            fileInputRef.current.value = '';
            } catch (err) {
            alert('Failed to create category');
            }
        };

        return (
            <form onSubmit={handleCategorySubmit} className="flex flex-col gap-4 w-96">
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Category name" required />
            <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />

            <input type="file" onChange={e => setImage(e.target.files[0])} ref={fileInputRef} />
            <button type="button" onClick={handleImageUpload} disabled={loading || !image}>
                {loading ? 'Uploading...' : 'Upload Image'}
            </button>

            {imageUrl && <img src={imageUrl} alt="Preview" className="w-48 h-48 object-cover rounded" />}

            <button type="submit" disabled={!imageUrl} className='button2'>
                Create Category
            </button>
            </form>
        );
        }
