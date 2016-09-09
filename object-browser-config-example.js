export default {
  bunsenModel: {
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
  bunsenView: {
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
  infoBar: {
    icon: {
      name: 'user-account',
      pack: 'uac-icon-pack'
    },
    title: 'User Accounts',
    actionItems: [{
      actionName: 'onCreate',
      icon: {
        name: 'create'
      },
      text: 'Create',
      enabled: 'always'
    }]
  }
}
