import React, { createContext, useContext, useState } from "react"

type Theme = {
  selectedImages?: any
  setSelectedImages?: any
  handleImageChange?: any
  images: any
  handleFileUpload: any
}
const PostContext = createContext<Theme>({
  images: [],
  handleFileUpload: () => {},
})

export const useGetPost = () => useContext(PostContext)

export default function PostWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const [images, setImages] = useState<any>([])

  const handleFileUpload = (e: any) => {
    for (const file of e.target.files) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        setImages((imgs: any) => [...imgs, reader.result])
      }
      reader.onerror = () => {
        console.log(reader.error)
      }
    }
  }

  const Context: Theme = {
    images,
    handleFileUpload,
    // selectedImages,
    // setSelectedImages,
    // handleImageChange,
  }
  return <PostContext.Provider value={Context}>{children}</PostContext.Provider>
}
// const theme = useGetTheme()
