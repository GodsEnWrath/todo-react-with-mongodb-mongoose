
import {axios} from "../helpers";

export const loginValidation = async values => {
    // const API = process.env.REACT_APP_API_SERVER;

    let errors = {};

    try {
        const { data: result } = await 
        axios()
        .post(
            `/validate/login`,
            values
        );

        return { ...errors, ...result };
    } catch (err) {
        throw err;
    }
};