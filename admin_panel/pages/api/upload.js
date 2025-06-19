import multiparty from 'multiparty';
import cloudinary from 'cloudinary';
import { mongooseConnect } from 'mongoose';
import { isAdminRequest } from './auth/[...nextauth]';
// Configure Cloudinary (using environment variables for security)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handle(req, res) {
   
  await isAdminRequest(req,res);
  const form = new multiparty.Form();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to parse form' });
    }

    // Check the number of files uploaded
    const fileCount = Object.values(files).reduce((acc, fileArray) => acc + fileArray.length, 0);
    console.log('File count:', fileCount);

    if (fileCount === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }
    try {
     
      
      const filesArray = Array.isArray(files.file) ? files.file : [files.file];
      const uploadPromises = filesArray.map(file =>
        cloudinary.v2.uploader.upload(file.path, {
          folder: 'your_folder_name',
          resource_type: 'image',
          transformation: [{ width: 1024, crop: "limit" }],
        })
      );
      
      const uploadResponses = await Promise.all(uploadPromises);
      const uploadedFiles = uploadResponses.map(response => response.secure_url);
      
      // Send back Cloudinary URLs (for each uploaded file)
      res.json({
        message: 'Files uploaded successfully',
        urls: uploadedFiles, // Array of URLs for each uploaded file
      });

    } catch (uploadErr) {
      console.error('Error uploading to Cloudinary:', uploadErr);
      return res.status(500).json({ error: 'Failed to upload to Cloudinary' });
    }

    
  });
}

export const config = {
  api: { bodyParser: false }, // Disabling bodyParser to handle file uploads via multiparty
};
