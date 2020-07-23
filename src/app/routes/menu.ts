
const My_project = {
  text: 'My project',
  link: '/my-project',
};
const Message = {
  text: 'Message',
  link: '/message',
};
//------- Project Submenu --------
const Technology = {
  text: 'Technology',
  index: 'technology',
  link: '/projects/technology',
};
const Retail_store = {
  text: 'Retail store',
  index: 'retail_store',
  link: '/projects/retail_store',
};
const Wholesale = {
  text: 'Wholesale',
  index: 'wholesale',
  link: '/projects/wholesale',
};
const Service = {
  text: 'Service',
  index: 'service',
  link: '/projects/service',
};
const Education = {
  text: 'Education',
  index: 'education',
  link: '/projects/education',
};
const Transportation = {
  text: 'Transportation',
  index: 'transportation',
  link: '/projects/transportation',
};
const Agriculture = {
  text: 'Agriculture, Irrigation & water',
  index: 'agriculture',
  link: '/projects/agriculture',
};
const Communication = {
  text: 'Communication',
  index: 'communication',
  link: '/projects/communication',
};
const Product = {
  text: 'Product',
  index: 'product',
  link: '/projects/product',
};
const Restaurant = {
  text: 'Restaurant, food & beverage',
  index: 'restaurant',
  link: '/projects/restaurant',
};
const Tourism = {
  text: 'Tourism, Art & Culture',
  index: 'tourism',
  link: '/projects/tourism',
};
const Fashion = {
  text: 'Fashion',
  index: 'fashion',
  link: '/projects/fashion',
};
const Non_profit_project = {
  text: 'Non profit project',
  index: 'non_profit_project',
  link: '/projects/non_profit_project',
};
const Funder_projects = {
  text: 'Funder Projects',
  index: 'funder_projects',
  link: '/projects/funder_projects',
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
