import React from "react"
import Header from "./Components/Header"
import Card from "./Components/Card"
import './App.css'
import data from "./data"

export default function App() {
  const cards = data.map(item => {
    return (
    <Card          
    key = {item.id}
    title = {item.title}
    location = {item.location}
    googleMapsUrl = {item.googleMapsUrl}
    startDate = {item.startDate}
    endDate = {item.endDate}
    description = {item.description}
    imageSrc = {item.imageSrc}
  />)
  })

  return(
    <div>
      <Header />
      <section>
      {cards}
      </section>
    </div>
  )
}

