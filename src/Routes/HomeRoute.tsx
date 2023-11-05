import React from 'react'
import { BaseLayerComp } from '../Layouts/BaseLayer/baseLayerWrapper'
import { HomePage } from '../Pages/HomePage/HomePage'




export const HomeRoute = () => {

    return(
        <BaseLayerComp>
            <HomePage />
        </BaseLayerComp>
    )
}


export default HomeRoute