export default {
  additionalProperties: false,
  definitions: {
    actionItem: {
      type: 'object',
      properties: {
        actionName: {
          type: 'string',
          description: 'Name of action that fires when button or link is pressed'
        },
        route: {
          type: 'string',
          description: 'Target for link'
        },
        text: {
          type: 'string',
          description: 'The text displayed on button or link'
        },
        icon: {
          type: 'object',
          description: 'Icon if present',
          properties: {
            name: {'string'},
            pack: {'string'}
          },
          required: ['name']
        },
        size: {
          type: 'string',
          description: 'Size of button or link',
          enum: ['small', 'medium', 'large'],
          default: 'small'
        },
        priority: {
          type: 'string',
          description: 'Priority of button or link',
          enum: ['primary', 'secondary', 'tertiary'],
          default: 'primary'
        },
        enabled: {
          type: 'string',
          description: 'Tells if button or link is enabled based on number of items selected',
          enum: ['single', 'multi', 'always', 'never'],
          default: 'single'
        }
      }
    }
  },
  type: 'object',
  description: 'Object browser configuration schema',
  properties: {
    bunsenModel: {
      type: 'object',
      description: 'Bunsen model for list items'
    },
    bunsenView: {
      ref: 'https://github.com/ciena-blueplanet/bunsen-core/blob/master/src/validator/view-schemas/v2.js',
      description: 'Bunsen view for list items'
    },
    expandable: {
      type: 'boolean',
      default: false,
      description: 'Is list expandable?'
    },
    expandedBunsenModel: {
      type: 'object',
      description: 'Bunsen model for expanded list items'
    },
    expandedBunsenView: {
      ref: 'https://github.com/ciena-blueplanet/bunsen-core/blob/master/src/validator/view-schemas/v2.js',
      description: 'Bunsen view for expanded list items'
    },
    rowHeight: {
      type: 'number',
      description: 'Row height given to frost-list. Default is frost-list default.'
    },
    pageSize: {
      type: 'number',
      default: 100,
      description: 'Number of items fetched at a time'
    },
    maxPages: {
      description: 'Number of pages to retain and keep updated. Null or omitted to keep everything',
      oneOf: [{
        type: 'number',
      }, {
        type: 'Null',
      }],
      default: null
    },
    filterBunsenModel: {
      type: 'object',
      description: 'Bunsen model for filter'
    },
    filterBunsenView: {
      ref: 'https://github.com/ciena-blueplanet/bunsen-core/blob/master/src/validator/view-schemas/v2.js',
      description: 'Bunsen view for filter'
    },
    sorting: {
      type: 'array',
      description: 'Available sort methods',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          name: {
            type: 'string',
            description: 'Used both for display and configuration'
          },
          defaultDescending: {
            type: 'boolean',
            description: 'When selected the sort polarity will be changed to ascending or descending. Omit for normal behavior where ascending or descending state is retained.',
          }
        },
        required: ['name']
      }
    },
    selectionType: {
      type: 'string',
      description: 'Controls what type of selection is available',
      enum: ['single', 'multi', 'none'],
      default: 'multi'
    },
    actionBarButtons: {
      type: 'array',
      description: 'Buttons in the action bar',
      items: {
        '$ref': '#/definitions/actionItem'
      }
    },
    actionBarLinks: {
      type: 'array',
      description: 'Links in the action bar',
      items: {
        '$ref': '#/definitions/actionItem'
      }
    },
    infoBar: {
      type: 'object',
      description: 'Info bar configuration',
      properties: {
        icon: {
          type: 'object',
          description: 'Info bar icon',
          properties: {
            name: {'string'},
            pack: {'string'}
          },
          required: ['name']
        },
        title: {
          type: 'string',
        },
        summary: {
          type: 'string'
        },
        actionItems: {
          type: 'array',
          description: 'Buttons on the info bar. Typically a create button.',
          items: {
            '$ref': '#/definitions/actionItem'
          }
        }
      }
    }
  }
}
