import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import styles from "./DropZone.module.scss"

const DropZone = () => {
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone()

	const files = acceptedFiles.map((file) => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	))

	return (
		<section className="container">
			<div
				{...getRootProps({
					className: styles.dropzone,
				})}
			>
				<input {...getInputProps()} />
				<p>Drag 'n' drop some files here, or click to select files</p>
			</div>
			<aside>
				<h4>Files</h4>
				<ul>{files}</ul>
			</aside>
		</section>
	)
}

export default DropZone
