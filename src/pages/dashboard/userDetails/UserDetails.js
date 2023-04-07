import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import './userdetails.scss'

const UserDetails = () => {
  const { userId } = useParams();

  const usersObject = localStorage.getItem("usersData")
  const userDetails = JSON.parse(usersObject)
  const user = userDetails.find(user => user.id === userId)

  return (
    <Container>
      <div>
        <h3>User Details</h3>
        <button>Blacklist User</button>
        <button>Activate User</button>
      </div>
      <Row className='sample general-details'>
        <Row className='first-row'>
          <span className='user-avatar'>
            <img className='avatar' src={user?.profile.avatar} alt='user-avatar' />
            <span>
              <span>{user?.profile.firstName}{' '} {user?.profile.lastName}</span>
              <span>{user?.accountNumber}</span>
            </span>
          </span>
          <span className='tier'>
            <span></span>
            <span></span>
          </span>
          <span className='amount'>
            <span>₦{user?.accountBalance}</span>
            <span></span>
          </span>
        </Row>

        <Row>

        </Row>
        <span></span>
      </Row>
      <Row>
        <Row></Row>
        <Row></Row>
        <Row className='sample'>
          <main>Socials</main>
          <span>
            <span>
              <span>TWITTER</span>
              <span>{user?.socials.twitter}</span>
            </span>
            <span>
              <span>FACEBOOK</span>
              <span>{user?.socials.facebook}</span>
            </span>
            <span>
              <span>INSTAGRAM</span>
              <span>{user?.socials.instagram}</span>
            </span>
          </span>

        </Row>
        <Row className='sample'>
          <main>Socials</main>
          <span>
            <span>
              <span>TWITTER</span>
              <span>{user?.socials.twitter}</span>
            </span>
            <span>
              <span>FACEBOOK</span>
              <span>{user?.socials.facebook}</span>
            </span>
            <span>
              <span>INSTAGRAM</span>
              <span>{user?.socials.instagram}</span>
            </span>
          </span>

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