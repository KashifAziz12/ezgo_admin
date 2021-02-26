const Menu = [
  {header: 'Apps'},
  {
    title: 'Dashboard',
    group: 'apps',
    icon: 'dashboard',
    name: 'Dashboard',
    href: '/admin'
  },
    {header: 'Employee Information'},

  {
    title: 'Employee',
    group: 'employee',
    component: 'employees',
    icon: 'widgets',
    items: [
      {name: 'employees', title: 'Employees', href: '/employees'},
      {name: 'employee', title: 'Add Employee', href: '/employees/add'},
    ]
  },
  
];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;
