import React,{useState} from "react";
import { Card,Modal } from "react-bootstrap";
import { Trash2 } from "react-feather";
import { addhistory, deleteVideo } from "../services/allApi";
import { v4 as uuidv4 } from 'uuid';

function Videocard({card, handleDeleteStatus,insideCategory}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = async () => {
      setShow(true);
      const uid = uuidv4()
      const {caption,url} = card
      let cardDateTime  = new Date()
      if(uid!="" && caption!="" && url!="" && cardDateTime!=""){
        const body ={
          id:uid,cardname:caption,url,date:cardDateTime
        }
        const response = await addhistory(body)
        console.log(response);
      }
    }
    //videoremove
    const removeVideo = async (id) =>{
      const response = await deleteVideo(id);
      if(response.status>= 200&& response.status <300){
        handleDeleteStatus(true)
      }
      console.log(response);
    };

    // dragg
    const dragStarted = (e,id)=>{
      console.log("Drag started and source card  id :"+id);
      e.dataTransfer.setData("cardId",id);
    }

  return (

    <>
      <Card onClick={handleShow} style={{ width: "18rem" }}
      draggable
      onDragStart={e=>dragStarted(e,card?.id)}
      >
        <Card.Img
          variant="top"
          src={card?.thumbnail}
        />
        <Card.Body>
          <Card.Title>
            <span>{card?.caption}</span>
            { insideCategory?'': <span onClick={()=>removeVideo(card?.id)} style={{ float: "right" }}>
              <Trash2 color="red" />
            </span>}
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width={"100%"} height={"400px"} src={`${card?.url}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Videocard;
