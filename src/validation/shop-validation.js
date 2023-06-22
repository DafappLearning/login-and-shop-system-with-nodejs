import Joi from "joi";

const createShopValidation = Joi.object({
  item_name: Joi.string().max(100).required(),
  price: Joi.number().min(10).positive().required(),
  category: Joi.string().max(100).required(),
  description: Joi.string().max(1000).required(),
});

const updateShopValidation = Joi.object({
  id: Joi.number().positive().required(),
  item_name: Joi.string().max(100).required(),
  price: Joi.number().min(10).positive().required(),
  category: Joi.string().max(100).required(),
  description: Joi.string().max(1000).required(),
});

const getShopValidation = Joi.number().positive().required();

const searchShopValidation = Joi.object({
  page: Joi.number().min(1).positive().default(1),
  size: Joi.number().max(100).positive().default(100),
  search_name: Joi.string().max(100).optional(),
});

export {
  createShopValidation,
  updateShopValidation,
  getShopValidation,
  searchShopValidation,
};
