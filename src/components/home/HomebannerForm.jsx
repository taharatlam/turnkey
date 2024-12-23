'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Select from 'react-select'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import formTopImage from '@/images/form-bottom.svg'
import selectIcon from '@/images/drop.svg'
import arrowRightIcon from '@/images/black-arrow.svg'
import { CountryFlagPicker } from '../CountryFlagPicker'

import { timeSlots, areas } from '@/utils/FormFieldData'

const HomebannerForm = () => {
  const [selected, setSelected] = useState('AE')

  const timeOptions = timeSlots.map(time => ({
    value: time,
    label: time
  }))

  const areaOptions = areas.map(area => ({
    value: area, 
    label: area
  }))

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, 'Name is too short')
      .max(50, 'Name is too long')
      .required('Full name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    timeSlot: Yup.object()
      .required('Please select a time slot'),
    area: Yup.object()
      .required('Please select an area'),
    phone: Yup.string()
      .matches(/^[0-9]{8,}$/, 'Phone number must be at least 8 digits')
      .required('Phone number is required')
  })

  const customStyles = {
    control: (provided, state) => ({
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

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values)
    // Handle form submission
    setSubmitting(false)
  }

  return (
    <div className="home-banner-form">
        <div className="form-top">
            <h2>JOIN US NOW</h2>
            <p>The cost of the work is fixed in the contract and will not change.</p>
        </div>
        <Image src={formTopImage} alt="Form Top" />
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            timeSlot: null,
            area: null,
            phone: ''
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, setFieldValue, values }) => (
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
                          style={{
                            backgroundColor: values.fullName ? '#F5F5F5' : 'white'
                          }}
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
                          style={{
                            backgroundColor: values.email ? '#F5F5F5' : 'white'
                          }}
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
                          options={timeOptions}
                          placeholder="Please select a time"
                          styles={{
                            ...customStyles,
                            control: (base) => ({
                              ...customStyles.control(base),
                              backgroundColor: values.timeSlot ? '#F5F5F5' : 'white'
                            })
                          }}
                          isSearchable={true}
                          value={values.timeSlot}
                          onChange={(option) => setFieldValue('timeSlot', option)}
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
                          options={areaOptions}
                          placeholder="Search area"
                          styles={{
                            ...customStyles,
                            control: (base) => ({
                              ...customStyles.control(base),
                              backgroundColor: values.area ? '#F5F5F5' : 'white'
                            })
                          }}
                          isSearchable={true}
                          value={values.area}
                          onChange={(option) => setFieldValue('area', option)}
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
                              style={{
                                backgroundColor: values.phone ? '#F5F5F5' : 'white'
                              }}
                            />
                        </div>
                        {errors.phone && touched.phone && (
                          <div className="error-message">{errors.phone}</div>
                        )}
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="submit-btn main-btn wide mt-3">
                        <span>Submit</span>
                        <Image src={arrowRightIcon} alt="Arrow Right" />
                    </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
    </div>
  )
}

export default HomebannerForm