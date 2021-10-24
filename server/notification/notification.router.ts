import express from 'express';
import { ServerError } from '../ServerUtils';
import { PrivateMiddleware } from '../Middlewares';
import NotificationModel from './notification.model';

const notificationRouter = express.Router();

notificationRouter.get('/', [
  PrivateMiddleware,
  async function getAllNotifications(req, res) {
    const { user } = req.body;

    try {
      const allNotifications = await NotificationModel
        .getAll(user._id)
        .populate('from', 'name username avatar');
      res.json(allNotifications);
    } catch (err) {
      console.error("[notificationRouter.getAllNotifications]", err);
      new ServerError(500, 'Eroare la încărcarea notificărilor...').send(res);
    }
  }
]);

notificationRouter.post('/:notificationId/read', [
  PrivateMiddleware,
  async function markAsRead(req, res) {
    const { user } = req.body;
    const { notificationId } = req.params;

    const notification = await NotificationModel.getById(notificationId);

    if (notification === null) {
      new ServerError(404, `Nu există notificarea cu ID-ul ${notificationId}`).send(res);
      return;
    }

    if (notification.to.toString() !== user._id.toString()) {
      new ServerError(403, `Notificarea cu ID-ul ${notificationId} nu-ți aparține, deci nu o poți marca ca și citită.`).send(res);
      return;
    }

    const updatedNotification = await NotificationModel
      .markAsRead(notificationId)
      .populate('from', 'name username avatar');
    res.json(updatedNotification);
  }
]);

notificationRouter.post('/read', [
  PrivateMiddleware,
  async function markAllAsRead(req, res) {
    const { user } = req.body;

    await NotificationModel.markAllAsRead(user._id);
    res.status(200).send();
  }
]);

export default notificationRouter;
