import React from 'react'

interface ErrorProps{
    error : string
}

export const ErrorMessage = ({error} : ErrorProps)=>{
    return(
        <p className="text-center text-red-600">{error}</p>
    )
}