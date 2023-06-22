import { validate } from "../validation/validation.js";
import {
  createShopValidation,
  getShopValidation,
  searchShopValidation,
  updateShopValidation,
} from "../validation/shop-validation.js";
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import { logger } from "../application/logging.js";

const create = async (user, request) => {
  const create = validate(createShopValidation, request);
  create.owner = user.username;

  return await prismaClient.shop.create({
    data: create,
    select: {
      id: true,
      item_name: true,
      price: true,
      category: true,
      description: true,
      owner: true,
    },
  });
};

const get = async (user, shopId) => {
  const getValidation = validate(getShopValidation, shopId);

  const shop = await prismaClient.shop.findUnique({
    where: {
      id: getValidation,
    },
    select: {
      id: true,
      item_name: true,
      price: true,
      category: true,
      description: true,
      owner: true,
    },
  });

  if (!shop) {
    throw new ResponseError(404, "Item is not found");
  }

  if (user.username !== shop.owner) {
    throw new ResponseError(403, "You cant see this data");
  }

  return shop;
};

const update = async (user, request) => {
  const update = validate(updateShopValidation, request);

  const dataCount = await prismaClient.shop.count({
    where: {
      id: update.id,
      owner: user.username,
    },
  });

  if (dataCount !== 1) {
    throw new ResponseError(404, "Item is not found");
  }

  return await prismaClient.shop.update({
    where: {
      id: update.id,
    },
    data: {
      item_name: update.item_name,
      price: update.price,
      category: update.category,
      description: update.description,
    },
    select: {
      id: true,
      item_name: true,
      price: true,
      category: true,
      description: true,
      owner: true,
    },
  });
};

const remove = async (user, shopId) => {
  const remove = validate(getShopValidation, shopId);

  const shopCount = await prismaClient.shop.count({
    where: {
      id: remove,
      owner: user.username,
    },
  });

  if (shopCount !== 1) {
    throw new ResponseError(404, "Item is not found");
  }

  return await prismaClient.shop.deleteMany({
    where: {
      id: remove,
    },
  });
};

const search = async (request) => {
  request = validate(searchShopValidation, request);

  const skip = (request.page - 1) * request.size;

  const filters = [];

  if (request.search_name) {
    filters.push({
      OR: [
        {
          item_name: {
            contains: request.search_name,
          },
        },
        {
          description: {
            contains: request.search_name,
          },
        },
      ],
    });
  }

  const shopFind = await prismaClient.shop.findMany({
    where: {
      AND: filters,
    },
    take: request.size,
    skip: skip,
  });

  const totalPage = await prismaClient.shop.count({
    where: {
      AND: filters,
    },
  });

  return {
    data: shopFind,
    paging: {
      page: request.page,
      total_item: totalPage,
      total_page: Math.ceil(totalPage / request.size),
    },
  };
};

export default {
  create,
  get,
  update,
  remove,
  search,
};
