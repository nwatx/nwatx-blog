import Image from 'next/image'

export default function NextImage({...props}) {
	return (
		// @ts-ignore
		<Image layout='intrinsic' {...props} />
	)
}
