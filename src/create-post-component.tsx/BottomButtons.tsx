import React from "react"
import {
  Conatiner,
  Button,
  Text,
  Box1,
  Publish_Button_Text,
  Publish_Buttons,
} from "./BottomButton.styles"

export default function BottomButtons() {
  return (
    <Conatiner>
      <Box1>
        <Button>
          <Text>My drafts</Text>
        </Button>
      </Box1>

      <Box1>
        <Button>
          <Text>Save as draft</Text>
        </Button>

        <Publish_Buttons>
          <Publish_Button_Text>Publish</Publish_Button_Text>
        </Publish_Buttons>
      </Box1>
    </Conatiner>
  )
}

function Mobile_BottomButtons() {
  return (
    <Conatiner>
      <Box1>
        <Button>
          <Text>My drafts</Text>
        </Button>
      </Box1>
      <Publish_Buttons>
        <Publish_Button_Text>Publish</Publish_Button_Text>
      </Publish_Buttons>
      {/* <Box1>
        <Button>
          <Text>Save as draft</Text>
        </Button>

        <Publish_Buttons>
          <Publish_Button_Text>Publish</Publish_Button_Text>
        </Publish_Buttons>
      </Box1> */}
    </Conatiner>
  )
}
export { Mobile_BottomButtons }
