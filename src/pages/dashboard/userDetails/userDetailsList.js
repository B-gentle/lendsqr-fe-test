import { getParamId } from "./UserDetails" 

const id = getParamId()
console.log(id)

export const personalInfo = []
export const eduEmployment = [{
    title: "level of education",
    detail: "us"
}, {
    title:"employment status" ,
    detail: "user.education.employmentStatus"
}, {
    title:"sector of employment" ,
    detail: "user.education.sector"
}, {
    title:"Duration of employment" ,
    detail: "user.education.duration"
}, {
    title: "office email",
    detail: "user.education.officeEmail"
}, {
    title: "office email",
    detail: "100-200"
}, {
    title:"loan repayment" ,
    detail: "user.education.loanRepayment"
}]
export const socials = [
    {
        title:"twitter" ,
        detail: "user.education.loanRepayment"
    },
    {
        title:"facebook" ,
        detail: "user.education.loanRepayment"
    },
    {
        title:"instagram" ,
        detail: "user.education.loanRepayment"
    }
]
export const guarantor = []