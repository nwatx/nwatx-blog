export const h1 = ({...rest}) => {
    return <h1 className='text-3xl mt-7 mb-3 font-semibold dark:text-gray-100' {...rest}/>
}

export const h2 = ({...rest}) => {
    return <h2 className='text-2xl mt-7 mb-3 font-semibold dark:text-gray-100' {...rest}/>
}

export const h3 = ({...rest}) => {
    return <h3 className='text-xl mt-7 mb-3 font-semibold dark:text-gray-100' {...rest} />
}

export const p = ({...rest}) => {
    return <p className='dark:text-gray-100 my-3' {...rest} />
}

export const ol = ({...rest}) => {
    return <ol className='my-4 space-y-4 border-l-4 px-4 border-blue-600' {...rest} />
}

export const code = ({children, ...rest}) => {
    // console.log(rest);
    return <code className='font-semibold dark:text-blue-400' {...rest}>`{children}`</code>
}

export const blockquote = ({...rest}) => {
    return <div className="w-full mx-auto rounded-lg p-1 text-gray-800 dark:Text-gray-100 justify-center">
        <div className="w-full mb-10">
            <div className="text-3xl text-gray-500 dark:text-gray-200 text-left leading-tight h-3 font-medium">“</div>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-medium text-center px-5" {...rest}/>
            <div className="text-3xl text-gray-500 dark:text-gray-200 text-right leading-tight h-3 -mt-3 font-medium">”</div>
        </div>
    </div>
}