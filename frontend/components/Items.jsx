import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

export default function Items() {
  // State for product details
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [discountAmount, setDiscountAmount] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState('');
  const [productIntroduction, setProductIntroduction] = useState(''); // Corresponds to productDetails
  const [productDescription, setProductDescription] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState(''); // Assuming sub-category is not directly stored in the product model based on controller
  const [productAvailability, setProductAvailability] = useState(true); // Default to available

  // State for image upload
  const [imageFiles, setImageFiles] = useState([]); // To store File objects
  const [imagePreviews, setImagePreviews] = useState([]); // To store URLs for display
  const [uploadedImageDetails, setUploadedImageDetails] = useState([]); // To store { url, public_id } from successful uploads
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef();

  // State for tags
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');

  // State for dynamic categories (if you plan to fetch them from API)
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(false);

  // Effect to fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      setLoadingCategories(true);
      try {
        // Assuming you have an API endpoint to get categories, e.g., /api/categories
        const res = await axios.get('http://localhost:5000/api/categories');
        setCategories(res.data); // Assuming res.data is an array of category objects { _id, categoryName }
      } catch (error) {
        console.error('Failed to fetch categories:', error);
        alert('Failed to load categories.');
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  // Calculate discounted price whenever productPrice or discountAmount changes
  useEffect(() => {
    const price = parseFloat(productPrice);
    const discount = parseFloat(discountAmount);

    if (!isNaN(price) && price > 0) {
      if (!isNaN(discount) && discount > 0) {
        const calculatedDiscountedPrice = price - discount;
        setDiscountedPrice(Math.max(0, calculatedDiscountedPrice).toFixed(2)); // Ensure it's not negative
      } else {
        setDiscountedPrice(price.toFixed(2)); // If no discount, discounted price is original price
      }
    } else {
      setDiscountedPrice(''); // Clear if product price is invalid
    }
  }, [productPrice, discountAmount]);


  // Handle tags input
  const handleTagKeyDown = (e) => {
    if (e.key === 'Enter' && tagInput.trim() !== '') {
      e.preventDefault();
      const newTag = tagInput.trim();
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setTagInput('');
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, i) => i !== indexToRemove));
  };

  // Handle file input change
  const handleFileChange = async (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length === 0) return;

    setUploading(true);
    setUploadProgress(0);
    const newImagePreviews = [];
    const newImageDetails = [];

    for (const file of selectedFiles) {
      // Create a preview immediately for each selected file
      newImagePreviews.push(URL.createObjectURL(file));
    }
    setImagePreviews(prev => [...prev, ...newImagePreviews]); // Add new previews to existing

    try {
      // Upload each file
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        const formData = new FormData();
        formData.append('image', file);

        const res = await axios.post('http://localhost:5000/api/upload', formData, {
          onUploadProgress: (progressEvent) => {
            // Calculate overall progress for all files being uploaded
            const totalFiles = selectedFiles.length;
            const currentFileProgress = (progressEvent.loaded * 100) / progressEvent.total;
            const overallProgress = ((i * 100) + currentFileProgress) / totalFiles;
            setUploadProgress(Math.round(overallProgress));
          },
        });
        newImageDetails.push({ url: res.data.url, public_id: res.data.public_id });
      }
      setUploadedImageDetails(prev => [...prev, ...newImageDetails]);
      setImageFiles(prev => [...prev, ...selectedFiles]); // Store actual file objects if needed later
      alert('Images uploaded successfully!');
    } catch (err) {
      console.error('Image upload failed:', err);
      alert('One or more image uploads failed.');
      // Clear relevant states on error
      setImagePreviews([]);
      setUploadedImageDetails([]);
      setImageFiles([]);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } finally {
      setUploading(false);
      setUploadProgress(0); // Reset progress after all uploads complete
    }
  };

  // Handle removing an image from preview and uploaded details
  const removeImage = (indexToRemove) => {
    // Ideally, you'd also send a request to your backend to delete the image from storage (e.g., Cloudinary)
    // using uploadedImageDetails[indexToRemove].public_id. This is crucial for cleanup and cost.
    // For this example, we'll just remove it from the local state.
    const imagePublicIdToRemove = uploadedImageDetails[indexToRemove]?.public_id;
    if (imagePublicIdToRemove) {
      // Call backend API to delete image by publicId
      // axios.delete(`http://localhost:5000/api/upload/${imagePublicIdToRemove}`)
      //   .then(res => console.log('Image deleted from cloudinary:', res.data))
      //   .catch(err => console.error('Failed to delete image from cloudinary:', err));
    }

    setImageFiles(imageFiles.filter((_, i) => i !== indexToRemove));
    setImagePreviews(imagePreviews.filter((_, i) => i !== indexToRemove));
    setUploadedImageDetails(uploadedImageDetails.filter((_, i) => i !== indexToRemove));
  };


  // Handle form submission
  const handleProductSubmit = async (e) => {
    e.preventDefault();

    if (uploadedImageDetails.length === 0) {
      alert('Please upload at least one image!');
      return;
    }
    if (!category) {
        alert('Please select a category!');
        return;
    }
    if (uploading) {
        alert('Please wait for images to finish uploading!');
        return;
    }

    try {
      const productData = {
        productName,
        productPrice: parseFloat(productPrice),
        discountedPrice: parseFloat(discountedPrice),
        productIntroduction, // Maps to Product Details
        productDescription,
        productImage: uploadedImageDetails.map(img => img.url), // Send an array of image URLs
        category, // This should be the category ID
        tags,
        productAvailability,
      };

      // The controller expects `productImage` as an array of objects if you're storing public_id too
      // If your backend expects it, adjust productImage:
      // productImage: uploadedImageDetails, // Send array of { url, public_id } objects

      const res = await axios.post('http://localhost:5000/api/products', productData);

      alert('Product created successfully!');
      // Reset form fields
      setProductName('');
      setProductPrice('');
      setDiscountAmount('');
      setDiscountedPrice('');
      setProductIntroduction('');
      setProductDescription('');
      setCategory('');
      setSubCategory('');
      setImageFiles([]);
      setImagePreviews([]);
      setUploadedImageDetails([]);
      setTags([]);
      setTagInput('');
      setProductAvailability(true);
      if (fileInputRef.current) {
        fileInputRef.current.value = ''; // Clear file input
      }

    } catch (err) {
      console.error('Product Creation Error:', err.response ? err.response.data : err.message);
      alert(`Failed to create product: ${err.response?.data?.error || err.message}`);
    }
  };

  return (
    <form onSubmit={handleProductSubmit} className='flex flex-col'>
      <div className='text-gray-600 font-semibold text-3xl mt-8 text-left pl-8 mb-4'>Create Item</div>

      <div className='flex flex-col px-8 py-8 gap-10'>
        <div className='flex flex-row items-center gap-10'>
          <input
            type="text"
            className='bg-gray-100/20 border-2 border-gray-400 w-[350px] h-[40px] rounded-xl shadow-sm px-2 outline-none'
            placeholder='Product Name'
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />

          <select
            name="Product Category"
            id="productCategory"
            className='bg-gray-100/20 border-2 border-gray-400 w-[350px] h-[40px] rounded-xl shadow-sm px-2 outline-none text-gray-600'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            disabled={loadingCategories}
          >
            <option value="" disabled>
              {loadingCategories ? 'Loading Categories...' : 'Select Category'}
            </option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.categoryName}
              </option>
            ))}
          </select>

          {/* Sub-category selection - not directly used in your provided controller */}
          <select
            name="Sub Category"
            id="productSubCategory"
            className='bg-gray-100/20 border-2 border-gray-400 w-[350px] h-[40px] rounded-xl shadow-sm px-2 outline-none text-gray-600'
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
          >
            <option value="" disabled>Sub Category</option>
            <option value="Wedding Cake">Wedding Cake</option>
            <option value="Birthday Cakes">Birthday Cakes</option>
            <option value="Christmas Cake">Christmas Cake</option>
            <option value="Milestone Cakes">Milestone Cakes</option>
          </select>

        </div>
        <div className='flex flex-row items-center gap-10'>
          <input
            type='number'
            min={0}
            placeholder='Product Price'
            className='bg-gray-100/20 border-2 border-gray-400 w-[350px] h-[40px] rounded-xl shadow-sm px-2 outline-none text-gray-600 no-spinner'
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
          <input
            type='number'
            min={0}
            placeholder='Discount Amount'
            className='bg-gray-100/20 border-2 border-gray-400 w-[350px] h-[40px] rounded-xl shadow-sm px-2 outline-none text-gray-600 no-spinner'
            value={discountAmount}
            onChange={(e) => setDiscountAmount(e.target.value)}
          />
          <input
            type='number'
            min={0}
            placeholder='Discounted Price'
            className='bg-gray-100/20 border-2 border-gray-400 w-[350px] h-[40px] rounded-xl shadow-sm px-2 outline-none text-gray-600 no-spinner'
            value={discountedPrice}
            readOnly // Make this read-only as it's calculated
          />
        </div>

        <div className='mr-10'>
          <input
            type="text"
            className='bg-gray-100/20 border-2 border-gray-400 w-full h-[40px] rounded-xl shadow-sm px-2 outline-none'
            placeholder='Product Introduction (e.g., short details)'
            value={productIntroduction}
            onChange={(e) => setProductIntroduction(e.target.value)}
          />
        </div>

        <textarea
          className='bg-gray-100/20 border-2 border-gray-400 rounded-xl shadow-sm px-2 outline-none text-gray-600 py-2 mr-10 min-h-[100px]'
          placeholder='Product Description'
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        ></textarea>

        <div className='mr-10 relative'>
          <input
            type="file"
            id="fileInput"
            className="absolute w-full h-full opacity-0 cursor-pointer"
            accept="image/*"
            multiple // Allow multiple file selection
            onChange={handleFileChange}
            ref={fileInputRef}
            disabled={uploading}
          />
          <label
            htmlFor="fileInput"
            className={`flex items-center justify-center gap-3 bg-white border-2 border-dashed border-gray-300 hover:border-blue-500 rounded-xl px-6 py-4 transition-all duration-300 cursor-pointer hover:bg-blue-50 group ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <div className="flex items-center gap-3 ">
              <div className="w-8 h-8 bg-blue-100 group-hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors">
                {uploading ? (
                  <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                )}
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
                  {uploading ? `Uploading... (${uploadProgress}%)` : 'Upload Product Images'}
                </p>
                <p className="text-xs text-gray-500">PNG, JPG up to 10MB each</p>
              </div>
            </div>
          </label>
        </div>

        {/* Image Previews */}
        {imagePreviews.length > 0 && (
          <div className="flex flex-wrap gap-4 mr-10">
            {imagePreviews.map((previewUrl, index) => (
              <div key={index} className="relative w-32 h-32">
                <img src={previewUrl} alt={`Product Preview ${index}`} className="w-full h-full object-cover rounded" />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold hover:bg-red-700"
                >
                  &times;
                </button>
                {uploading && uploadedImageDetails.length <= index && ( // Show overlay if still uploading this specific image
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded">
                        <div className="text-white text-sm">Uploading...</div>
                    </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mr-10">
          {/* Tags Display */}
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex items-center gap-2"
              >
                <span>{tag}</span>
                <button
                  type="button" // Important to prevent form submission
                  onClick={() => removeTag(index)}
                  className="text-blue-500 hover:text-red-500 font-bold"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>

          {/* Input Field */}
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagKeyDown}
            placeholder="Add Tags (Press Enter)"
            className="bg-gray-100/20 border-2 border-gray-400 w-full h-[40px] rounded-xl shadow-sm px-2 outline-none"
          />
        </div>

        <select
          name="Availability"
          id="Availability"
          className='bg-gray-100/20 border-2 border-gray-400 w-[350px] h-[40px] rounded-xl shadow-sm px-2 outline-none text-gray-600'
          value={productAvailability}
          onChange={(e) => setProductAvailability(e.target.value === 'true')} // Convert string to boolean
        >
          <option value={true}>Available</option>
          <option value={false}>Not Available</option>
        </select>

        <button
          type="submit"
          className='button4 bg-red-100'
          disabled={uploading || uploadedImageDetails.length === 0 || !category} // Disable if uploading or no images or no category
        >
          Add Product
        </button>
      </div>
    </form>
  );
}