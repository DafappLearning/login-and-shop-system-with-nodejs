import addressService from "../service/address-service.js";

const create = async (req, res, next) => {
  try {
    const user = req.user;
    const contactId = req.params.id;
    const request = req.body;
    const result = await addressService.create(contactId, user, request);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const get = async (req, res, next) => {
  try {
    const request = req.body;
    request.id = req.params.id;
    request.addressId = req.params.addressId;
    const result = await addressService.get(request);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const request = req.body;
    request.contactId = req.params.id;
    request.addressId = req.params.addressId;
    const result = await addressService.update(request);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const remove = async (req, res, next) => {
  try {
    const request = req.body;
    request.id = req.params.id;
    request.addressId = req.params.addressId;
    await addressService.remove(request);
    res.status(200).json({
      data: "Ok",
    });
  } catch (e) {
    next(e);
  }
};
export default {
  create,
  get,
  update,
  remove,
};
