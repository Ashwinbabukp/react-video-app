import React, { useState } from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap';
import { PlusCircle } from 'react-feather'
import { addVideo } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({handleRes}) {

    const [uploadData,setUploadData] = useState({
      id:"",caption:"",thumbnail:"",url:""
    })
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const setInput = (e)=>{
      const {name,value} = e.target
      setUploadData({...uploadData,[name]:value})
      console.log(uploadData);

    }

    const extractUrl = (e)=>{
      let YoutubeUrl = e.target.value
      if(YoutubeUrl.includes("v=")){
        let index = YoutubeUrl.indexOf("v=")
        let videourl = YoutubeUrl.substring(index+2,index+13)
        let videoData = uploadData
        videoData.url = `https://www.youtube.com/embed/${videourl}`
        setUploadData(videoData)
      }
      console.log(uploadData);
    }

    const handleAdd = async ()=>{
      const {id,caption,thumbnail,url} = uploadData
      if(!id ||!caption || !thumbnail ||!url){
        toast.warning("please fill the form completely")
      }else{
        //make api call
        const response = await addVideo(uploadData)
        if(response.status>=200&& response.status<300){
          handleRes(response.data);
          toast.success("New video uploaded succesflly...")
          setShow(false)
        } else{
          toast.warning("provide a unique id!!")
        }
      }
    }


  return (
    <>
        <div className='btn' onClick={handleShow} >
            <PlusCircle  color='grey' size={100} />
        </div>
        
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
        <FloatingLabel className='mb-3' controlId="floatingid" label="Video Id">
          <Form.Control type="text" placeholder="Video Id"  name='id' onChange={setInput} />
        </FloatingLabel>
        <FloatingLabel className='mb-3' controlId="floatingcaption" label="Video Caption">
          <Form.Control type="text" placeholder="Video Caption" name='caption' onChange={setInput}/>
        </FloatingLabel>
        <FloatingLabel className='mb-3' controlId="floatingcover" label="Video Cover Image Url">
          <Form.Control type="text" placeholder="Video Cover Image Url" name='thumbnail' onChange={setInput}/>
        </FloatingLabel>
        <FloatingLabel className='mb-3' controlId="floatingvideo" label="YouTube Video Link">
          <Form.Control type="text" placeholder="YouTube Video Link" name='url'  onChange={extractUrl}/>
        </FloatingLabel>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"

       />
    </>
    
  )
}

export default Add