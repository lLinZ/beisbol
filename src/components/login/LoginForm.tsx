import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { FC } from 'react'
import { IUser } from '../../interfaces'
import { alertHandler, errorAlertHandler } from '../../lib/functions'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

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
    const navigate = useNavigate();
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
                const data = await respuesta.json()
                const { user } = data;
                const alert = await Swal.fire({
                    title: "Exito",
                    text: `¡Que bueno verte de vuelta ${user.nombre}!`,
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false,
                    timerProgressBar: true
                })
                if (user.rol === 1) {
                    navigate("/admin/dashboard");
                } else {
                    navigate("/dashboard");
                }
                break;
            case 204:
                alertHandler(respuesta.status)
                break;
            case 400:
                const { errores } = await respuesta.json();
                errorAlertHandler(errores)
                break;
            case 500:
                alertHandler(respuesta.status)
                break;
            default:
                alertHandler(respuesta.status)
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
