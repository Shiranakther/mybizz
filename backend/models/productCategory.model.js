import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    unique: true, 
    trim: true
  },
  categoryImage: {
    type: String,
    default: ''
  },
    categoryImagePublicID: {
    type: String,
    default: ''
  },
  categoryDescription: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const categoryModel = mongoose.model('Category', categorySchema);
export default categoryModel;
