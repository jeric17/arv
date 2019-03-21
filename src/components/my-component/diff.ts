const pattern1 = {
  Ap: {
    Theme: {
      NavBarFontColor: 3,  
      ActionButtonColor: 3
    }  
  },
  AppContent: {
    Name: 'four',
    NavBarColor: '#fff000',
    Label: 'Home',
  },
  Lib: {},
  ok: 1
};

const pattern2 = {
  App: {
    Theme: {
      NavBarFontColor: 3,  
      ActionButtonColor: 3,
      Item: 2
    }  
  },
  AppContent: {
    Name: 'four',
    NavBarColor: '#fff000',
    Label: 'Home',
  }
};

export const Diff = {
  name: 'Diff',
  element: 'arv-diff',
  slot: false,
  propsDescription: [
    {
      name: 'old-version',
      type: 'string',
      description: 'string to campare with'
    },
    {
      name: 'new-version',
      type: 'string',
      description: 'new string to compare to'
    }
  ],
  props: [
    {
      name: 'oldVersion',
      displayName: 'old-version',
      type: 'object',
      value: JSON.stringify(pattern1, null, 2)
    },
    {
      name: 'newVersion',
      displayName: 'new-version',
      type: 'object',
      value: JSON.stringify(pattern2, null, 2)
    }
  ]
};
