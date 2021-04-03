/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import { Context } from "./src/context"
import { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CreateDishInput: { // input type
    dishType: NexusGenEnums['DishType']; // DishType!
    image?: string | null; // String
    rating: NexusGenEnums['RatingType']; // RatingType!
    title: string; // String!
  }
  RegisterUserInput: { // input type
    email: string; // String!
    firstName: string; // String!
    lastName?: string | null; // String
    password: string; // String!
    role?: NexusGenEnums['UserRole'] | null; // UserRole
  }
  UpdateDishInput: { // input type
    dishType?: NexusGenEnums['DishType'] | null; // DishType
    id?: number | null; // Int
    image?: string | null; // String
    rating?: NexusGenEnums['RatingType'] | null; // RatingType
    title?: string | null; // String
  }
  UpdateMeInput: { // input type
    email?: string | null; // String
    firstName?: string | null; // String
    lastName?: string | null; // String
    password?: string | null; // String
  }
}

export interface NexusGenEnums {
  DishType: "DESSERT" | "MAIN" | "SIDE" | "STARTER"
  RatingType: "FIVE" | "FOUR" | "ONE" | "THREE" | "TWO"
  SortOrder: "asc" | "desc"
  UserRole: "ADMIN" | "USER"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  AuthPayload: { // root type
    token?: string | null; // String
    user?: NexusGenRootTypes['User'] | null; // User
  }
  Comment: { // root type
    author: NexusGenRootTypes['User']; // User!
    dish: NexusGenRootTypes['Dish']; // Dish!
    dishId: number; // Int!
    ownerId: number; // Int!
  }
  Dish: { // root type
    author: NexusGenRootTypes['User']; // User!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    dishType: NexusGenEnums['DishType']; // DishType!
    id: number; // Int!
    image?: string | null; // String
    rating: NexusGenEnums['RatingType']; // RatingType!
    title: string; // String!
  }
  DishPayload: { // root type
    dish?: NexusGenRootTypes['Dish'] | null; // Dish
    success?: boolean | null; // Boolean
  }
  Mutation: {};
  Query: {};
  User: { // root type
    comments?: Array<NexusGenRootTypes['Comment'] | null> | null; // [Comment]
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    dishes?: Array<NexusGenRootTypes['Dish'] | null> | null; // [Dish]
    email: string; // String!
    firstName: string; // String!
    id: number; // Int!
    lastName?: string | null; // String
    password: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
  }
  Comment: { // field return type
    author: NexusGenRootTypes['User']; // User!
    dish: NexusGenRootTypes['Dish']; // Dish!
    dishId: number; // Int!
    ownerId: number; // Int!
  }
  Dish: { // field return type
    author: NexusGenRootTypes['User']; // User!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    dishType: NexusGenEnums['DishType']; // DishType!
    id: number; // Int!
    image: string | null; // String
    rating: NexusGenEnums['RatingType']; // RatingType!
    title: string; // String!
  }
  DishPayload: { // field return type
    dish: NexusGenRootTypes['Dish'] | null; // Dish
    success: boolean | null; // Boolean
  }
  Mutation: { // field return type
    createDish: NexusGenRootTypes['Dish'] | null; // Dish
    deleteDish: NexusGenRootTypes['DishPayload']; // DishPayload!
    login: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    register: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    updateDish: NexusGenRootTypes['DishPayload'] | null; // DishPayload
    updateMe: NexusGenRootTypes['User'] | null; // User
  }
  Query: { // field return type
    dishById: NexusGenRootTypes['Dish'] | null; // Dish
    dishes: Array<NexusGenRootTypes['Dish'] | null>; // [Dish]!
    filterDishes: Array<NexusGenRootTypes['Dish'] | null> | null; // [Dish]
    me: NexusGenRootTypes['User'] | null; // User
    users: Array<NexusGenRootTypes['User'] | null> | null; // [User]
  }
  User: { // field return type
    comments: Array<NexusGenRootTypes['Comment'] | null> | null; // [Comment]
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    dishes: Array<NexusGenRootTypes['Dish'] | null> | null; // [Dish]
    email: string; // String!
    firstName: string; // String!
    id: number; // Int!
    lastName: string | null; // String
    password: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayload: { // field return type name
    token: 'String'
    user: 'User'
  }
  Comment: { // field return type name
    author: 'User'
    dish: 'Dish'
    dishId: 'Int'
    ownerId: 'Int'
  }
  Dish: { // field return type name
    author: 'User'
    createdAt: 'DateTime'
    dishType: 'DishType'
    id: 'Int'
    image: 'String'
    rating: 'RatingType'
    title: 'String'
  }
  DishPayload: { // field return type name
    dish: 'Dish'
    success: 'Boolean'
  }
  Mutation: { // field return type name
    createDish: 'Dish'
    deleteDish: 'DishPayload'
    login: 'AuthPayload'
    register: 'AuthPayload'
    updateDish: 'DishPayload'
    updateMe: 'User'
  }
  Query: { // field return type name
    dishById: 'Dish'
    dishes: 'Dish'
    filterDishes: 'Dish'
    me: 'User'
    users: 'User'
  }
  User: { // field return type name
    comments: 'Comment'
    createdAt: 'DateTime'
    dishes: 'Dish'
    email: 'String'
    firstName: 'String'
    id: 'Int'
    lastName: 'String'
    password: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createDish: { // args
      CreateDishInput: NexusGenInputs['CreateDishInput']; // CreateDishInput!
    }
    deleteDish: { // args
      id?: number | null; // Int
    }
    login: { // args
      email?: string | null; // String
      password?: string | null; // String
    }
    register: { // args
      Input: NexusGenInputs['RegisterUserInput']; // RegisterUserInput!
    }
    updateDish: { // args
      UpdateDishInput: NexusGenInputs['UpdateDishInput']; // UpdateDishInput!
    }
    updateMe: { // args
      Input?: NexusGenInputs['UpdateMeInput'] | null; // UpdateMeInput
    }
  }
  Query: {
    dishById: { // args
      id?: number | null; // Int
    }
    filterDishes: { // args
      searchString?: string | null; // String
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}