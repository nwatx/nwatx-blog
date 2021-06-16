import Image from 'next/image'

export default function NextImage({...props}) {
	return (
		// @ts-ignore
		<Image placeholder='blur' layout='responsive' {...props} />
	)
}
