module.exports = {
  datastores: {
    default: {
      adapter: 'sails-postgresql',
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'newhrm2',
      ssl: false
    },
  },
  models: {
//
//     /***************************************************************************
//     *                                                                          *
//     * To help avoid accidents, Sails automatically sets the automigration      *
//     * strategy to "safe" when your app lifts in production mode.               *
//     * (This is just here as a reminder.)                                       *
//     *                                                                          *
//     * More info:                                                               *
//     * https://sailsjs.com/docs/concepts/models-and-orm/model-settings#?migrate *
//     *                                                                          *
//     ***************************************************************************/
//     migrate: 'safe',
//
//     /***************************************************************************
//     *                                                                          *
//     * If, in production, this app has access to physical-layer CASCADE         *
//     * constraints (e.g. PostgreSQL or MySQL), then set those up in the         *
//     * database and uncomment this to disable Waterline's `cascadeOnDestroy`    *
//     * polyfill.  (Otherwise, if you are using a databse like Mongo, you might  *
//     * choose to keep this enabled.)                                            *
//     *                                                                          *
//     ***************************************************************************/
//     // cascadeOnDestroy: false,
//
  },
};
