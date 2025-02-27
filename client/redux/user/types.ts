import { UserRole } from '~/../shared/types/user.types';
import { ParsedNotificationI } from '~/../shared/types/notification.types';
import { ExerciseType } from '~/../shared/types/exercise.types';

export interface UserState {
  info: {
    name?: string;
    username: string;
    email: string;
    avatar: string;
    role: UserRole,
    description?: string;
  };
  notifications: Notifications;
}

export interface Notifications {
  list: ParsedNotificationI[];
  unreadCount: number;
  page: number;
  end: boolean;
}

export interface Exercise {
  _id: string;
  body: string;
  example?: string;
  private: boolean;
  solution: string;
  suggestion?: string;
  tags: string[];
  type: ExerciseType;
  user: UserState['info'];
  lesson?: string;
}

export interface LessonExercise {
  _id: string;
  body: string;
  example?: string;
  private: boolean;
  solution: string;
  lesson: string;
  tags: string[];
  type: ExerciseType;
  isApproved: boolean;
  feedbackCount: number;
  user: UserState['info'];
}
