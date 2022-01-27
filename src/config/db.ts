/* eslint-disable no-useless-constructor */
/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { Connector } from 'indexeddb-orm/dist/connection/connector';
import { Model } from 'indexeddb-orm/dist/models/model';
import { RelationTypes } from 'indexeddb-orm/dist/models/model.interface';

export class UserProfiles extends Model {
  static TableName = 'userProfiles';

  constructor(db: any, table: any, connector: any) {
    super(db, table, connector);
  }
}

export class Users extends Model {
  static TableName = 'users';

  constructor(db: any, table: any, connector: any) {
    super(db, table, connector);
  }
}

console.log(RelationTypes);

const bla: any = {
  name: 'nameOfDatabase',
  version: 1, // version of database
  migrations: [
    {
      name: 'users', // name of table
      primary: 'id', // auto increment field (default id)
      ormClass: Users,
      columns: [
        {
          name: 'email', // other indexes in the database
          attributes: {
            // other keyPath configurations for the index
            unique: true,
          },
        },
        {
          name: 'userProfiles', // name of table
          primary: 'id', // auto increment field (default id)
          ormClass: UserProfiles,
          columns: [
            {
              name: 'userId', // other indexes in the database
            },
            {
              name: 'userContacts',
              columns: [
                {
                  name: 'phone',
                  attributes: {
                    multiEntry: true,
                  },
                },
                {
                  name: 'contactId', // name of the index
                  index: 'medical.contactId', // if provided then indexing value will be this
                },
                {
                  name: 'userId',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const db = new Connector(bla);

export default db;
