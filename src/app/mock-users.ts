// Moch database with users and ChatdataService. For testing purposes

import { User } from './user';
import { ChatdataService } from './chatdata.service';

export const USERS: User[] = [
  { id: '10',
    name: 'Jein Sweet',
    nick: 'Jswee',
    tel: '12345678',
    city: 'Ashdod, ISR',
    bday: 'Jul 12, 1988', gender: 'Female',
    lang: 'Hebrew',
    slog: 'Hey here...',
    msgs: [
        {mtext: 'Thanks, im fine. And you?', incoming: false},
        {mtext: 'Hey.. How are you?', incoming: true},
        {mtext: 'Hi', incoming: false},
    ]
 },

 { id: '20',
    name: 'John Smith',
    nick: 'Jhons',
    tel: '987908',
    city: 'London, GB',
    bday: 'Nov 7, 1974', gender: 'Male',
    lang: 'English',
    slog: 'Love you all... cheers))',
    msgs: [
        {mtext: 'Thanks, im fine. And you?', incoming: false},
        {mtext: 'Hey.. How are you?', incoming: true},
        {mtext: 'Hi', incoming: false},
    ]
 },

 { id: '30',
    name: 'Kosta Rica',
    nick: 'Krica',
    tel: '09876807',
    city: 'Minsk, BR',
    bday: 'Feb 29, 2000', gender: 'Male',
    lang: 'Russian',
    slog: 'Good time!!!',
    msgs: [
        {mtext: 'Just to say Hello...  at 4:30AM )))', incoming: false},
        {mtext: 'Hey.. you too... still sleeping.. What?!', incoming: true},
        {mtext: 'Good morning Man!', incoming: false},
    ]
 },

 { id: '40',
 name: 'Kelly Klava',
 nick: 'Kklav',
 tel: '90679876',
 city: 'Tbilisy, GE',
 bday: 'Aug 02, 1998', gender: 'Female',
 lang: 'Georgian',
 slog: 'Bonjure ...',
 msgs: [
     {mtext: 'Would you like to drink something?', incoming: false},
     {mtext: 'Hey.. How are you?', incoming: true},
     {mtext: 'Good afternoon...', incoming: false},
 ]
},

{ id: '50',
 name: 'Sarah Huz',
 nick: 'Sarahh',
 tel: '4363253',
 city: 'Kuala-Lumpur, MA',
 bday: 'Aug 02, 1998', gender: 'Female',
 lang: 'Bulgarian',
 slog: 'Love you all!!!',
 msgs: [
     {mtext: 'Sure!', incoming: false},
     {mtext: 'Yes thanks)) Will you make?', incoming: true},
     {mtext: 'Good morning! Coffee?', incoming: false},
 ]
},

{ id: '60',
    name: 'Fedya Rashpil',
    nick: 'Fedar',
    tel: '877774646',
    city: 'Caesaria, ISR',
    bday: 'Oct 12, 1971', gender: 'Male',
    lang: 'Armenian',
    slog: 'I wait you...',
    msgs: [
        {mtext: 'Im your friend...', incoming: false},
        {mtext: 'Who are you?', incoming: true},
        {mtext: 'Hello...', incoming: false},
    ]
 },

 { id: '70',
    name: 'Michael Ogly',
    nick: 'Micho',
    tel: '777888777',
    city: 'Paris, FR',
    bday: 'Nov 25, 1977', gender: 'Male',
    lang: 'French',
    slog: 'Be my friend!))',
    msgs: [
        {mtext: 'How are you doing?', incoming: false},
        {mtext: 'Hi', incoming: true},
        {mtext: 'Good evening', incoming: false},
    ]
 }

];
