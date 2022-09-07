import React, { useRef, RefObject } from "react";
import useCopyToClipboard from "../lib/hooks/useCopyToClipboard";

export default function customHooks() {
	const { handleCopy, isCopied } = useCopyToClipboard();
	const codeRef = useRef<HTMLPreElement>( null )


	function focus() {
		handleCopy( codeRef?.current?.textContent )
	}

	return (
		<div className="container grid gap-4 mx-auto mt-12">
			customHooks
			<div className="relative p-4 border">
				<button
					onClick={() => focus()}
					className="absolute top-0 right-0 px-3 py-1 text-xs uppercase bg-gray-300"
				>
					{isCopied ? 'Copied' : 'Copy'}
				</button>
				<pre ref={codeRef}>npm install</pre>
			</div>
		</div>
	);
}
