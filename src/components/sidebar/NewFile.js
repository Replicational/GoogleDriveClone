import React from 'react'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import '../../styles/NewFile.css'
import Box from '@mui/material/Box';


import { serverTimestamp } from 'firebase/firestore';
import { storage, db } from '../../firebase'
import { ref, uploadBytes, getDownloadURL, getMetadata } from 'firebase/storage';


import { makeStyles } from 'tss-react/mui';
import Modal from '@mui/material/Modal';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const NewFile = () => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)

  const handleOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  const handleChange = (e) => {
      if (e.target.files[0]) {
          setFile(e.target.files[0])
      }
  }

  const handleUpload = async () => {
    if (!file) return;
  
    setUploading(true);
  
    const fileRef = ref(storage, `files/${file.name}`);
  
    try {
      console.log('Uploading file...');
      const snapshot = await uploadBytes(fileRef, file);
      console.log('Upload complete:', snapshot);
  
      const url = await getDownloadURL(fileRef);
      console.log('File URL:', url);
  
      const metadata = await getMetadata(fileRef);
      console.log('Metadata:', metadata);
  
      await db.collection('myFiles').add({
        timestamp: serverTimestamp(),
        caption: file.name,
        fileUrl: url,
        size: metadata.size,
      });
  
      console.log('Document written to Firestore!');
  
      setUploading(false);
      setOpen(false);
      setFile(null);
    } catch (err) {
      console.error("Upload failed:", err);
      setUploading(false);
    }
  };

  return (
      <div className='newFile'>
          <div className="newFile__container" onClick={handleOpen}>
              <AddIcon fontSize='large' />
              <p>New</p>
          </div>

          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
          >
              <Box sx={modalStyle}>
                  <p>Select files you want to upload!</p>
                  {
                      uploading ? (
                          <p>Uploading...</p>
                      ) : (
                              <>
                                  <input type="file" onChange={handleChange} />
                                  <button onClick={handleUpload}>Upload</button>
                              </>
                          )
                  }
              </Box>
          </Modal>
      </div>
  )
}
export default NewFile
