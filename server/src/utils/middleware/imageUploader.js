import { Restaurant } from '../../models/Restaurant';
import cloudinary from '../../config/cloudinary-config';

async function uploadImage(req, res, next) {
  const image = req.files ? req.files.image : null;
  if (!image) return next();
  const restaurant = await Restaurant.findByPk(req.userId);
  const id = req.body.name ? `${restaurant.id}/${req.body.name}` : `${restaurant.id}`;
  return cloudinary.uploader.upload(image.tempFilePath, { public_id: id }, (err, result) => {
    if (err) res.status(500).json({ message: 'Error uploading image' });
    res.locals.image = result.secure_url;
    return next();
  });
}

export default uploadImage;
