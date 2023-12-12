import React from "react"
import { Container, Row, Col } from "../components/index"

export default function test() {
  return (
    <Container fluid>
      <Row>
        <Col col={6} xs={12} xl={6}>
          col1
        </Col>
        <Col col={6} xs={12} sm={4} md={4}>
          col2
        </Col>
      </Row>
    </Container>
  )
}
