// export const validationForm = ({ firstName, lastName, email, password }) => {
//     let errors = {};

//     if (!email) {
//         errors.email = "Wajib Isi";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
//         errors.email = "Format email salah";
//     }

//     if (!password) {
//         errors.password = "Wajib Isi";
//     } else if (password.length < 8) {
//         errors.password = "Password minimal 8 karakter";
//     }

//     if (!firstName) {
//         errors.firstName = "Wajib Isi";
//     }

//     if (!lastName) {
//         errors.lastName = "Wajib Isi";
//     }

//     return errors;
// };



import {axios} from "../helpers"

export const validationForm = async values => {
    // const API = process.env.REACT_APP_API_SERVER

    let errors= {};

    try{
        const {data: result} = await 
        axios()
        .post(
            `/validate/signup`,
            values
        )
        return { ...errors, ...result}
    } catch(err) {
        throw err
    }
}