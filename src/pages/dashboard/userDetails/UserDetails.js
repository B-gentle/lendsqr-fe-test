import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import { BsArrowLeft } from 'react-icons/bs'
import './userdetails.scss'
import { eduEmployment, guarantor, socials } from './userDetailsList'
import UserBluePrint from './UserBluePrint'

const UserDetails = () => {
  const { userId } = useParams();

  const usersObject = localStorage.getItem("usersData")
  const userDetails = JSON.parse(usersObject)
  const user = userDetails.find(user => user.id === userId)

  let {details} = eduEmployment 
  details = eduEmployment.map((details, id) => {
    switch (id) {
      case 0 :
        return user.education.level;
        case 1 :
          return user.education.employmentStatus;
          case 2 :
          return user.education.sector;
          case 3 :
          return user.education.duration;
          case 4 :
          return user.education.officeEmail;
          case 5 :
          return `${user.education.monthlyIncome[0]} - ${user.education.monthlyIncome[1]}`;
          case 6 :
          return user.education.loanRepayment;

      default:
        return "";
    }
  })

  let {link} = socials
  link = socials.map((details, id) => {
    switch (id) {
      case 0 :
        return user.socials.twitter;
        case 1 :
          return user.socials.facebook;
          case 2 :
          return user.socials.instagram;
      default:
        return "";
    }
  })

  let {link:guarantorLink} = guarantor
  guarantorLink = guarantor.map((details, id) => {
    switch (id) {
      case 0 :
        return `${user.guarantor.firstName} ${user.guarantor.lastName}`;
        case 1 :
          return user.guarantor.phoneNumber;
          case 2 :
          return "NA"
          case 3 :
          return user.guarantor.gender === "Male" ? "Brother" : "Sister";
      default:
        return "";
    }
  })

  return (
    <Container>
      <div>
        <Link to='/users'><BsArrowLeft /> <span>Back to Users</span></Link>
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
          <UserBluePrint header="Education and Employment" arr={eduEmployment} details={details} />
        </Row>
        <Row>
          <UserBluePrint header="Socials" arr={socials} details={link}/>
        </Row>
       
        <Row>
          <UserBluePrint header="Guarantors" arr={guarantor} details={guarantorLink}/>
        </Row>
      </Row>
    </Container>
  )
}

export default UserDetails 
