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
        priority: {
          type: 'string',
          description: 'Priority of button or link',
          enum: ['primary', 'secondary', 'tertiary'],
          default: 'secondary'
        },
        enabled: {
          type: 'string',
          description: 'Tells if button or link is enabled based on number of items selected',
          enum: ['single', 'multi', 'always'],
          default: 'always'
        }
      }
    }
  },
  type: 'object',
  description: 'Object browser configuration schema',
  properties: {
    listBunsenModel: {
      type: 'object',
      description: 'Bunsen model for list items'
    },
    listBunsenView: {
      ref: 'https://github.com/ciena-blueplanet/bunsen-core/blob/master/src/validator/view-schemas/v2.js',
      description: 'Bunsen view for list items'
    },
    expandedListBunsenView: {
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
        properties: {
          name: {
            type: 'string',
            description: 'Name to display in UI'
          },
          type: {
            type: 'string',
            description: 'Describes sort type to adapter'
          },
          attrib: {
            oneOf: [{
              type: 'string',
              description: 'Describes sort attribute to adapter'
            }, {
              type: 'object'
            }]
          },
          defaultDescending: {
            type: 'boolean',
            description: 'When selected the sort polarity will be changed to ascending or descending. Omit for normal behavior where ascending or descending state is retained.',
            default: false
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
    actionBarControls: {
      type: 'array',
      description: 'Buttons and links in the action bar',
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
        controls: {
          type: 'array',
          description: 'Buttons and links on the info bar. Typically a create button.',
          items: {
            '$ref': '#/definitions/actionItem'
          }
        }
      }
    },
    required: ['bunsenModel', 'bunsenView']
  }
}
