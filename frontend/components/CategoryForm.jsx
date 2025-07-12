import React from 'react';
import axios from 'axios';
import { useState, useRef } from 'react';

export default function CategoryForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [imagePublicId, setImagePublicId] = useState('');
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef();
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleImageUpload = async (file) => {
    setLoading(true);
    setUploadProgress(0); // Reset progress on new upload

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await axios.post('http://localhost:5000/api/upload', formData, {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentCompleted);
        },
      });
      setImageUrl(res.data.url);
      setImagePublicId(res.data.public_id);
      return res.data; // Return data for chaining
    } catch (err) {
      console.error('Image upload failed:', err);
      alert('Image upload failed');
      setImageUrl(''); // Clear preview on error
      setImagePublicId('');
      throw err; // Re-throw to be caught by handleFileChange
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setImage(selectedFile); // Set the image state
      // Create a preview immediately
      const previewUrl = URL.createObjectURL(selectedFile);
      setImageUrl(previewUrl);

      try {
        await handleImageUpload(selectedFile); // Pass the selectedFile directly
      } catch (error) {
        // Error already handled in handleImageUpload, just log here if needed
        console.log('File upload process completed with errors.');
      }
    }
  };

  const handleCategorySubmit = async (e) => {
    e.preventDefault();

    if (!imageUrl) {
      alert('Please upload an image first!');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/categories', {
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
      setImagePublicId(''); // Clear public ID
      if (fileInputRef.current) {
        fileInputRef.current.value = ''; // Clear the file input
      }
    } catch (err) {
      console.error('Failed to create category:', err);
      alert('Failed to create category');
    }
  };

  return (
    <form onSubmit={handleCategorySubmit} className="flex flex-col gap-6">
      <div className='text-gray-600 font-semibold text-3xl mt-8 text-left mb-4'>Create Category</div>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Category name"
        required
        className='bg-gray-100/20 border-2 border-gray-400 w-full h-[40px] rounded-xl shadow-sm px-2 outline-none mb-4'
      />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
        className='bg-gray-100/20 border-2 border-gray-400 w-full rounded-xl shadow-sm px-2 outline-none text-gray-600 py-2 mr-10 min-h-[100px] mb-4'
      />

      <div className='my-4 relative'> {/* Added relative to parent for absolute positioning of input */}
        <input
          type="file"
          onChange={handleFileChange}
          ref={fileInputRef}
          id="fileInput"
          className="absolute w-full h-full opacity-0 cursor-pointer"
          accept="image/*"
          disabled={loading}
        />
        <label
          htmlFor="fileInput"
          className={`flex items-center justify-center gap-3 bg-white border-2 border-dashed border-gray-300 hover:border-blue-500 rounded-xl px-6 py-4 transition-all duration-300 cursor-pointer hover:bg-blue-50 group ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 group-hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors">
              {loading ? (
                <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              )}
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
                {loading ? 'Uploading...' : 'Upload Image'}
              </p>
              <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
            </div>
          </div>
        </label>

        {/* Progress bar */}
        {loading && uploadProgress > 0 && ( // Only show progress if loading and progress is more than 0
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        )}
      </div>

      {/* Image preview */}
      {imageUrl && (
        <div className="relative">
          <img src={imageUrl} alt="Preview" className="w-48 h-48 object-cover rounded" />
          {loading && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded">
              <div className="text-white text-sm">Uploading...</div>
            </div>
          )}
        </div>
      )}

      <button type="submit" disabled={!imageUrl || loading} className='button4 bg-red-100'>
        Create Category
      </button>
    </form>
  );
}