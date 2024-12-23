'use client'
import React from 'react'
import Image from 'next/image'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import refresh from '@/images/imgg.jpg'
import selectIcon from '@/images/drop.svg'
import arrowRightIcon from '@/images/black-arrow.svg'
import Select from 'react-select'
import { CountryFlagPicker } from '../CountryFlagPicker'
import { areas, timeSlots } from '@/utils/FormFieldData'

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Name is too short')
    .max(50, 'Name is too long')
    .required('Full name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  timeSlot: Yup.string()
    .required('Please select a time slot'),
  area: Yup.string()
    .required('Please select an area'),
  phone: Yup.string()
    .matches(/^[0-9]{8,}$/, 'Phone number must be at least 8 digits')
    .required('Phone number is required')
})

const timeSlotOptions = timeSlots.map(time => ({
  value: time,
  label: time
}))

const areaOptions = areas.map(area => ({
  value: area,
  label: area
}))

const customStyles = {
    control: (provided) => ({
      ...provided,
      border: '1px solid #5C5C5C',
      borderRadius: '10px',
      padding: '0.3em 0.5em',
      boxShadow: 'none',
      '&:hover': {
        border: '1px solid #5C5C5C'
      }
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#76868B'
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#FFBD59' : 'white',
      color: state.isSelected ? 'white' : 'black',
      '&:hover': {
        backgroundColor: '#FFBD59',
        color: 'white'
      }
    })
  }

const Refresh = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values)
    setSubmitting(false)
  }

  return (
    <section className='refresh-sec sec'>
        <Image src={refresh} alt='refresh' />
        <div className='container'>
            <div className='refresh-container'>  
                <div className='row align-items-center'>
                    <div className='col-lg-6 col-12'>
                        <h2 className='sec-title'>Refresh, Renew,<br className='d-none d-sm-block' /> Redo Your Home!</h2>
                        <p className='sec-para'>
                            Expert Renovation Services in Dubai.
                        </p>
                        <p className='para'>
                            Ready to transform your space? Fill out the form and Let's Get Started!
                        </p>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <Formik
                            initialValues={{
                                fullName: '',
                                email: '',
                                timeSlot: '',
                                area: '',
                                phone: ''
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched, isSubmitting, setFieldValue }) => (
                                <Form>
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="fullName" className="label-text">Full Name</label>
                                                <Field 
                                                    type="text" 
                                                    id="fullName"
                                                    name="fullName"
                                                    placeholder="John Doe"
                                                />
                                                {errors.fullName && touched.fullName && (
                                                    <div className="error-message">{errors.fullName}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="email" className="label-text">Email</label>
                                                <Field 
                                                    type="email" 
                                                    id="email"
                                                    name="email"
                                                    placeholder="john@example.com"
                                                />
                                                {errors.email && touched.email && (
                                                    <div className="error-message">{errors.email}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-12">
                                            <div className="form-group">
                                                <label htmlFor="timeSlot" className="label-text">When is the best time to contact you?</label>
                                                <Select
                                                    id="timeSlot"
                                                    name="timeSlot"
                                                    options={timeSlotOptions}
                                                    styles={customStyles}
                                                    placeholder="Please select a time"
                                                    onChange={(option) => setFieldValue('timeSlot', option.value)}
                                                />
                                                {errors.timeSlot && touched.timeSlot && (
                                                    <div className="error-message">{errors.timeSlot}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-12">
                                            <div className="form-group">
                                                <label htmlFor="area" className="label-text">Select or search your area</label>
                                                <Select
                                                    id="area"
                                                    name="area"
                                                    options={areaOptions}
                                                    styles={customStyles}
                                                    placeholder="Search area"
                                                    onChange={(option) => setFieldValue('area', option.value)}
                                                />
                                                {errors.area && touched.area && (
                                                    <div className="error-message">{errors.area}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-12">
                                            <div className="form-group">
                                                <label htmlFor="phone" className="label-text">Phone number</label>
                                                <div className="phone-input-group">
                                                    <div className="country-code-select">
                                                        <CountryFlagPicker />
                                                    </div>
                                                    <Field
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        placeholder="50 123 4567"
                                                    />
                                                </div>
                                                {errors.phone && touched.phone && (
                                                    <div className="error-message">{errors.phone}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button 
                                                type="submit" 
                                                className="submit-btn main-btn wide mt-3"
                                                disabled={isSubmitting}
                                            >
                                                <span>Submit</span>
                                                <Image src={arrowRightIcon} alt="Arrow Right" />
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Refresh