import React from 'react';




type Props = {
    children: React.ReactNode;
}


export const BaseLayerComp: React.FunctionComponent<Props>= ({children}) => {


    return(
        <div className="base-layer-container">
            {children}
        </div>
    )
}