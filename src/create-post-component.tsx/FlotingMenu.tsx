import Image from "next/image"
import { useGetPost } from "../create-post-component.tsx/PostContext"
import {
  FlotingMenuContainer,
  Box,
  Input,
  ImageWrapper,
  Label,
  Text,
} from "./FlotingMenu.styles"
import Image_square from "../../public/Images/image-square (1).png"

const FlotingMenu = ({
  label,
  handelChange,
}: {
  label: string
  handelChange?: any
}) => {
  const { images } = useGetPost()
  console.log("images", images)

  return (
    <FlotingMenuContainer>
      <Box>
        <Label htmlFor="imgage_upload">
          <ImageWrapper style={{ display: "flex", justifyContent: "center" }}>
            <Image alt="" src={Image_square}></Image>
          </ImageWrapper>
          <Input
            onChange={handelChange}
            multiple
            name="imgage_upload"
            id="imgage_upload"
            type="file"
          />
          <Text>{label}</Text>
        </Label>
      </Box>
    </FlotingMenuContainer>
  )
}

export default FlotingMenu
