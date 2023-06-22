import shopService from "../service/shop-service.js";

const create = async (req, res, next) => {
  try {
    const user = req.user;
    const request = req.body;
    const result = await shopService.create(user, request);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const get = async (req, res, next) => {
  try {
    const shopId = req.params.id;
    const user = req.user;
    const result = await shopService.get(user, shopId);
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
    request.id = req.params.id;
    const user = req.user;
    const result = await shopService.update(user, request);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const remove = async (req, res, next) => {
  try {
    const shopId = req.params.id;
    const user = req.user;
    await shopService.remove(user, shopId);
    res.status(200).json({
      data: "Ok",
    });
  } catch (e) {
    next(e);
  }
};

const search = async (req, res, next) => {
  try {
    const request = {
      search_name: req.query.item,
      page: req.query.page,
      size: req.query.size,
    };

    const result = await shopService.search(request);

    res.status(200).json({
      data: result.data,
      paging: result.paging,
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
  search,
};
