import {Mongo} from 'meteor/mongo';
import './methods';

export const Items = new Mongo.Collection('items');

