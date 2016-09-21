export default {
  listBunsenModel: {
    type: 'object',
    properties: {
      username: {
        type: 'string'
      },
      email: {
        type: 'string'
      },
      description: {
        type: 'string'
      }
    }
  },
  listBunsenView: {
    version: '2.0',
    type: 'form',
    cells: [{
      model: 'username',
      renderer: 'custom-user-summary'
    }, {
      model: 'email',
      inputClassName: 'secondary'
    }, {
      model: 'description',
      inputClassName: 'secondary'
    }]
  },
  filterBunsenModel: {
    type: 'object',
    properties: {
      username: {
        type: 'string'
      },
      firstName: {
        type: 'string'
      },
      email: {
        type: 'string'
      },
    }
  },
  filterBunsenView: {
    version: '2.0',
    type: 'form',
    cells: [{
      model: 'username',
    }, {
      model: 'firstName',
      label: 'First Name'
    }, {
      model: 'email',
    }]
  },
  sorting: [{
    name: 'First Name'
  }, {
    name: 'Username'
  }],
  actionBarButtons: [{
    actionName: 'onEdit',
    text: 'Edit',
    enabled: 'single'
  }, {
    actionName: 'onDelete',
    text: 'Delete',
    priority: 'tertiary',
    enabled: 'multi'
  }],
  actionBarLinks: [{
    text: 'Go elsewhere',
    route: 'elsewhere',
    enabled: 'single'
  }],
  infoBar: {
    icon: {
      name: 'user-account',
      pack: 'uac-icon-pack'
    },
    title: 'User Accounts',
    subTitle: 'List of users',
    actionButtons: [{
      actionName: 'onCreate',
      icon: {
        name: 'create'
      },
      text: 'Create',
      enabled: 'always'
    }]
  },
  initialState: {
    sort: [{
      name: 'Username',
      descending: false
    }],
    filter: {
      firstName: 'steven'
    },
    expanded: false
  },
  dataAdapter: {
    // Configure data adapter, probably by giving an endpoint or ember data model name
    // Any other settings specific to the data model go here as well.
    endpoint: 'users'
  }
}
