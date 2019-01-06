export const ConfigMenu = {
    0: {
        name: 'No role',
        menu: [  {
                label: 'Administration', expanded: true, items:
                    [{
                        label: 'Users',
                        routerLink: 'users',
                        icon: 'fa fa-caret-right'
                    },
                        {
                            label: 'Projects',
                            routerLink: 'projects',
                            icon: 'fa fa-caret-right'
                        },
                        {
                            label: 'Tasks',
                            routerLink: 'tasks',
                            icon: 'fa fa-caret-right'
                        }]
            }
        ]
    }
};