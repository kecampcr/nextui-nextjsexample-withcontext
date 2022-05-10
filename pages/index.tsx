import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Loading } from "@nextui-org/react";
import UserView from '../components/UserView'
import { IUser } from '../interfaces/IUser'
import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";



export default function NextPage() {
  const {user, setUser} = useContext(UserContext);

  const newUser:IUser ={
    nombre: "Kenneth",
    apellidos:"Campos",
    cedula:205530838,
    rol:"Administrator"
  }
  return (
    <>
    <Container>
    <h1>This is index page component</h1>
      <p>Using context and showing user: {`${user.nombre} ${user.apellidos} with id: ${user.cedula}, userRole: ${user.rol}`}</p>
      <Button shadow size="md" color="secondary" onClick={ ()=>{
        setUser(newUser)
      }}>
      Login
      </Button>
      <Container border="">
        <UserView/>
      </Container>
      </Container>
      <Container gap={0}>
      <Row gap={0.1}>
        <Col>
          <Card color="primary">
            <Text h6 size={15} color="white" css={{ m: 0 }}>
              1 of 2
            </Text>
          </Card>
        </Col>
        <Col>
          <Card color="primary">
            <Text h6 size={15} color="white" css={{ m: 0 }}>
              2 of 2
            </Text>
          </Card>
        </Col>
      </Row>
      <Spacer y={1}/>
      <Row gap={1}>
        <Col>
          <Card color="error">
            <Text h6 size={15} color="white" css={{ m: 0 }}>
              Card One
            </Text>
          </Card>
        </Col>
        <Col>
          <Card color="secondary">
            <Text h6 size={15} color="white" css={{ m: 0 }}>
              Card two
            </Text>
          </Card>
        </Col>
        <Col>
          <Card color="success">
            <Text h6 size={15} color="white" css={{ m: 0 }}>
              Card Tree
            </Text>
          </Card>
        </Col>
      </Row>
    </Container>
       </>
  )
}
