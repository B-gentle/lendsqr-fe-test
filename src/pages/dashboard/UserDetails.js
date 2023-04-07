import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'

const UserDetails = () => {
  const { userId } = useParams();

     const usersObject = localStorage.getItem("usersData")
     const userDetails = JSON.parse(usersObject)
     const user = userDetails.find(user => user.id === userId)

     console.log(user)

  return (
    <Container>
      <div>
        <h3>User Details</h3>
        <button>Blacklist User</button>
        <button>Activate User</button>
      </div>
      <Row>
        <span><img src={user?.profile.avatar} alt='user-avatar'/></span>
        <span>{user?.profile.firstName}{' '} {user?.profile.lastName}</span>
        <span>{user?.accountNumber}</span>
        <span>₦{user?.accountBalance}</span>
      </Row>
      <Row>
        <Row></Row>
        <Row></Row>
        <Row>
          <span>{user?.socials.facebook}</span>
          <span>{user?.socials.instagram}</span>
          <span>{user?.socials.twitter}</span>
        </Row>
        <Row></Row>
        <Row></Row>

        <div>{user?.email}</div>
        <div>{user?.email}</div>
        <div>{user?.email}</div>
      </Row>
    </Container>
  )
}

export default UserDetails