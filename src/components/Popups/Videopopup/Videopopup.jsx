import React from 'react'
import "./Videopopup.scss"

function Videopopup(props) {
  return (
    <div>
     
    <div>
  {/* Button trigger modal */}
  <button type="button" className="btn btn-primary d-none" id='videopopupbutton' data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>
  {/* Modal */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
         <video style={{height:"232px"}} src={props.videolink} controls ></video>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Videopopup