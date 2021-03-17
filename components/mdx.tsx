export const h1 = ({...rest}) => {
    return <p className='text-4xl' {...rest}/>
}

export const h2 = ({...rest}) => {
    return <p className='text-3xl font-semibold' {...rest}/>
}

export const h3 = ({...rest}) => {
    return <p className='text-md font-semibold text-gray-500' {...rest} />
}