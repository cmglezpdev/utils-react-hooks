import { useState, useRef } from 'react'

type Element = HTMLTextAreaElement | HTMLDivElement | HTMLParagraphElement | HTMLSpanElement;

export const useClipboard = () => {
	const [copied, setCopied] = useState<boolean>(false)
	const refElement = useRef<Element>(null)

	const copyText = () => {
		if( refElement.current === null )
			throw new Error('Have that assign the refElement property to a HTML Element')
		
		const text = refElement.current.textContent || ''
		navigator.clipboard.writeText(text)
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
		return text
	}
	return { refElement, copied, copyText }
}
