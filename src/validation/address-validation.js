import Joi from "joi";

const createAddressValidation = Joi.object({
  street: Joi.string().max(200).required(),
  city: Joi.string().max(100).required(),
  province: Joi.string().max(100).required(),
  country: Joi.string().max(50).required(),
  postal_code: Joi.string().max(20).required(),
});

const getAddressValidation = Joi.object({
  id: Joi.number().positive().required(),
  addressId: Joi.number().positive().required(),
});

const updateAddressValidation = Joi.object({
  contactId: Joi.number().positive().required(),
  addressId: Joi.number().positive().required(),
  street: Joi.string().max(200).required(),
  city: Joi.string().max(100).optional(),
  province: Joi.string().max(100).optional(),
  country: Joi.string().max(50).optional(),
  postal_code: Joi.string().max(20).optional(),
});

export {
  createAddressValidation,
  getAddressValidation,
  updateAddressValidation,
};
