import cloudinary from '../config/cloudinary.js';
import fs from 'fs/promises';

export const uploadImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'mern_app',
    });

    await fs.unlink(req.file.path); // remove temp file

    res.json({ url: result.secure_url, public_id: result.public_id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
