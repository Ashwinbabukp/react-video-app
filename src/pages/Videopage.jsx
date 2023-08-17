import React,{useState} from "react";
import { Col, Row } from "react-bootstrap";
import Add from "../components/Add";
import View from "../components/View";
import Category from "../components/Category";
import { Link } from "react-router-dom"



function Videopage() {
  const [serverRes,setServerRes] = useState({})
  const handleRes = (res)=>{
    setServerRes(res)
  }
  return (
    <>
      <h1 className="text-info ms-5 mb-5">All videos</h1>
      <Link className="d-flex justify-content-end me-5"  to={'/watch-history'}  >Watch History</Link>
      <div className="container-fluid">
        <Row className="mt-5">
          {/* Add */}
          <Col lg={1}>
          <Add handleRes={handleRes}/>
          </Col>
          {/* View */}
          <Col lg={7} className="ms-5">
            <View serverRes={serverRes} />
          </Col>
          {/* Category */}
          <Col>
            <Category />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Videopage;
