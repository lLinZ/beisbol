import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { FC } from 'react'
import { IUser } from '../../interfaces'

const validationSchema = Yup.object({

})
const initialValues: IUser = {
    firstName: '',
    middleName: '',
    lastname: '',
    secondLastname: '',
    email: '',
    phone: '',
    document: '',
    photo: ''
}
export const LoginForm: FC = () => {
    const onSubmit = async (values: IUser) => {
        const body = JSON.stringify({ values })
        const options = {
            method: "POST",
            body
        }
        const url = '';
        const respuesta = await fetch(url, options);
        switch (respuesta.status) {
            case 200:
                break;
            case 204:
                break;
            case 400:
                break;
            case 500:
                break;
            default:
                break;
        }
    }
    return (
        <>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ values, handleChange, handleSubmit, errors }) => (
                    <Form onSubmit={handleSubmit}>

                    </Form>
                )}
            </Formik>
        </>
    )
}
