import React from 'react'
import "./Comparisontable.scss"

function Comparisontable( props ) {
  return (
    <div className='comparisontable' >
        <h6> <b> {props.heading} </b></h6>

        <div className="comptable">
        <table class="table table-striped table-hover">
  <thead style={{background: "#f1f1f1"}} >
    <tr>
      {props.columns.map((e)=> 
      <th scope="col">{e}</th>
      )}
    </tr>
  </thead>

  <tbody>

    {
      props.data.map((row)=>
      <tr>
      {row.map((cell_value)=>
      <td>{cell_value}</td>
      )}
    </tr>
    )}
    
  </tbody>
</table>

        </div>
    </div>
  )
}

export default Comparisontable