import React from 'react'
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"

function FormLogin() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    const clave_acceso = watch("clave_acceso")
    const [error_acceso, setErrorAcceso] = useState()

    function validar(){
        if(clave_acceso == '1234'){
            setErrorAcceso(false)
            window.open('./alumno', '_self')
        }else{
            setErrorAcceso(true)
        }
    }

return (
    <div>

    <h1 className="
        font-Public-Sans-Variable
        text-center
        text-6xl
        text-gray-600
        py-5
        px-10
        ">
        Tarjetón digital
    </h1>

        <form onSubmit={handleSubmit(onSubmit)}>

        <input 
            type="text"
            className="rounded-md w-full text-3xl text-center p-3"
            {...register("clave_acceso", { required: false})}
        />
        {errors.clave_acceso && <p className='py-3 text-md text-center text-red-600'>
            <i className="fas fa-exclamation-circle p-1"></i> La clave es requerida</p>
        }

        {
            error_acceso && <p className='py-3 text-md text-center text-red-600'>
            <i className="fas fa-exclamation-circle p-1"></i> La clave es incorrecta</p>
        }

        <button 
            onClick={validar}
            type='submit'
            className="
            my-5 text-center
            bg-blue-900
            text-white
            px-8 py-2
            rounded-full
            mx-auto flex
            "
            >
            Ingresar
        </button>

    </form>

    </div>
    )
}

export default FormLogin
