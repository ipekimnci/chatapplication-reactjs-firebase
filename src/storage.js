import database from './database_creator';
let initial_data_loaded = false;

export function getMessages() {
  return database.ref('messages').once('value').then(data => {
    const messages = [
      {
        id: 1,
        text: 'merhaba',
        author: 'ipek',
        channel_id: 1
      },
      {
        id: 2,
        text: 'merhaba nasılsın',
        author: 'nisa',
        channel_id: 1
      },
      {
        id: 3,
        text: 'selam',
        author: 'aslıhan',
        channel_id: 2
      },
      {
        id: 4,
        text: 'nasılsın',
        author: 'irem',
        channel_id: 3
      }
    ];
    const values = data.val();
    for (let prop in values) {
      if ({}.hasOwnProperty.call(values, prop)) {
        messages.push(values[prop]);
      }
    }
    initial_data_loaded = true;
    return messages;
  });
}

export function getChannels() {
  return database.ref('channels').once('value').then(data => {
    const channels = [
      { id: 1, name: 'Genel Kullanıcılar' },
      { id: 2, name: 'Aile Grubu' },
      { id: 3, name: 'İş Grubu' },
    ];
    const values = data.val();
    for (let prop in values) {
      if ({}.hasOwnProperty.call(values, prop)) {
        channels.push(values[prop]);
      }
    }
    return channels;
  });
}

export function saveMessage(message) {
  database.ref('messages').push(message);
}

export function onNewMessage(callback, delay = false) {
  database.ref('messages').on('child_added', (data) => {
    if (!initial_data_loaded) return;
    if (delay) {
      setTimeout(() => callback(data.val()), 3000);
    } else {
      callback(data.val());
    }
  })
}
