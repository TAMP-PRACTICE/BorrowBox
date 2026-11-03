require('dotenv').config()
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({ 
  cloud_name: 'ea9uzthi', 
  api_key: process.env.CLOUDINARY_API_KEY || 942496834146222, 
  api_secret: process.env.CLOUDINARY_API_SECRET || 'UEAA8kDoLyaYF2IJVUGkgvl6epQ'
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Vyntra-Instagram-inspired-web-application',
    format: async (req, file) => ['JPG', 'JPEG', 'PNG', 'WebP', 'GIF','MP4', 'MOV', 'WebM'],
    resource_type: 'auto'
  },
});

module.exports = {cloudinary,storage};