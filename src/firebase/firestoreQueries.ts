//EXAMPLE OF CRUD OPERATION

import { db } from './utils';
import { AchievmentCardProps } from '../components/Admin/Achievments/AchievmentCard/Component';
export let currentUser = null;
export let languageCollection = undefined;
const achievments = db
  .collection('achievments')


const Achievments = {
  create: async (achievment: Partial<AchievmentCardProps>) => {
    const docRef = await achievments.add({
      ...achievment,
      date: new Date(),
    });
    const result: AchievmentCardProps = {
      id: docRef.id,
      ...achievment,
    } as AchievmentCardProps;
    return result;
  },
  delete: async (id: string) => await achievments.doc(id).delete(),
  update: async (achievment: Partial<AchievmentCardProps>) => {
    await achievments.doc(achievment.id).update(achievment);
  },
  getOne: async (id: string) => await (await achievments.doc(id).get()).data(),
  getAll: async () => {
    return await (await achievments.orderBy('date', 'desc').get()).docs.map(
      (doc) => {
        console.log(doc)
        const data: AchievmentCardProps = doc.data() as AchievmentCardProps;
        // console.log(data);
        return {
          ...data,
          id: doc.id,
        } as AchievmentCardProps;
      },
    );
  },
};

export default {
  setCurrentUser: (_currentUser: any): void => {
    currentUser = _currentUser;
  },
  setLanguageCollection: (_language: any): void => {
    languageCollection = _language;
  },
  Achievments,
};
