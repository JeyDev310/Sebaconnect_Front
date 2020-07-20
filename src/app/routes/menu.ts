
const My_project = {
  text: 'My project',
  link: '/my_project',
};
const Message = {
  text: 'Message',
  link: '/message',
};
//------- Project Submenu --------
const Technology = {
  text: 'Technology',
  link: '/project/technology',
};
const Retail_store = {
  text: 'Retail store',
  link: '/project/retail_store',
};
const Wholesale = {
  text: 'Wholesale',
  link: '/project/wholesale',
};
const Service = {
  text: 'Service',
  link: '/project/service',
};
const Education = {
  text: 'Education',
  link: '/project/education',
};
const Transportation = {
  text: 'Transportation',
  link: '/project/transportation',
};
const Agriculture = {
  text: 'Agriculture, Irrigation & water',
  link: '/project/agriculture',
};
const Communication = {
  text: 'Communication',
  link: '/project/communication',
};
const Product = {
  text: 'Product',
  link: '/project/product',
};
const Restaurant = {
  text: 'Restaurant, food & beverage',
  link: '/project/restaurant',
};
const Tourism = {
  text: 'Tourism, Art & Culture',
  link: '/project/tourism',
};
const Fashion = {
  text: 'Fashion',
  link: '/project/fashion',
};
const Non_profit_project = {
  text: 'Non profit project',
  link: '/project/non_profit_project',
};
const Funder_projects = {
  text: 'Funder Projects',
  link: '/project/funder_projects',
};

//-------------------------------
const Project = {
  text: 'Project',
  link: '/project',
  submenu: [
    Technology, Retail_store, Wholesale, Service, Education, Transportation, Agriculture,
    Communication, Product, Restaurant, Tourism, Fashion, Non_profit_project, Funder_projects
  ]
};
const Inspiration = {
  text: 'Inspiration',
  link: '/inspiration',
};
const About_us = {
  text: 'About us',
  link: '/about_us',
};
const headingMain = {
  text: 'Main Navigation',
  heading: true
};

export const menu = [
    headingMain,
    My_project,
    Message,
    Project,
    Inspiration,
    About_us,
];
