Package.describe({
  name: 'ethereumclassic:accounts',
  summary: 'Provides and updates the ethereum accounts in the Accounts collection',
  version: '0.3.10',
  git: 'http://github.com/ethereumproject/meteor-package-accounts'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('underscore', ['client', 'server']);
  api.use('mongo', ['client', 'server']);

  api.use('frozeman:persistent-minimongo@0.1.8', 'client');
  api.use('ethereumclassic:web3@0.15.1', ['client', 'server']);

  api.export(['EthAccounts'], ['client', 'server']);

  api.addFiles('accounts.js', ['client', 'server']);
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('ethereumclassic:accounts');
//   api.addFiles('accounts-tests.js');
// });

