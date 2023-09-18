import React from 'react'
import LandingPage from "../components/LandingPage"
import MostPopularList from "../components/MostPopularList"
import Phrase from "../components/Phrase"
import Comments from "../components/Comments"
import Discounts from "../components/Discounts"

const Index = () => {
  return (
    <>
    <LandingPage />
    <Phrase />
    <Discounts />
    <MostPopularList />
    <Comments />
    </>
  )
}

export default Index