'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/list/', controller.home.list);
  router.get('/user/index', controller.user.index);
  router.get('/user/detail/:id',controller.user.detail);
  router.post('/user/post',controller.user.post);
};
