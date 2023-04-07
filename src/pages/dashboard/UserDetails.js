import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useQuery } from 'react-query';
import { AiOutlineUser } from 'react-icons/ai'
import { Container, Row, Col } from 'react-bootstrap'

const UserDetails = () => {
  const { userId } = useParams();

  //    const userDetails = localStorage.getItem("usersData")



  const { data: user, isLoading, isError } = useQuery(["usersData"], async () => {
    const res = await axios.get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`);
    localStorage.setItem("usersDetails", JSON.stringify(res.data));
    return res.data
  })
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