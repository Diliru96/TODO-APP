import React, { FC } from "react";

interface Props {
    // any props that come into the component
}

const Section: FC<Props> =({children})=>{
    return(
        <div style={{margin:"50px"}}>
            {children}
        </div>
    )
}

export default Section;