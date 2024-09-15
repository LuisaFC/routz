import { model, Schema } from 'mongoose'

export const User = model('User', new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  favDestinations: {
    type: [{
      destination: {
        type: Schema.Types.ObjectId,
        ref: 'Destination'
      },
    }],
  },
  myRoutes: {
    type: [{
      routes: {
        type: Schema.Types.ObjectId,
        ref: 'Route'
      }
    }]
  }
}));
