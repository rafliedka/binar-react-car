import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import carImg from '../images/car02.min.jpg'
import userImg from '../images/fi_users.svg'
import transImg from '../images/transmition.svg'
import yearImg from '../images/tahunproduksi.svg'
import '../index.css';

function card({product}) {
  return (
    <div className='card-container'>
        <div className="card mb-4">
          <img src={product.image} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{product.manufacture}</h5>
                <h5><strong>{product.rentPerDay} /hari</strong></h5>
                <p className="card-text">
                  {product.description}
                </p>
                <p className="card-text">
                  <img className="me-2 mb-1" src={userImg} alt = "imgtemplate"></img>{product.capacity}
                </p>
                  
                <p className="card-text">
                  <img className="me-2" src={transImg} alt = "imgtemplate"></img>{product.transmission}
                </p>
                <p className="card-text">
                  <img className="me-2" src={yearImg} alt = "imgtemplate"></img>{product.year}
                </p>
                <a href="#asd" className="btn btn-success btn-lg w-100">Pilih Mobil</a>
              </div>
          </div>
    </div>
  )
}

export default card