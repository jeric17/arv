const pattern1 = {
    App: {
        Theme: {
            NavBarFontColor: 3,
            ActionButtonColor: 3
        }
    },
    AppContent: {
        Label: 'Original',
        NavBarColor: '#fff000',
        NavBarFontColor: '#fff000',
        Name: 'four'
    },
    SubViews: {
        Label: 'Home'
    },
    Valid: true
};
const pattern2 = {
    App: {
        Theme: {
            NavBarFontColor: 3,
            ActionButtonColor: 3,
            TabColor: 4
        }
    },
    added: true,
    AppContent: {
        Name: 'New',
        NavBarColor: '#fff000',
        NavBarFontColor: '#fff000',
        Label: 'Home'
    },
    SubViews: {
        Label: 'Home'
    },
    Valid: true
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
