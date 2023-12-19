import Image from "next/image"
import { useGetPost } from "../create-post-component.tsx/PostContext"
import {
  FlotingMenuContainer,
  Box,
  Input,
  ImageWrapper,
  Label,
  Text,
} from "../create-post-component.tsx/FlotingMenu.styles"
import Image_square from "../../public/Images/image-square (1).png"

const FlotingMenu = ({
  label,
  handelChange,
}: {
  label: string
  handelChange?: any
}) => {
  const { images } = useGetPost()

  return (
    <FlotingMenuContainer>
      <Box>
        <Label htmlFor="image_upload">
          <ImageWrapper style={{ display: "flex", justifyContent: "center" }}>
            <Image alt="" src={Image_square}></Image>
          </ImageWrapper>
          <Input
            onChange={handelChange}
            multiple
            name="image_upload"
            id="image_upload"
            type="file"
          />
          <Text>{label}</Text>
        </Label>
      </Box>
    </FlotingMenuContainer>
  )
}

export default FlotingMenu
