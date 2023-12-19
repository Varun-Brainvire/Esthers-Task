import React, { createContext, useContext, useState } from "react"

type Post_Props = {
  selectedImages?: any
  setSelectedImages?: any
  handleImageChange?: any
  images: any
  handleFileUpload: any
}
const PostContext = createContext<Post_Props>({
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
      reader.onerror = () => {}
    }
  }

  const Context: Post_Props = {
    images,
    handleFileUpload,
    // selectedImages,
    // setSelectedImages,
    // handleImageChange,
  }
  return <PostContext.Provider value={Context}>{children}</PostContext.Provider>
}
// const theme = useGetTheme()
