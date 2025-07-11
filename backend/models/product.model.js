import mongoose from 'mongoose';

const productSchema =  new mongoose.Schema({
     productName:{
            type:String
        },
        productPrice:{
            type:Number
        },
        discountedPrice:{
            type:Number,
            default: 0
        },
        productIntroduction:{
            type:String
        },
        productDescription:{
            type:String
        },
        productImage:{
            type:[String],
            default: []
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        },
        stock:{
            type:Number,
            default: 0
        },
        productColor:{
            type:[String],
            default: []
        },
        productSize:{
            type:[String],
            default: []
        },
        productBrand:{
            type:String
        },
        tags:{
            type:[String],
            default: []
        },
        productRating:{
            type:Number,
            default: 0
        },
        productReviews:{
            type:[String],
            default: []
        },
        productAvailability:{
            type:Boolean,
            default: false
        },
        productCreatedAt:{
            type:Date,
            default: Date.now
        },
},{ timestamps: true});
    
    const productModel = mongoose.model('Product', productSchema);
    export default productModel;
   
