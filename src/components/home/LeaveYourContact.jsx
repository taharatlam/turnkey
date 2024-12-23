'use client'
import React from 'react'
import Image from 'next/image'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import icc1 from '@/images/chat.svg'
import selectIcon from '@/images/drop.svg'
import CountryCodes from '../CountryCodes'
import arrowRightIcon from '@/images/black-arrow.svg'
import img1 from '@/images/img1.jpg'
import { CountryFlagPicker } from '../CountryFlagPicker'

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('First name is required'),
  phone: Yup.string()
    .matches(/^[0-9]{8,}$/, 'Phone number must be at least 8 digits')
    .required('Phone number is required')
})

const LeaveYourContact = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values)
    setSubmitting(false)
  }

  return (
    <div className='leave-your-contact-sec'>
        <div className='container'>
            <div className='lv-wrapper'>
                <Image src={img1} alt='Leave Your Contact' />
                <div className='row row-gap-25 align-items-center'>
                    <div className='col-lg-6 col-12'>
                        <Image src={icc1} alt='Leave Your Contact' />
                        <h2 className='sec-title white'>Leave your contact and get</h2>
                        <p className='para white'>
                            Leave your contact details to stay informed about our latest updates, offers, and services. We'll ensure you never miss out!
                        </p>
                    </div>
                    <div className='col-lg-5 offset-lg-1 col-12'>
                        <Formik
                            initialValues={{
                                firstName: '',
                                phone: ''
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched, isSubmitting }) => (
                                <Form>
                                    <div className='form-group'>
                                        <label htmlFor='firstName' className='label-text'>First Name</label>
                                        <Field 
                                            type='text' 
                                            name='firstName'
                                            placeholder='John Doe'
                                        />
                                        {errors.firstName && touched.firstName && (
                                            <div className="error-message">{errors.firstName}</div>
                                        )}
                                    </div>
                                    
                                    <div className='form-group'>
                                        <label htmlFor='phone' className='label-text'>Phone number</label>
                                        <div className="phone-input-group">
                                            <div className="country-code-select">
                                                <CountryFlagPicker />
                                            </div>
                                            <Field
                                                type="tel"
                                                name="phone"
                                                placeholder="50 123 4567"
                                            />
                                        </div>
                                        {errors.phone && touched.phone && (
                                            <div className="error-message">{errors.phone}</div>
                                        )}
                                    </div>
                                    <div className="col-12">
                                        <button 
                                            type="submit" 
                                            className="submit-btn main-btn wide mt-3 circ"
                                            disabled={isSubmitting}
                                        >
                                            <span>Send Request</span>
                                            <Image src={arrowRightIcon} alt="Arrow Right" />
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeaveYourContact