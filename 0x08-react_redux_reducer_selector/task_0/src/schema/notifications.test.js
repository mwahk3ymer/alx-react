import { normalizeNotificationsData } from './notifications';

const testData = [
  {
    id: "5debd76480edafc8af244228",
    author: {
      id: "5debd764a7c57c7839d722e9",
      name: { first: "Poole", last: "Sanders" },
      email: "poole.sanders@holberton.nz",
      picture: "http://placehold.it/32x32",
      age: 25
    },
    context: {
      guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
      isRead: true,
      type: "urgent",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    }
  },
  // More test data...
	
];

test('Normalized data contains correct result array', () => {
  const normalizedData = normalizeNotificationsData(testData);

  expect(Object.keys(normalizedData.entities.notifications)).toEqual([
    "5debd76480edafc8af244228",
    "5debd764507712e7a1307303",
    "5debd76444dd4dafea89d53b",
    // Add more keys as needed
  ]);
});


test('Get all notifications for a user', () => {
  const expectedNotifications = [
    {
      guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
      isRead: true,
      type: "urgent",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
      guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
      isRead: false,
      type: "urgent",
      value: "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed"
    }
  ];
}

test('Normalized data contains correct users entity', () => {
  const normalizedData = normalizeNotificationsData(testData);
  const userId = "5debd764a7c57c7839d722e9";

  expect(normalizedData.entities.users[userId]).toEqual({
    age: 25,
    email: "poole.sanders@holberton.nz",
    id: "5debd764a7c57c7839d722e9",
    name: { first: "Poole", last: "Sanders" },
    picture: "http://placehold.it/32x32"
  });
});

test('Normalized data contains correct messages entity', () => {
  const normalizedData = normalizeNotificationsData(testData);
  const messageId = "efb6c485-00f7-4fdf-97cc-5e12d14d6c41";

  expect(normalizedData.entities.messages[messageId]).toEqual({
    guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
    isRead: false,
    type: "default",
    value: "Cursus risus at ultrices mi."
  });
});

test('Normalized data contains correct notifications entity', () => {
  const normalizedData = normalizeNotificationsData(testData);
  const notificationId = "5debd7642e815cd350407777";

  expect(normalizedData.entities.notifications[notificationId]).toEqual({
    author: "5debd764f8452ef92346c772",
    context: "3068c575-d619-40af-bf12-dece1ee18dd3",
    id: "5debd7642e815cd350407777"
  });
});
