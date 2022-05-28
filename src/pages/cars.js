import {React, useState, useEffect} from 'react'
import Navbar from '../component/navbar'
import Header from '../component/header'
import Search from '../component/searchForm'
import ProductCard from "../component/productCard";
import getProductService from "../service/getProduct";
import Card from "../component/card";

function Cars() {
  const [product, setProduct] = useState([])

  const getProduct = async () => {
    const allProduct = await getProductService()
    setProduct(allProduct)
  }

  useEffect(() => {
    getProduct()
  }, []);

  return (
    <div>
        <Navbar />
        <Header />
        <Search />
        {
          product.map((item, index) => <Card key={index} product={item} />)
        }
    </div>
  )
}

export default Cars