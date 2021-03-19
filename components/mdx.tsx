export const h1 = ({...rest}) => {
    return <p className='text-4xl' {...rest}/>
}

export const h2 = ({...rest}) => {
    return <p className='text-3xl underline' {...rest}/>
}

export const h3 = ({...rest}) => {
    return <p className='text-md text-gray-500' {...rest} />
}

export const blockquote = ({...rest}) => {
    return <div className="w-full mx-auto rounded-lg p-1 text-gray-800 justify-center">
        <div className="w-full mb-10">
            <div className="text-3xl text-gray-500 text-left leading-tight h-3 font-medium">“</div>
            <p className="text-sm text-gray-600 font-medium text-center px-5" {...rest}/>
            <div className="text-3xl text-gray-500 text-right leading-tight h-3 -mt-3 font-medium">”</div>
        </div>
    </div>
}