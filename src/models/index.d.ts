import {
  ModelInit,
  MutableModel,
  PersistentModelConstructor,
} from "@aws-amplify/datastore";

export enum Unit {
  HOURS = "HOURS",
  PCS = "PCS",
}

type WorkLogMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type EmployeeMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type WorkTypeMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

export declare class WorkLog {
  readonly id: string;
  readonly amount?: number;
  readonly Employee?: Employee;
  readonly WorkTyp?: WorkType;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<WorkLog>);
  static copyOf(
    source: WorkLog,
    mutator: (draft: MutableModel<WorkLog>) => MutableModel<WorkLog> | void
  ): WorkLog;
}

export declare class Employee {
  readonly id: string;
  readonly mobile?: string;
  readonly fullName?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Employee>);
  static copyOf(
    source: Employee,
    mutator: (draft: MutableModel<Employee>) => MutableModel<Employee> | void
  ): Employee;
}

export declare class WorkType {
  readonly id: string;
  readonly name?: string;
  readonly unit?: Unit | keyof typeof Unit;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<WorkType>);
  static copyOf(
    source: WorkType,
    mutator: (draft: MutableModel<WorkType>) => MutableModel<WorkType> | void
  ): WorkType;
}