const dotenv = require('dotenv').config()
const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'EasyService';
const adapterConfig = { mongoUri: process.env.MONGO_URI };


const ServiceProviderSchema = require('./lists/ServiceProvider')
const ServiceSchema = require('./lists/Service')

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookieSecret : process.env.COOKIE_SECRET,
});

keystone.createList('ServiceProvider', ServiceProviderSchema)
keystone.createList('Service', ServiceSchema)

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ name: PROJECT_NAME, enableDefaultRoute: true })],
};
