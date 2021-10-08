// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Unit = {
  "HOURS": "HOURS",
  "PCS": "PCS"
};

const { WorkLog, Employee, WorkType } = initSchema(schema);

export {
  WorkLog,
  Employee,
  WorkType,
  Unit
};