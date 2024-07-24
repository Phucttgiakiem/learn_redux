import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import Images from 'constants/images';
import { FastField, Form, Formik } from 'formik';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import * as yup from 'yup';
PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
}

function PhotoForm(props) {
  const initialValues = {
    title: '',
    categoryId: null,
    photo: ''
  }

  const validdationSchema = yup.object().shape({
    title: yup.string().required('This field is required'),

    categoryId: yup.number().required('This field is required').nullable(),

    photo: yup.string().when('categoryId', {
      is:1,
      then: yup.string().required('This field is required'),
      otherwise: yup.string().notRequired(),
    })
  });
  // npm i --save react-select
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={(validdationSchema)}
      onSubmit={values => console.log('Submit: ' ,values)}
    >
      {
        formickProps => {
          // do something here ...
          const {values,errors,touched} = formickProps;
          console.log(values,errors,touched);
          return (
            <Form>
              <FastField
                  name="title"
                  component={InputField}
                  label="Title"
                  placeholder="Eg: Wow nature ..."
              />
              <FastField
                  name="categoryId"
                  component={SelectField}
                  label="Category"
                  placeholder="What's your photo category?"
                  options={PHOTO_CATEGORY_OPTIONS}
              />
              <FastField
                name="photo"
                component={RandomPhotoField}
                label="Photo"
              />

                <FormGroup>
                  <Button type="submit" color="primary">Add to album</Button>
                </FormGroup>
            </Form>
          )
        }
      }
    </Formik>
  );
}

export default PhotoForm;